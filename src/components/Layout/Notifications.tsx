import useLayout from "@/contexts/useLayout";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

function Notifications() {
  const { setLayout, layout } = useLayout();

  function handleNotificationsClose() {
    setLayout({
      ...layout,
      isNotificationsOpen: !layout.isNotificationsOpen,
    });
  }
  return (
    <div
      className={`${
        layout.isNotificationsOpen ? "right-0" : "-right-full"
      } fixed top-0 transition-all duration-300 bg-blackberry flex flex-col items-center w-full h-screen max-w-xs p-4`}
    >
      <div
        className={`${
          layout.isNotificationsOpen ? "" : "hidden"
        } fixed left-0 top-0 bottom-0 w-[calc(100%_-_320px)] bg-black/50 lg:hidden`}
        onClick={handleNotificationsClose}
      ></div>
      <div className="w-[2px] h-screen absolute left-0 top-0 bg-gradient-to-br from-purple-600 to-blue-500 via-pink-700 bg-opacity-50"></div>
      <button className="absolute top-2 left-2 lg:hidden">
        <XMarkIcon width={36} onClick={handleNotificationsClose} />
      </button>
      <h1>notifications</h1>
    </div>
  );
}

export default Notifications;
