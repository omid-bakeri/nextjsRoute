import React from "react";
import { FaPage4 } from "react-icons/fa";
function NotFoundPage() {
  return (
    <>
      <div
        className="flex select-none
       justify-center bg-yellow-500 items-center
       h-screen gap-4"
      >
        <h1 className="text-2xl">NotFoundPage</h1>
        <i className="text-2xl">
          <FaPage4 />
        </i>
      </div>
    </>
  );
}

export default NotFoundPage;
