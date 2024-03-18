import React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow flex flex-col items-center justify-center dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {currentYear} - Hecho con 💟 desde Peñaflor 🇨🇱 por{" "}
        <a
          href="https://www.linkedin.com/in/camilo-matteo-98143619b/"
          target="_blank"
          rel="noopener"
          className="hover:underline"
        >
          @cmatteo
        </a>
      </span>
    </footer>
  );
};

export default Footer;
