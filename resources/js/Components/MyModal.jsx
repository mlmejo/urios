import { Link } from "@inertiajs/react";

export default function MyModal({ show, children, alert, href, user }) {
  const closeModal = () => {
    show(false);
  };

  const submit = () => {
    show(false);
    alert(true);
  };

  return (
    <div className="modals border-4">
      <div
        id="popup-modal"
        tabIndex={1}
        className="h-modal fixed top-0 left-0 right-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden  p-10 md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-md md:h-auto">
          <div className="relative rounded-lg bg-white shadow">
            <button
              onClick={closeModal}
              type="button"
              className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
            >
              <span className="sr-only">Close modal</span>
              <span>X</span>
            </button>
            <div className="p-6 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                {children}
                <br />
                <b>{user}</b>
              </h3>
              <Link
                href={href}
                className="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 "
                method="delete"
                as="button"
                onClick={submit}
              >
                Delete
              </Link>

              <button
                type="button"
                className="rounded-lg border-2 border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                onClick={closeModal}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
    </div>
  );
}
