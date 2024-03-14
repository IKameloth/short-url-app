import { SERVER_URL } from "../constants/environments";
import Trash from "../icons/Trash";
import { UrlData } from "../interfaces/UrlData";
import { Link } from "react-router-dom";
import axios from "axios";
import Toast from "./Toast";
import { useState } from "react";

interface IDataTableProps {
  data: UrlData[];
}

const DataTable: React.FunctionComponent<IDataTableProps> = ({ data }) => {
  const [successToast, setSuccessToast] = useState<boolean>(false);

  const renderTableData = () => {
    if (data?.length === 0) return null;

    return data.map((item: UrlData) => {
      return (
        <tr
          key={item._id}
          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center"
        >
          <td className="px-6 py-4">
            <Link
              to={`${SERVER_URL}/shortUrl/${item.shortUrl}`}
              target="_blank"
              className="underline font-semibold"
            >
              {item.shortUrl}
            </Link>
          </td>
          <td className="px-6 py-4">
            <Link to={item.fullUrl} target="_blank" className="underline">
              {item.fullUrl}
            </Link>
          </td>
          <td className="px-6 py-4 font-semibold">{item.clicks}</td>
          <td className="px-6 py-4">
            <button
              type="button"
              onClick={() => handleRemoveUrl(item._id)}
              className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
            >
              <Trash />
              <span className="sr-only">Remove URL</span>
            </button>
          </td>
        </tr>
      );
    });
  };

  const handleRemoveUrl = async (idUrl: string) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/shortUrl/${idUrl}`);
      console.log("RESPONSE ==>", response);
      if (response.status === 204) {
        setSuccessToast(!successToast);
      }
    } catch (error) {
      console.error("Error in method to remove!");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
      <table className="w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Short URL
            </th>
            <th scope="col" className="px-6 py-3">
              Full URL
            </th>
            <th scope="col" className="px-6 py-3">
              Clicks
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      {data.length > 0 && (
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-red-600 border border-gray-300 bg-red-50 hover:bg-red-100 hover:text-red-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      )}

      {successToast && <Toast />}
    </div>
  );
};

export default DataTable;
