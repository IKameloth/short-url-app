import { SERVER_URL } from "../constants/environments";
import Trash from "../icons/Trash";
import { UrlData } from "../interfaces/UrlData";
import { Link } from "react-router-dom";
import axios from "axios";
import { ClipBoard } from "../icons/ClipBoard";

interface IDataTableProps {
  data: UrlData[];
  refreshData: () => void;
  showToast: (message: string) => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = ({
  data,
  refreshData,
  showToast,
}) => {
  const renderTableData = () => {
    if (data?.length === 0) return null;

    return data.map((item: UrlData) => {
      return (
        <tr
          key={item._id}
          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center"
        >
          <td className="px-6 py-4">
            <Link to={item.fullUrl} target="_blank" className="underline">
              {item.fullUrl}
            </Link>
          </td>
          <td className="px-6 py-4">
            <Link
              to={`${SERVER_URL}/shortUrl/${item.shortUrl}`}
              target="_blank"
              className="underline font-semibold"
            >
              {item.shortUrl}
            </Link>
          </td>
          <td className="px-6 py-4 font-semibold">{item.clicks}</td>
          <td className="px-6 py-4">
            <button
              type="button"
              onClick={() => copyToClipBoard(item.shortUrl)}
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <ClipBoard />
              <span className="sr-only">Copy URL</span>
            </button>
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

      if (response.status === 204) {
        refreshData();
        showToast("Short URL removed.");
      }
    } catch (error) {
      console.error("Error in method to remove!");
    }
  };

  const copyToClipBoard = async (shortUrl: string) => {
    try {
      await navigator.clipboard.writeText(`${SERVER_URL}/shortUrl/${shortUrl}`);
      showToast("Short URL copied.");
    } catch (error) {
      console.error("Error on copy on clipboard!");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
      <table className="w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Full URL
            </th>
            <th scope="col" className="px-6 py-3">
              Short URL
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
    </div>
  );
};

export default DataTable;
