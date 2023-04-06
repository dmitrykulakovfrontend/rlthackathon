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

  return (
    <header
      className={`p-4 flex justify-between sticky w-full transition-all duration-300 top-0 left-0`}
    >
      <div className="h-[2px] w-full absolute left-0 bottom-0 bg-gradient-to-br from-purple-600 to-blue-500 via-pink-700 bg-opacity-50"></div>
      <div className="p-2 hover:cursor-pointer">
        <Bars3Icon width={24} onClick={handleMenuClick} />
      </div>
      <div className="p-2 hover:cursor-pointer">
        <BellAlertIcon width={24} onClick={handleNotificationsClick} />
      </div>
    </header>
  );
}

export default Header;
