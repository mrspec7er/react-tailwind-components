import product from "../utils/data.json";
import { SlOptions } from "react-icons/sl";
import OptionsModal from "./OptionsModal";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import FormModal from "./FormModal";

const ScrollDownTable = () => {
  const [currentID, setCurrentID] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [changes, setChanges] = useState(0);

  const handleDeleteData = async () => {
    setShowConfirmModal(false);
    console.log("data with id: " + currentID + " have been deleted");
  };
  return (
    <div className="overflow-x-auto max-h-[30vh] relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-black">
        <thead className="text-xs text-black uppercase bg-gray sticky top-0">
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
          {product.data.map((i, n) => (
            <tr
              key={n}
              className={`${
                n % 2 === 0 ? "bg-white" : "bg-gray"
              } border-b hover:bg-secondary`}
            >
              <th scope="row" className="py-4 px-6 font-medium text-black">
                {n + 1}
              </th>
              <th scope="row" className="py-4 px-6 font-medium text-black">
                {i.name}
              </th>
              <td className="py-4 px-6">{i.color}</td>
              <td className="py-4 px-6">{i.category}</td>
              <td className="py-4 px-6">${i.price}</td>
              <td className="py-4 px-6 text-right">
                {currentID === n + 1 && (
                  <OptionsModal
                    setShowEditModal={setShowEditModal}
                    setCurrentID={setCurrentID}
                    setShowConfirmModal={setShowConfirmModal}
                  />
                )}
                <SlOptions
                  onClick={() => setCurrentID(n + 1)}
                  className="text-xl font-semibold"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showConfirmModal && (
        <ConfirmModal
          handleSubmit={handleDeleteData}
          setShowConfirmModal={setShowConfirmModal}
        />
      )}
      {showEditModal && (
        <FormModal
          setChanges={setChanges}
          setShowModal={setShowEditModal}
          id={currentID}
        />
      )}
    </div>
  );
};

export default ScrollDownTable;
