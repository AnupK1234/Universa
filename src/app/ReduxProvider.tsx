"use client"; // This makes the component a Client Component

import { Provider } from "react-redux";
import { store } from "./healthcare/redux/store/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
