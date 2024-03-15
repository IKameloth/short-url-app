import React from "react";
import { Success } from "../icons/Success";
import { Close } from "../icons/Close";

const DEFAULT_MESSAGE = "Item moved successfully.";
const DEFAULT_TYPE = "success";

interface IToastProps {
  message?: string;
  type?: string;
  onClose: () => void;
}

// TODO: RENAME COMPONENT OR MAKE REUSABLE
const Toast: React.FunctionComponent<IToastProps> = ({
  message = DEFAULT_MESSAGE,
  type = DEFAULT_TYPE,
  onClose,
}) => {
  return (
    <div
      id="toast-success"
      className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 z-20"
      role="alert"
    >
      {type === "success" && (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <Success />
          <span className="sr-only">Check icon</span>
        </div>
      )}
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={onClose}
      >
        <span className="sr-only">Close</span>
        <Close />
      </button>
    </div>
  );
};

export default Toast;
