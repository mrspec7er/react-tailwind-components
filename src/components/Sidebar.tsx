import { Link } from "react-router-dom";
import { useState } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdAlarmOn,
  MdHome,
  MdHistory,
} from "react-icons/md";

const Sidebar = ({ showSidebar }: { showSidebar: boolean }) => {
  const [showFirstLink, setShowFirstLink] = useState(false);
  const [showSecondLink, setShowSecondLink] = useState(false);
  return showSidebar ? (
    <div
      className="w-72 h-screen sticky top-0 shadow-md bg-white"
      id="sidenavSecExample"
    >
      <div className="pt-4 pb-2 px-6">
        <a href="#!">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Coat_of_arms_of_Bali.svg/1200px-Coat_of_arms_of_Bali.svg.png"
                className="rounded-full w-10"
                alt="Avatar"
              />
            </div>
            <div className="grow ml-3">
              <p className="text-md font-semibold text-center">Provinsi Bali</p>
              <p className="text-sm font-semibold text-center">
                Badan Pusat Statistik
              </p>
            </div>
          </div>
        </a>
      </div>
      <ul className="relative px-1 py-5">
        <li className="relative">
          <Link
            className="flex justify-start gap-2 items-center text-sm py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-blue hover:bg-secondary transition duration-300 ease-in-out"
            to="/"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <MdHome className="text-2xl" />
            <span>Non-collapsible link</span>
          </Link>
        </li>
        <li className="relative" id="sidenavSecEx2">
          <Link
            to="/"
            className="flex justify-start gap-2 items-center text-sm py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-blue hover:bg-secondary transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx2"
          >
            <MdAlarmOn className="text-2xl" />
            <span>Collapsible item 1</span>
            {!showFirstLink ? (
              <MdKeyboardArrowRight
                className="text-2xl"
                onClick={() => setShowFirstLink(true)}
              />
            ) : (
              <MdKeyboardArrowDown
                className="text-2xl"
                onClick={() => setShowFirstLink(false)}
              />
            )}
          </Link>
          <ul
            className={`relative accordion-collapse ${
              !showFirstLink && "hidden"
            }`}
            id="collapseSidenavSecEx2"
            aria-labelledby="sidenavSecEx2"
            data-bs-parent="#sidenavSecExample"
          >
            <li className="relative">
              <Link
                to="/"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                Link 1
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                Link 2
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative" id="sidenavSecEx2">
          <Link
            to="/"
            className="flex justify-start gap-2 items-center text-sm py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-blue hover:bg-secondary transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx2"
          >
            <MdHistory className="text-2xl" />
            <span>Collapsible item 2</span>
            {!showSecondLink ? (
              <MdKeyboardArrowRight
                className="text-2xl"
                onClick={() => setShowSecondLink(true)}
              />
            ) : (
              <MdKeyboardArrowDown
                className="text-2xl"
                onClick={() => setShowSecondLink(false)}
              />
            )}
          </Link>
          <ul
            className={`relative accordion-collapse ${
              !showSecondLink && "hidden"
            }`}
            id="collapseSidenavSecEx2"
            aria-labelledby="sidenavSecEx2"
            data-bs-parent="#sidenavSecExample"
          >
            <li className="relative">
              <Link
                to="/"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                Link 3
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                Link 4
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/"
                className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                Link 5
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <hr className="my-2" />
      <div className="text-center bottom-0 absolute w-full">
        <hr className="m-0" />
        <p className="py-2 text-sm text-gray-700">Citation and Year</p>
      </div>
    </div>
  ) : null;
};

export default Sidebar;
