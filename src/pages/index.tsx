import Button from "@/components/Button";
import CollapsibleTable from "@/components/CollapsibleTable";
import Head from "next/head";
import CrossIcon from "@public/images/icons/cross.svg";
import FilterIcon from "@public/images/icons/filter.svg";
import Tags from "@/components/Tags";
import Chart from "react-google-charts";
import AreaChart from "@/components/AreaChart";
import suppliers from "@/suppliersMock.json";
import customers from "@/customersMock.json";
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  useEffect,
  useState,
} from "react";
const customersAndSuppliers = [...customers, ...suppliers].sort(
  () => Math.random() - 0.5
);
export default function Home() {
  const tableHeaders = ["ИНН"];
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [companyType, setCompanyType] = useState("Поставщики");
  const [search, setSearch] = useState("");
  const [currentCompanies, setCurrentCompanies] = useState(suppliers);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
  }

  function handleFilterSwitch(e: ChangeEvent<HTMLInputElement>) {
    setCompanyType(e.currentTarget.value);
    let newCompanies =
      e.currentTarget.value === "Поставщики"
        ? suppliers
        : e.currentTarget.value === "Заказчики"
        ? customers
        : customersAndSuppliers;
    // @ts-ignore
    setCurrentCompanies(newCompanies);
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full p-4 mt-8 text-3xl ">
        <h2 className="mb-4">Общий рейтинг</h2>
        <div className="relative flex items-center w-full bg-white border rounded-t-lg ">
          <CrossIcon
            className="absolute left-6 hover:cursor-pointer "
            onClick={() => setSearch("")}
          />
          <input
            type="text"
            placeholder="Область деятельности"
            value={search}
            onChange={handleSearch}
            className="flex-1 w-full p-2 pl-12 rounded-t-lg"
          />
          <div className="absolute right-40 hover:cursor-pointer ">
            <FilterIcon onClick={() => setFilterOpen(!isFilterOpen)} />
            {isFilterOpen ? (
              <div className="absolute z-10 p-4 bg-white border rounded-lg -right-full w-max top-full">
                <h3 className="mb-4 text-xl font-bold">Тип компаний:</h3>
                <div className="flex flex-col gap-4">
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="companyType"
                      value="Поставщики"
                      checked={companyType === "Поставщики"}
                      onChange={handleFilterSwitch}
                    />
                    Поставщики
                  </label>
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="companyType"
                      value="Заказчики"
                      checked={companyType === "Заказчики"}
                      onChange={handleFilterSwitch}
                    />
                    Заказчики
                  </label>
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="companyType"
                      value="Все"
                      checked={companyType === "Все"}
                      onChange={handleFilterSwitch}
                    />
                    Все
                  </label>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Button type={"light"} className="absolute px-12 py-2 right-2">
            Найти
          </Button>
        </div>
        <Tags tagsList={["Площадка: АО «ЕЭТП»", "Секция: 44-ФЗ"]} />
        <div>
          <CollapsibleTable
            headers={tableHeaders}
            // @ts-ignore
            rows={currentCompanies}
            search={search}
          />
        </div>
      </main>
    </>
  );
}

