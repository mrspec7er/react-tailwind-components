import { Link } from "react-router-dom";
import "./AlertSuccess.css";

interface AlertSuccesstProps {
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
  alertMessage: string;
  link: string;
}
const AlertSuccess = ({
  setAlertMessage,
  link,
  alertMessage,
}: AlertSuccesstProps) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="flex justify-center fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 p-4 overflow-x-hidden overflow-y-auto h-screen w-screen"
    >
      <div className="relative md:w-1/4 w-5/6 h-full max-w-md top-1/4">
        <div
          id="alert-additional-content-1"
          className="p-4 mb-4 rounded-lg bg-white shadow-md"
          role="alert"
        >
          <div className="wrapper">
            {" "}
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              {" "}
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />{" "}
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <p className="text-center md:text-2xl text-lg font-semibold">
            Congratulations
          </p>
          <p className="text-center md:text-md text-sm font-semibold py-3 md:py-5">
            {alertMessage}
          </p>
          <div onClick={() => setAlertMessage("")}>
            <Link to={link}>
              <button
                type="button"
                className="text-blue bg-transparent border-2 border-blue hover:bg-blue hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
                data-dismiss-target="#alert-additional-content-1"
                aria-label="Close"
              >
                Back To Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSuccess;
