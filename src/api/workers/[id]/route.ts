import { NextResponse } from "next/server";

const backendUrl = `http://${process.env.NEXT_PUBLIC_IP_ADDRESS}:${process.env.NEXT_PUBLIC_PORT}`;

if (!process.env.NEXT_PUBLIC_IP_ADDRESS || !process.env.NEXT_PUBLIC_PORT) {
  throw new Error(
    "Environment variables NEXT_PUBLIC_IP_ADDRESS or NEXT_PUBLIC_PORT are missing.",
  );
}

const fetchWithTimeout = (
  url: string,
  options: RequestInit = {},
  timeout = 5000,
): Promise<Response> => {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout),
    ),
  ]);
};

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "Invalid worker ID" }, { status: 400 });
  }

  try {
    const response = await fetchWithTimeout(
      `${backendUrl}/workers/${id}/state`,
      {},
      5000,
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: `Worker ${id} error: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    const sanitizedData = {
      id,
      ...data,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(sanitizedData, {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch (error) {
    console.error(`Error fetching status for worker ${id}:`, error);

    return NextResponse.json(
      {
        error: `Error fetching status for worker ${id}`,
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
