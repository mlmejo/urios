import React from "react";

export default function ModalSuccess({ showModal }) {
  return (
    <div
      id="popup-modal"
      tabIndex={1}
      className="h-modal z-45 fixed top-0 left-0 right-0 flex items-center justify-center overflow-y-auto overflow-x-hidden p-10 md:inset-0 md:h-full"
    >
      <div className="relative h-full w-full max-w-md md:h-auto">
        <div className="relative rounded-lg bg-green-400 shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          >
            <span className="sr-only">Close modal</span>
            <span>X</span>
          </button>
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 ">
              Deleted Successfully!
            </h3>

            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
