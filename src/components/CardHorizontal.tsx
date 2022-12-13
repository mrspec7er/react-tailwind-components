import { Link } from "react-router-dom";
import cardData from "../utils/data.json";

const CardHorizontal = () => {
  return (
    <div className="grid gap-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 px-1">
      {cardData.data.map((i, n) => (
        <Link
          key={n}
          to={"/"}
          className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://flowbite.com/docs/images/blog/image-4.jpg"
            alt="card-horixontal"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-black">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardHorizontal;
