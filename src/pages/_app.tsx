import Header from "@/components/Layout/Header";
import Menu from "@/components/Layout/Menu";
import Notifications from "@/components/Layout/Notifications";
import useLayout, { LayoutProvider } from "@/contexts/useLayout";
import { SearchProvider } from "@/contexts/useSearch";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin", "cyrillic"], variable: "--font-exo2" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={` ${exo2.variable} font-exo2`}>
      <LayoutProvider>
        <SearchProvider>
          <Header />
          <div className="flex">
            <Menu />
            <Component {...pageProps} />
          </div>
        </SearchProvider>
      </LayoutProvider>
    </div>
  );
}

