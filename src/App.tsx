import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Display = lazy(() => import("./pages/Display"));
const ModalAlert = lazy(() => import("./pages/ModalAlert"));
const Fetch = lazy(() => import("./pages/Fetch"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Layouts>
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
        </Layouts> */}
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Display />
              </Suspense>
            }
          />
          <Route
            path="/alerts"
            element={
              <Suspense fallback={<Loading />}>
                <ModalAlert />
              </Suspense>
            }
          />
          <Route
            path="/fetch"
            element={
              <Suspense fallback={<Loading />}>
                <Fetch />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
