import React, { useEffect, useState } from "react";
import Form from "./Form";
import { Title } from "./Title";
import DataTable from "./DataTable";
import { UrlData } from "../interfaces/UrlData";
import axios from "axios";
import { SERVER_URL } from "../constants/environments";

interface IContentProps {}

const Content: React.FunctionComponent<IContentProps> = () => {
  const [data, setData] = useState<UrlData[]>([]);

  const fetchTableData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/shortUrl`);

      if (response && response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error when fetch the data");
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="py-20 px-4 mx-auto max-w-screen-xl text-center z-10 relative">
      <Title />
      <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">
        Enter below the URL to short
      </p>
      <Form />
      <DataTable data={data} />
    </div>
  );
};

export default Content;
