import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

interface HeaderProps {
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setSelectOptions: React.Dispatch<React.SetStateAction<string>>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
}

const TableHeader = ({
  setLimit,
  limit,
  setPage,
  setKeyword,
  setSelectOptions,
}: HeaderProps) => {
  return (
    <>
      <div className="p-5 flex gap-3 justify-between flex-col md:flex-row md:text-base text-sm bg-white">
        <Link to="/registrasi">
          <button className="bg-primary md:font-semibold font-medium flex justify-center items-center gap-3 text-white rounded-lg md:w-40 w-full md:h-12 h-10">
            <BsPlusLg className="font-extrabold" />
            <span>Entry New Data</span>
          </button>
        </Link>

        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <input
              onChange={(e) => {
                setPage(1);
                setKeyword(e.target.value);
              }}
              type="search"
              id="default-search"
              className="block py-3 pl-5 md:w-96 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray focus:ring-blue focus:border-blue"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="text-grey absolute right-2.5 bottom-1.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-4 py-2"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="p-5 flex justify-between gap-3 md:flex-row flex-col font-medium bg-white">
        <div className="flex gap-1">
          <p className="pr-2">Showing</p>
          <input
            defaultValue={limit}
            onChange={(e) => {
              setLimit(
                !isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 1
              );
              setPage(1);
            }}
            className="border rounded w-12 h-7"
            type="number"
          />
          <p>Data</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <select
              onChange={(e) => {
                setSelectOptions(e.target.value);
                setPage(1);
              }}
              id="countries"
              className="bg-gray-50 pl-7 border border-primary text-primary text-sm rounded-lg focus:ring-blue focus:border-blue block md:w-52 w-40 h-full p-2.5"
            >
              <option value="all" className="text-center">
                All Data
              </option>
              <option value="category-1" className="text-center">
                Data With Category 1
              </option>
              <option value="category-2" className="text-center">
                Data With Category 2
              </option>
            </select>
            <svg
              className="absolute left-3 top-4"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.118408 0.750001C0.118408 0.401189 0.401176 0.118422 0.749987 0.118422H13.25C13.5988 0.118422 13.8816 0.401189 13.8816 0.750001V2.25C13.8816 2.40712 13.823 2.55859 13.7173 2.67485L8.88157 7.99417V11.75C8.88157 11.9719 8.76517 12.1774 8.57493 12.2916L6.07493 13.7916C5.87982 13.9086 5.63681 13.9117 5.43881 13.7996C5.2408 13.6875 5.11841 13.4775 5.11841 13.25V7.99417L0.282657 2.67485C0.176969 2.55859 0.118408 2.40712 0.118408 2.25V0.750001ZM1.38157 1.38158V2.00583L6.21732 7.32515C6.32301 7.44141 6.38157 7.59289 6.38157 7.75V12.1345L7.61841 11.3924V7.75C7.61841 7.59289 7.67697 7.44141 7.78266 7.32515L12.6184 2.00583V1.38158H1.38157Z"
                fill="#E55353"
              />
            </svg>
          </div>
          <div>
            <button className="rounded-lg bg-primary text-white font-semibold h-full md:w-52">
              Download Data Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableHeader;
