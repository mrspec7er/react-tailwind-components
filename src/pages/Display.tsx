import React, { useState } from "react";
import AlertSuccess from "../components/AlertSuccess";
import FormModal from "../components/FormModal";
import WarningAlert from "../components/WarningAlert";
import OptionsModal from "../components/OptionsModal";
import ConfirmModal from "../components/ConfirmModal";
import Table from "../components/Table";
import ScrollDownTable from "../components/ScrollDownTable";
import useFetch from "../utils/useFetch";
import Loading from "../components/Loading";
import Pagination from "../components/Paginations";
import Layouts from "../components/Layouts";
import Card from "../components/Card";
import CardHorizontal from "../components/CardHorizontal";
function Display() {
  const [changes, setChanges] = useState(0);
  const [showFormModal, setShowFormModal] = useState(false);
  const [successAlert, setSuccessAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [optionModal, setOptionModal] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [limit, setLimit] = useState(20);
  const [pageNumber, setPageNumber] = useState(1);

  const handleDelete = async () => {
    setSuccessAlert("Data have been deleted");
  };

  const { data, isLoading } = useFetch(
    `/v1/passenger?page=${pageNumber - 1}&size=${limit}`,
    changes
  );

  return (
    <Layouts>
      {showFormModal && (
        <FormModal setChanges={setChanges} setShowModal={setShowFormModal} />
      )}

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
          dataCount={data.dataCount}
          limit={limit}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>

      <div className="pb-32 container mx-auto">
        <Card />
      </div>
      <div className="pb-32 container mx-auto">
        <CardHorizontal />
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

export default Display;
