import useLayout from "@/contexts/useLayout";
import { Bars3Icon, BellAlertIcon } from "@heroicons/react/24/solid";
import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";

function Header() {
  const { setLayout, layout } = useLayout();
  function handleMenuClick() {
    setLayout({
      ...layout,
      isMenuOpen: !layout.isMenuOpen,
    });
  }
  function handleNotificationsClick() {
    setLayout({
      ...layout,
      isNotificationsOpen: !layout.isNotificationsOpen,
    });
  }
  const isMenuOpen = layout.isMenuOpen ? "ml-[320px]" : "ml-0";
  const isNotificationsOpen = layout.isNotificationsOpen
    ? "max-w-[calc(100%_-_640px)]"
    : "";

  return (
    <header
      className={`${isMenuOpen} ${isNotificationsOpen} p-4 flex fixed w-full transition-all duration-300 top-0 left-0`}
    >
      <div className="h-[2px] w-full absolute left-0 bottom-0 bg-gradient-to-br from-purple-600 to-blue-500 via-pink-700 bg-opacity-50"></div>
      <Bars3Icon width={24} onClick={handleMenuClick} />
      <BellAlertIcon width={24} onClick={handleNotificationsClick} />
    </header>
  );
}

export default Header;
