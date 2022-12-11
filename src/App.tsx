import React, { useState } from "react";
import AlertSuccess from "./components/AlertSuccess";
import FormModal from "./components/FormModal";
import { BrowserRouter } from "react-router-dom";
import WarningAlert from "./components/WarningAlert";
import OptionsModal from "./components/OptionsModal";
import ConfirmModal from "./components/ConfirmModal";
import Table from "./components/Table";
import ScrollDownTable from "./components/ScrollDownTable";

function App() {
  const [changes, setChanges] = useState(0);
  const [showFormModal, setShowFormModal] = useState(false);
  const [successAlert, setSuccessAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [showOptionsModal, setShowOptionsModal] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = async () => {
    setShowConfirmModal(false);
    setSuccessAlert("Data have been deleted");
  };

  return (
    <div className="App">
      <BrowserRouter>
        {showFormModal && (
          <FormModal setChanges={setChanges} setShowModal={setShowFormModal} />
        )}

        <div className="flex flex-col justify-center w-screen gap-3 h-screen top-1/4 overflow-auto">
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
        <div className="container mx-auto pb-96">
          <Table />
        </div>
        <div className="container mx-auto pb-96">
          <ScrollDownTable />
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

        {showOptionsModal && (
          <OptionsModal
            setShowEditModal={setShowFormModal}
            setShowConfirmModal={setShowConfirmModal}
            setOptionModal={setShowOptionsModal}
          />
        )}

        {showConfirmModal && (
          <ConfirmModal
            handleSubmit={handleDelete}
            setShowConfirmModal={setShowConfirmModal}
          />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
