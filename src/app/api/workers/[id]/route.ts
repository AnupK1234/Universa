import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    const backendUrl = `http://${process.env.NEXT_PUBLIC_IP_ADDRESS}:${process.env.NEXT_PUBLIC_PORT}/workers/${id}/state`;
    
    console.log(`[${new Date().toISOString()}] API Route - Worker ${id}`);
    console.log('Backend URL:', backendUrl);
    console.log('Environment:', {
        NEXT_PUBLIC_IP_ADDRESS: process.env.NEXT_PUBLIC_IP_ADDRESS,
        NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT
    });

    try {
        const response = await fetch(backendUrl, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Response data:', data);

        return NextResponse.json(data, {
            headers: {
                'X-Backend-URL': backendUrl,
                'X-Worker-ID': id,
                'X-Request-Time': new Date().toISOString(),
            },
        });
    } catch (error:any) {
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            backendUrl,
            workerId: id,
            timestamp: new Date().toISOString()
        });

        return NextResponse.json(
            { error: 'Failed to fetch worker status' },
            { 
                status: 500,
                headers: {
                    'X-Error': error.message,
                    'X-Backend-URL': backendUrl,
                    'X-Worker-ID': id,
                },
            }
        );
    }
}