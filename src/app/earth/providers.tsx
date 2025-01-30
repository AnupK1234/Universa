// "use client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import AuthProvider from "@/contexts/AuthContext";
// // import MainProvider from "@/contexts/MainContext";
// // import StateMachineProvider from "@/contexts/StateMachineContext";
// import { WorkerProvider } from "@/contexts";
// import { useEffect } from "react";
// import { initApi } from "@/utils/api-client";

// export const Providers: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             refetchOnWindowFocus: false,
//             retry: 3,
//         },
//     },
// });

//   useEffect(() => {
//     initApi();
//   }, []);

//   // TODO: Add back AuthProvider, MainProvider, StateMachineProvider after demo
//   return (
//     <QueryClientProvider client={queryClient}>
//         {children}
//     </QueryClientProvider>
//   );
// };

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { WorkerProvider } from "@/contexts";
import { useEffect } from "react";

console.log("Providers rendered");
export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 3,
      },
    },
  });

  //   useEffect(() => {
  //     initApi();
  //   }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <AuthProvider> */}
        {/* <MainProvider> */}
        {/* <StateMachineProvider> */}
        {children}
        {/* </StateMachineProvider> */}
        {/* </MainProvider> */}
        {/* </AuthProvider> */}
      </QueryClientProvider>
    </>
  );
};

