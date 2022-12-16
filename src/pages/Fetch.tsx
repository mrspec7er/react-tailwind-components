import React, { useState } from "react";
import AlertSuccess from "../components/AlertSuccess";
import FormModal from "../components/FormModal";
import WarningAlert from "../components/WarningAlert";
import OptionsModal from "../components/OptionsModal";
import ConfirmModal from "../components/ConfirmModal";
import fileFetch from "../utils/fileFetch";
import mutateFetch from "../utils/mutateFetch";
import Layouts from "../components/Layouts";

function Fetch() {
  const [changes, setChanges] = useState(0);
  const [showFormModal, setShowFormModal] = useState(false);
  const [successAlert, setSuccessAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [optionModal, setOptionModal] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [fileInputData, setFileInputData] = useState<FileList | null>();

  const handleDelete = async () => {
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

  return (
    <Layouts>
      {showFormModal && (
        <FormModal setChanges={setChanges} setShowModal={setShowFormModal} />
      )}

      <p className="font-semibold text-xl pt-32 pb-12 text-center">
        Fetch Testing
      </p>

      <div className="text-center py-5">
        <input type="file" onChange={(e) => setFileInputData(e.target.files)} />
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

      {optionModal ? (
        <OptionsModal
          setShowEditModal={setShowFormModal}
          setShowConfirmModal={setShowConfirmModal}
          setOptionModal={setOptionModal}
        />
      ) : null}

      {showConfirmModal && (
        <ConfirmModal
          handleSubmit={handleDelete}
          setShowConfirmModal={setShowConfirmModal}
        />
      )}
    </Layouts>
  );
}

export default Fetch;
