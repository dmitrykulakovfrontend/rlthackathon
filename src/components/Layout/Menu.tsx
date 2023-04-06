import React from "react";
import {
  ChartBarIcon,
  ChartPieIcon,
  PresentationChartBarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Link from "next/link";
import useLayout from "@/contexts/useLayout";

function Menu() {
  const router = useRouter();
  const { setLayout, layout } = useLayout();

  const LinkClassName = `flex gap-2 p-2 hover:cursor-pointer hover:bg-white/20 hover:font-bold hover:scale-110 transition-all`;
  const links = [
    {
      href: "/",
      icon: <ChartBarIcon width={24} />,
      title: "Основное",
    },
    {
      href: "/ranks",
      icon: <ChartPieIcon width={24} />,
      title: "Рейтинг рынка",
    },
  ];

  const isMenuOpen = `${layout.isMenuOpen ? "left-0" : "-left-full"}`;

  function handleMenuClose() {
    setLayout({
      ...layout,
      isMenuOpen: !layout.isMenuOpen,
    });
  }
  return (
    <div
      className={`${isMenuOpen} fixed top-0 bottom-0 right-0 z-10 transition-all duration-300 bg-blackberry flex flex-col items-center max-w-xs p-4`}
    >
      <div
        className={`${
          layout.isMenuOpen ? "" : "hidden"
        } fixed right-0 top-0 bottom-0 w-[calc(100%_-_320px)] bg-black/50 lg:hidden`}
        onClick={handleMenuClose}
      ></div>
      <div className="w-[2px] bottom-0 absolute right-0 top-0 bg-gradient-to-br from-purple-600 to-blue-500 via-pink-700 bg-opacity-50"></div>
      <div className="flex items-center justify-center gap-4">
        <Link href="/">
          <svg className="h-8 w-60">
            <use xlinkHref="#logo"></use>
          </svg>
        </Link>
        <button className="p-2 ml-auto lg:hidden">
          <XMarkIcon width={36} onClick={handleMenuClose} />
        </button>
      </div>
      <nav className="w-full mt-4 text-lg">
        <ul>
          {links.map(({ href, icon, title }, i) => (
            <li key={i}>
              <Link
                href={href}
                className={`${LinkClassName} ${
                  router.pathname === href
                    ? "bg-white/10 font-bold scale-105"
                    : ""
                }`}
              >
                {icon}
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
