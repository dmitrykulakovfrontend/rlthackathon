import useWindowSize from "@/utils/useWindowSize";
import React, { useContext, useEffect, useState } from "react";

type LayoutContextState = { isMenuOpen: boolean; isNotificationsOpen: boolean };

const LayoutDefaultValue = {
  layout: {
    isMenuOpen: true,
    isNotificationsOpen: true,
  } as LayoutContextState,
  setLayout: (state: LayoutContextState) => {},
};

const LayoutContext = React.createContext(LayoutDefaultValue);

export default function useLayout() {
  return useContext(LayoutContext);
}

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [layout, setLayout] = useState(LayoutDefaultValue.layout);

  const { width } = useWindowSize();

  useEffect(() => {
    if (!width) return;
    console.log(width);

    setLayout({
      isMenuOpen: width > 1024 ? true : false,
      isNotificationsOpen: width > 1350 ? true : false,
    });
  }, [setLayout, width]);

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
