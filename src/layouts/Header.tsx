import React from "react";
import { DogPrinterFoot } from "../icons/DogPrinterFoot";

interface IHeaderProps {}

export const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-start mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <DogPrinterFoot />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            URL Shortner
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
