import React, { useState } from "react";
import AlertSuccess from "../components/AlertSuccess";
import FormModal from "../components/FormModal";
import WarningAlert from "../components/WarningAlert";
import OptionsModal from "../components/OptionsModal";
import ConfirmModal from "../components/ConfirmModal";
import Layouts from "../components/Layouts";

function ModalAlert() {
  const [changes, setChanges] = useState(0);
  const [showFormModal, setShowFormModal] = useState(false);
  const [successAlert, setSuccessAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [currentID, setCurrentID] = useState(0);
  const [optionModal, setOptionModal] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = async () => {
    setSuccessAlert("Data have been deleted");
  };

  return (
    <Layouts>
      {showFormModal && (
        <FormModal setChanges={setChanges} setShowModal={setShowFormModal} />
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
          onClick={() => {
            setCurrentID(1);
            setOptionModal(1);
          }}
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

export default ModalAlert;
