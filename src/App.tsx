import React, { useState } from "react";
import AlertSuccess from "./components/AlertSuccess";
import FormModal from "./components/FormModal";
import { BrowserRouter } from "react-router-dom";
import WarningAlert from "./components/WarningAlert";
import OptionsModal from "./components/OptionsModal";
import ConfirmModal from "./components/ConfirmModal";
import Table from "./components/Table";
import ScrollDownTable from "./components/ScrollDownTable";
import fileFetch from "./utils/fileFetch";
import mutateFetch from "./utils/mutateFetch";
import useFetch from "./utils/useFetch";
import Loading from "./components/Loading";
import Pagination from "./components/Paginations";
import Layouts from "./components/Layouts";

function App() {
  const [changes, setChanges] = useState(0);
  const [showFormModal, setShowFormModal] = useState(false);
  const [successAlert, setSuccessAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [showOptionsModal, setShowOptionsModal] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [fileInputData, setFileInputData] = useState<FileList | null>();
  const [limit, setLimit] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);

  const handleDelete = async () => {
    setShowConfirmModal(false);
    setSuccessAlert("Data have been deleted");
  };

  const handleUploadFile = async () => {
    if (fileInputData) {
      const data = new FormData();
      data.append("id", "564");
      data.append("nomor", "1");
      data.append("surat_kuasa", fileInputData[0]);
      await fileFetch("/api/permohonan/upload-suratkuasa", data).then((res) =>
        console.log(res)
      );
    }
  };

  const handlePostData = async () => {
    const body = {
      email: "krisnawidyakusuma@gmail.com",
      password: "qwerty",
    };

    await mutateFetch("/api/login", body, "POST").then((res) =>
      console.log(res)
    );
  };

  const { dataCount, isLoading } = useFetch(
    "/api/reklame?limit=10&pagenumber=1",
    changes,
    1
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Layouts>
          {showFormModal && (
            <FormModal
              setChanges={setChanges}
              setShowModal={setShowFormModal}
            />
          )}

          <p className="font-semibold text-xl pt-32 pb-12 text-center">
            Modal & Alert Testing
          </p>

          <div className="flex flex-col justify-center gap-3 top-1/4 overflow-auto">
            <button
              className="bg-red-300 rounded-md"
              onClick={() =>
                setSuccessAlert("Your changes have been successfully saved!")
              }
            >
              Alert Success
            </button>

            <button
              className="bg-red-300 rounded-md"
              onClick={() =>
                setWarningAlert("Make sure all file have been verified!")
              }
            >
              Alert Warning
            </button>
            <button
              className="bg-red-300 rounded-md"
              onClick={() => setShowFormModal(true)}
            >
              FormModal
            </button>
            <button
              className="bg-red-300 rounded-md"
              onClick={() => setShowOptionsModal(1)}
            >
              Options Modal
            </button>
            <button
              className="bg-red-300 rounded-md"
              onClick={() => setShowConfirmModal(true)}
            >
              Confirm Modal
            </button>
          </div>

          <p className="font-semibold text-xl pt-32 pb-12 text-center">
            Fetch Testing
          </p>

          <div className="text-center py-5">
            <input
              type="file"
              onChange={(e) => setFileInputData(e.target.files)}
            />
            <button
              className="bg-primary rounded-md px-3 py-2 text-white font-semibold"
              onClick={handleUploadFile}
            >
              Upload
            </button>
          </div>

          <div className="text-center py-5">
            <button
              className="bg-primary rounded-md px-3 py-2 text-white font-semibold"
              onClick={handlePostData}
            >
              Post
            </button>
          </div>

          <p className="font-semibold text-xl pt-32 pb-12 text-center">
            Display Component Testing
          </p>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="container mx-auto pb-32">
              <Table />
            </div>
          )}

          {isLoading ? (
            <Loading />
          ) : (
            <div className="container mx-auto pb-32">
              <ScrollDownTable />
            </div>
          )}

          <div className="pb-32 container mx-auto">
            <Pagination
              dataCount={dataCount}
              limit={limit}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>

          {successAlert && (
            <AlertSuccess
              setAlertMessage={setSuccessAlert}
              alertMessage={successAlert}
              link="/"
            />
          )}

          {warningAlert && (
            <WarningAlert
              alertMessage={warningAlert}
              setAlertMessage={setWarningAlert}
            />
          )}

          {showOptionsModal ? (
            <OptionsModal
              setShowEditModal={setShowFormModal}
              setShowConfirmModal={setShowConfirmModal}
              setOptionModal={setShowOptionsModal}
            />
          ) : null}

          {showConfirmModal && (
            <ConfirmModal
              handleSubmit={handleDelete}
              setShowConfirmModal={setShowConfirmModal}
            />
          )}
        </Layouts>
      </BrowserRouter>
    </div>
  );
}

export default App;
