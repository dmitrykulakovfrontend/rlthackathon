import React from "react";
import {
  ChartPieIcon,
  PresentationChartBarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Link from "next/link";
import useLayout from "@/contexts/useLayout";

import ChartBarIcon from "@public/images/icons/chart-bar.svg";
import ChartBarSquareIcon from "@public/images/icons/chart-square-bar.svg";

function Menu() {
  const router = useRouter();
  const { setLayout, layout } = useLayout();

  const links = [
    {
      header: "Аналитика",
      submenu: [
        {
          href: "/",
          icon: <ChartBarIcon />,
          title: "Общий рейтинг",
        },
        {
          href: "/ranks",
          icon: <ChartBarSquareIcon />,
          title: "Рейтинг рынка",
        },
      ],
    },
    {
      header: "Тех-поддержка",
      submenu: [
        {
          href: "/",
          icon: <ChartBarIcon />,
          title: "Контакты",
        },
        {
          href: "/ranks",
          icon: <ChartBarSquareIcon />,
          title: "О нас",
        },
      ],
    },
  ];

  // const isMenuOpen = `${layout.isMenuOpen ? "left-0" : "-left-full"}`;
  const LinkClassName = `flex items-center gap-2  hover:cursor-pointer  transition-all text-sm`;

  function handleMenuClose() {
    setLayout({
      ...layout,
      isMenuOpen: !layout.isMenuOpen,
    });
  }
  return (
    <div
      className={`transition-all duration-300 min-w-[250px] flex flex-col items-center p-4 ml-24`}
    >
      <nav className="w-full mt-4 text-lg">
        <ul>
          {links.map(({ header, submenu }, i) => (
            <li key={i}>
              <span className="tracking-[1px] uppercase text-gray-400 text-xs">
                {header}
              </span>
              <ul className="flex flex-col gap-4 mt-4">
                {submenu.map(({ href, title, icon }, i) => (
                  <li key={i}>
                    <Link
                      href={href}
                      className={`${LinkClassName} ${
                        router.pathname === href ? "" : ""
                      }`}
                    >
                      {icon}
                      {title}
                    </Link>
                  </li>
                ))}
                <li></li>
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
