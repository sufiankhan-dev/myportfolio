import { SiBuymeacoffee } from "react-icons/si";
import React from "react";

const BuyMeCoffee = () => {
  return (
    <div className="fixed bottom-0 left-0 z-20 flex items-center p-4">
      <div className="relative group">
        <div className="text-3xl text-yellow-400 p-2 bg-gray-100 rounded-full cursor-pointer transition-transform transform group-hover:translate-x-2">
          <img src="/buymecoffee.svg" alt="coffee logo" className="w-9 h-9" />
        </div>
        <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-sm font-medium p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-36">
          Buy me a Coffee
        </div>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
