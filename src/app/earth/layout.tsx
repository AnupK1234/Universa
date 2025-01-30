import Logo from "@/components/Logo";
import "./map.css";
import { Providers } from "./providers";
import Menu from "@/components/Menu";

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Logo />
      <Menu />
      <div style={{ width: "100vw", height: "100vh" }}>
        <Providers>{children}</Providers>
      </div>
    </>
  );
}

