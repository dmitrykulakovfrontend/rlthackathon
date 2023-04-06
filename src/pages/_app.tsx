import Header from "@/components/Layout/Header";
import Menu from "@/components/Layout/Menu";
import Notifications from "@/components/Layout/Notifications";
import useLayout, { LayoutProvider } from "@/contexts/useLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin", "cyrillic"], variable: "--font-exo2" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={` ${exo2.variable} font-exo2`}>
      <LayoutProvider>
        <Menu />
        <Wrapper>
          <Header />
          <Component {...pageProps} />
        </Wrapper>
        <Notifications />
      </LayoutProvider>
    </div>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  const { setLayout, layout } = useLayout();
  const isMenuOpen = layout.isMenuOpen ? "ml-[320px]" : "ml-0";
  const isNotificationsOpen = layout.isNotificationsOpen
    ? "mr-[320px]"
    : "mr-0";
  return (
    <div
      className={`${isMenuOpen}  ${isNotificationsOpen} transition-all duration-300`}
    >
      {children}
    </div>
  );
}

