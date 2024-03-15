import React, { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../constants/environments";
import { Link } from "../icons/Link";

interface IFormProps {
  refreshData: () => void;
}

const Form: React.FunctionComponent<IFormProps> = ({ refreshData }) => {
  const [fullUrl, setFullUrl] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: MISSING VALIDATION TO VALID URL
    event.preventDefault();
    try {
      await axios.post(`${SERVER_URL}/shortUrl`, { fullUrl });
      setFullUrl("");
      refreshData();
    } catch (error) {
      console.error("Error on handle submit method!");
    }
  };

  return (
    <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Email sign-up
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Link />
        </div>
        <input
          id="default-url"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your link here..."
          required
          value={fullUrl}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFullUrl(event.target.value)
          }
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
