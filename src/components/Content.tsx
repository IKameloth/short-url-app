import React, { useEffect, useState } from "react";
import Form from "./Form";
import { Title } from "./Title";
import DataTable from "./DataTable";
import { UrlData } from "../interfaces/UrlData";
import axios from "axios";
import { SERVER_URL } from "../constants/environments";
import Toast from "./Toast";

interface IContentProps {}

interface IToastProps {
  id: string;
  message: string;
}

const Content: React.FunctionComponent<IContentProps> = () => {
  const [data, setData] = useState<UrlData[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const [toasts, setToasts] = useState<IToastProps[]>([]);

  const fetchTableData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/shortUrl`);
      setData(response.data);
    } catch (error) {
      console.error("Error when fetch the data");
    }
  };

  const handleReloadData = () => {
    setReload(!reload);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  useEffect(() => {
    fetchTableData();
  }, [reload]);

  const showToast = (message: string) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prevToast) => [...prevToast, { id, message }]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="py-20 px-4 mx-auto max-w-screen-xl text-center z-10 relative">
      <Title />
      <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">
        Paste the URL to be shortened
      </p>
      <Form refreshData={handleReloadData} />
      <DataTable
        data={data}
        refreshData={handleReloadData}
        showToast={showToast}
      />
      {toasts?.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default Content;
