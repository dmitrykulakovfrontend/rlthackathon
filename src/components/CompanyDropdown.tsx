import React from "react";
import Button from "./Button";
import AreaChart from "./AreaChart";
import { Company } from "./CollapsibleTable";

type Props = {
  company: Company;
};

const data = [
  ["Месяц", "Деньги", "Траты"],
  ["Июнь", 100000, 42300],
  ["Июль", 117120, 121260],
  ["Август", 66320, 11250],
  ["Сентябрь", 101230, 54120],
];

const options = {
  title: "Эффективность компании",
  hAxis: { title: "Месяц", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0, title: "Рубли" },
};
const terms = [
  "Тип активности по лицензии",
  "Вид субъекта МСП",
  "Категория субъекта МСП",
  "Дата регистрации",
  "Время жизни компании в годах",
  "Численность работников за 2019",
  "Количество участий в процедурах",
  "Процент побед в процедурах",
];
function CompanyDropdown({ company }: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-xl font-bold">Сведения о компании</h3>
        <ul className="flex flex-col max-w-md gap-4">
          {company.registration_date ? (
            <li>Дата регистрации: {company.registration_date}</li>
          ) : (
            ""
          )}
          {company.avg_staff_qty ? (
            <li>Численность работников за 2019: {company.avg_staff_qty}</li>
          ) : (
            ""
          )}
          {company.license_activity_type ? (
            <li>Тип активности по лицензии: {company.license_activity_type}</li>
          ) : (
            ""
          )}
          {company.life_time ? (
            <li>Время жизни компании в годах: {company.life_time}</li>
          ) : (
            ""
          )}
          {company.msp_category ? (
            <li>Категория субъекта МСП: {company.msp_category}</li>
          ) : (
            ""
          )}
          {company.msp_type ? (
            <li>Вид субъекта МСП: {company.msp_type}</li>
          ) : (
            ""
          )}
          {company.procedure_qty ? (
            <li>Количество участий в процедурах: {company.procedure_qty}</li>
          ) : (
            ""
          )}
          {company["win_part, %"] ? (
            <li>
              Процент побед в процедурах: {company["win_part, %"].toFixed(2)}%
            </li>
          ) : (
            ""
          )}
        </ul>
        <Button href="#" className=" w-fit">
          Подробнее
        </Button>
      </div>
      <AreaChart data={data} options={options} />
    </div>
  );
}

export default CompanyDropdown;
