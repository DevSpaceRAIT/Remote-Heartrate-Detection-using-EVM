'use client'
import Camera from "./Camera";
import Gpt from "./Gpt";

import Particlebg from "./Particlebg";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col sm:flex-row ">
      <Particlebg />

      <div className="bg-transparent h-64 sm:h-auto sm:w-2/3  ">
        <Camera />
      </div>

      <div className=" bg-transparent h-64 sm:h-auto sm:w-1/3 sm:ml-2 backdrop-blur  ">
        <Gpt />
      </div>
    </div>
  );
}
