import { Link } from "react-router-dom";
import cardData from "../utils/data.json";

const Card = () => {
  return (
    <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 px-1">
      {cardData.data.map((i, n) => (
        <div
          key={n}
          className="max-w-sm bg-white border border-gray rounded-lg shadow-md my-3"
        >
          <Link to="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <Link to={"/"}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                Noteworthy technology acquisitions 2021
              </h5>
            </Link>
            <p className="mb-3 font-normal text-black">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
