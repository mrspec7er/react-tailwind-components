import { Fragment } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

interface PaginationsProps {
  dataCount: number;
  limit: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  dataCount,
  limit,
  pageNumber,
  setPageNumber,
}: PaginationsProps) {
  const pageNumberList = [];
  const pageCount = Math.ceil(dataCount / limit);

  for (let i = 1; i <= pageCount; i++) {
    if (
      i < 3 ||
      (i > pageNumber - 2 && i < pageNumber + 2) ||
      i > pageCount - 2
    ) {
      pageNumberList.push(i);
    } else if (i === pageNumber - 2 || i === pageNumber + 2) {
      pageNumberList.push(0);
    }
  }

  const handleChangePage = (changesType: "NEXT" | "PREV" | number) => {
    if (changesType === "NEXT") {
      if (pageNumber < pageCount) {
        setPageNumber((current) => current + 1);
      }
    }
    if (changesType === "PREV") {
      if (pageNumber > 1) {
        setPageNumber((current) => current - 1);
      }
    }
    if (typeof changesType === "number") {
      setPageNumber(changesType);
    }
  };

  return (
    <div className="flex items-center justify-between border-t border-gray bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="/"
          className="relative inline-flex items-center rounded-md border border-gray bg-white px-4 py-2 text-sm font-medium text-gray hover:bg-primary"
        >
          Previous
        </a>
        <a
          href="/"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray bg-white px-4 py-2 text-sm font-medium text-gray hover:bg-primary"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {pageNumber * limit - limit + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {pageNumber * limit < dataCount ? pageNumber * limit : dataCount}
            </span>{" "}
            of <span className="font-medium">{dataCount}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              type="button"
              onClick={() => handleChangePage("PREV")}
              className="relative inline-flex items-center rounded-l-md border border-gray bg-white px-2 py-2 text-sm font-medium text-gray hover:bg-primary focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <MdArrowBackIos className="h-5 w-5" aria-hidden="true" />
            </button>
            {pageNumberList.map((i, n) => (
              <Fragment key={n}>
                {i !== 0 ? (
                  <button
                    onClick={() => handleChangePage(i)}
                    type="button"
                    aria-current="page"
                    className={`relative z-10 inline-flex items-center border ${
                      pageNumber !== i ? "bg-white" : "bg-orange"
                    } border-gray px-4 py-2 text-sm font-medium text-secondary focus:z-20`}
                  >
                    {i}
                  </button>
                ) : (
                  <span className="relative inline-flex items-center border border-gray bg-white px-4 py-2 text-sm font-medium text-gray-700">
                    ...
                  </span>
                )}
              </Fragment>
            ))}

            <button
              onClick={() => handleChangePage("NEXT")}
              type="button"
              className="relative inline-flex items-center rounded-r-md border border-gray bg-white px-2 py-2 text-sm font-medium text-gray hover:bg-primary focus:z-20"
            >
              <span className="sr-only">Next</span>
              <MdArrowForwardIos className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
