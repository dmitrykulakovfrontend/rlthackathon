import useLayout from "@/contexts/useLayout";
import { Bars3Icon, BellAlertIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import Search from "@public/images/icons/search.svg";
import Button from "../Button";
import Dropdown, { Option } from "../Dropdown";

const options = [
  { value: "Заказчик", label: "Заказчик" },
  { value: "Поставщик", label: "Поставщик" },
  { value: "Комбинированный", label: "Комбинированный" },
];
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

  const [selectedOption, setSelectedOption] = useState({
    value: "Роль",
    label: "Роль",
  });

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
  };
  return (
    <header
      className={`px-16 py-4  shadow-purple flex justify-between items-center bg-white  w-full transition-all duration-300`}
    >
      <Link href="/" className="h-8">
        <Image src="/images/logo.png" width={192} height={32} alt="logo" />
      </Link>
      <div className=" relative bg-[#F6F6F6] rounded-lg min-w-[400px]">
        <input
          type="text"
          placeholder="Поиск (по ИНН, ОГРН  и чему нибудь еще)"
          className="w-full text-center px-4 py-2 bg-[#F6F6F6]  rounded-lg h-full"
        />
        <Search className="absolute right-2 hover:cursor-pointer top-[50%] translate-y-[-50%]" />
      </div>{" "}
      <div className="flex gap-4">
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
        <Button>Личный Кабинет</Button>
      </div>
    </header>
  );
}

export default Header;
