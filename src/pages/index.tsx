import Button from "@/components/Button";
import CollapsibleTable from "@/components/CollapsibleTable";
import Head from "next/head";
import CrossIcon from "@public/images/icons/cross.svg";
import FilterIcon from "@public/images/icons/filter.svg";

const companies = [
  {
    INN: 1262662,
    status: "Благополучный",
    rating: "5",
    futureRating: "9",
    inside: <div>Test</div>,
  },
  {
    INN: 12626262,
    status: "Не Благополучный",
    rating: "4",
    futureRating: "7",
    inside: <div>Test2</div>,
  },
  {
    INN: 12621662,
    status: "Благополучный",
    rating: "3",
    futureRating: "1",
    inside: <div>Test3</div>,
  },
];
export default function Home() {
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
        <div className="relative flex items-center w-full bg-white border-2 rounded-lg">
          <CrossIcon className="absolute left-2 hover:cursor-pointer " />
          <input
            type="text"
            placeholder="ИНН"
            className="flex-1 w-full p-2 pl-8"
          />
          <FilterIcon className="absolute right-40 hover:cursor-pointer " />
          <Button type={"light"} className="absolute px-12 right-2">
            Найти
          </Button>
        </div>
        <div className="p-4 ">
          <CollapsibleTable<typeof companies[0]>
            headers={Object.keys(companies[0])}
            rows={companies}
          />
        </div>
      </main>
    </>
  );
}

