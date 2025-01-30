"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

interface WorkerData {
  [workerId: string]: any;
}

interface WorkerContextType {
  workerData: WorkerData;
  isLoading: boolean;
  error: Error | null;
}

const WorkerContext = createContext<WorkerContextType | undefined>(undefined);

const fetchWorkerStatuses = async (
  workerIds: string[],
): Promise<WorkerData> => {
  const results = await Promise.all(
    workerIds.map(async (id) => {
      try {
        const response = await fetch(`/api/workers/${id}`);
        if (!response.ok) {
          throw new Error(`Worker ${id} error: ${response.status}`);
        }
        const data = await response.json();
        return { id, data };
      } catch (error) {
        console.error(`Error fetching status for worker ${id}:`, error);
        return { id, data: null };
      }
    }),
  );

  const newData: WorkerData = {};
  results.forEach(({ id, data }) => {
    if (data) newData[id] = data;
  });
  return newData;
};

export function WorkerProvider({
  children,
  initialWorkerIds = [],
}: {
  children: ReactNode;
  initialWorkerIds?: string[];
}) {
  console.log("WorkerProvider initialWorkerIds:", initialWorkerIds);

  const {
    data: workerData = {},
    isLoading,
    isFetching,
    error,
  } = useQuery({
    // TODO enable sicle back after testing
    queryKey: ["workerStatuses", initialWorkerIds],
    queryFn: () => fetchWorkerStatuses(initialWorkerIds),
    refetchInterval: 5000,
    enabled: initialWorkerIds.length > 0,
    staleTime: 5000,
    retry: 3,
  });
  // } = useQuery({
  //   queryKey: ["workerStatuses", initialWorkerIds],
  //   queryFn: () => fetchWorkerStatuses(initialWorkerIds),
  //   enabled: initialWorkerIds.length > 0,
  //   staleTime: Infinity,
  //   retry: 0,
  // });

  const value = useMemo(
    () => ({
      workerData,
      isLoading: isLoading && Object.keys(workerData).length === 0,
      error: error as Error | null,
    }),
    [workerData, isLoading, error],
  );

  console.log("Query state:", { workerData, isLoading, error, isFetching });

  return (
    <WorkerContext.Provider value={value}>{children}</WorkerContext.Provider>
  );
}

export const useWorkerContext = () => {
  const context = useContext(WorkerContext);
  if (context === undefined) {
    throw new Error("useWorkerContext must be used within a WorkerProvider");
  }
  return context;
};

