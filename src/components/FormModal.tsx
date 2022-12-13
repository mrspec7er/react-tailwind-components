import { useState, useEffect } from "react";
import ConfirmModal from "./ConfirmModal";

interface FormModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  id?: number;
  setChanges: React.Dispatch<React.SetStateAction<number>>;
}

const FormModal = ({ setShowModal, id, setChanges }: FormModalProps) => {
  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleSubmit = async () => {
    setShowConfirmModal(false);
    setShowModal(false);

    //Submit Form Logic
    console.log("Form Submited");

    setChanges((current) => current + 1);
  };

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`
      } bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30 w-full md:inset-0 h-screen`}
    >
      <div className="relative pt-5 w-screen flex justify-center">
        <div className="relative bg-white md:w-[70vw] w-[95vw] rounded-lg shadow">
          <div className="flex justify-between items-start p-5 py-7 rounded-t border-b">
            <h3 className="text-2xl font-semibold text-gray-900">Form Data</h3>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="md:p-12 p-3">
            <form
              id="formID"
              onSubmit={(e) => {
                e.preventDefault();
                setShowConfirmModal(true);
              }}
              className="py-7 font-medium"
            >
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Text Input
                </label>
                <input
                  required
                  onChange={(e) => console.log(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Input text..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  TextArea Inut
                </label>
                <textarea
                  required
                  onChange={(e) => console.log(e.target.value)}
                  placeholder="Input Data..."
                  className="w-full hover:bg-secondary rounded-md border px-7 h-20 border-grey"
                ></textarea>
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Select Input
                </label>
                <select
                  onChange={(e) => console.log(e.target.value)}
                  id="countries"
                  className="bg-gray-50 h-12 border border-grey text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="US">Jenis 1</option>
                  <option value="CA">Jenis 2</option>
                  <option value="FR">Jenis 3</option>
                </select>
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Date Input
                </label>
                <input
                  required
                  onChange={(e) => console.log(e.target.value)}
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="date"
                  placeholder="Masukan tanggal mulai pemasangan reklame..."
                />
              </div>
            </form>
          </div>

          <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              type="button"
              className="bg-white border border-primary mb-5 font-semibold flex justify-center items-center gap-3 text-primary rounded-md w-32 h-10"
            >
              <span>Batal</span>
            </button>
            <button
              type="submit"
              form="formID"
              className="bg-primary mb-5 font-semibold flex justify-center items-center gap-3 text-white rounded-md w-32 h-10 bg-orange-500"
            >
              <span>Simpan</span>
            </button>
          </div>
        </div>
      </div>

      {showConfirmModal && (
        <ConfirmModal
          handleSubmit={handleSubmit}
          setShowConfirmModal={setShowConfirmModal}
        />
      )}
    </div>
  );
};

export default FormModal;
