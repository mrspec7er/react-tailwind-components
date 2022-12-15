import { SlOptions } from "react-icons/sl";
import OptionsModal from "./OptionsModal";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import FormModal from "./FormModal";
import useFetch from "../utils/useFetch";
import Pagination from "./Paginations";
import Loading from "./Loading";
import TableHeader from "./TableHeader";

const Table = () => {
  const [currentItemID, setCurrentItemID] = useState(0);
  const [optionModal, setOptionModal] = useState(0);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [changes, setChanges] = useState(0);

  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [selectOptions, setSelectOptions] = useState("");

  const { isLoading, data } = useFetch(
    `/v1/passenger?page=${
      pageNumber - 1
    }&size=${limit}&keyword=${keyword}&option=${selectOptions}`,
    changes
  );

  const handleDeleteData = async () => {
    setCurrentItemID(0);
    console.log("data with id: " + currentItemID + " have been deleted");
  };
  return (
    <>
      <TableHeader
        keyword={keyword}
        limit={limit}
        setKeyword={setKeyword}
        setLimit={setLimit}
        setPage={setPageNumber}
        setSelectOptions={setSelectOptions}
      />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        {isLoading ? (
          <Loading />
        ) : (
          <table className="w-full text-sm text-left text-black">
            <thead className="text-xs text-black uppercase bg-gray">
              <tr>
                <th scope="col" className="py-3 px-6">
                  No
                </th>
                <th scope="col" className="py-3 px-6">
                  Product name
                </th>
                <th scope="col" className="py-3 px-6">
                  Color
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((i, n) => (
                <tr
                  key={n}
                  className={`${
                    n % 2 === 0 ? "bg-white" : "bg-gray"
                  } border-b hover:bg-secondary`}
                >
                  <th scope="row" className="py-4 px-6 font-medium text-black">
                    {n + 1 + (pageNumber - 1) * limit}
                  </th>
                  <th scope="row" className="py-4 px-6 font-medium text-black">
                    {i.name}
                  </th>
                  <td className="py-4 px-6">{i.airline[0].country}</td>
                  <td className="py-4 px-6">{i.airline[0].slogan}</td>
                  <td className="py-4 px-6">${i.trips}</td>
                  <td className="py-4 px-6 text-right">
                    {optionModal === n + 1 && (
                      <OptionsModal
                        setShowEditModal={setShowFormModal}
                        setOptionModal={setOptionModal}
                        setShowConfirmModal={setShowDeleteConfirmModal}
                      />
                    )}
                    <SlOptions
                      onClickCapture={() => {
                        setCurrentItemID(n + 1);
                        setOptionModal(n + 1);
                      }}
                      className="text-2xl font-semibold hover:text-orange hover:scale-150"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {showDeleteConfirmModal && (
          <ConfirmModal
            handleSubmit={handleDeleteData}
            setShowConfirmModal={setShowDeleteConfirmModal}
          />
        )}

        {showFormModal && (
          <FormModal
            setChanges={setChanges}
            setShowModal={setShowFormModal}
            id={currentItemID}
          />
        )}
      </div>
      <Pagination
        dataCount={data.dataCount}
        limit={limit}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default Table;
