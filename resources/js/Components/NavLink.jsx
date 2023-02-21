import { Link } from "@inertiajs/react";

export default function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={
        active
          ? "text-md inline-flex items-center border-b-2 border-indigo-400 p-1  font-medium leading-5 text-gray-900 transition duration-150 ease-in-out focus:border-indigo-700 focus:outline-none"
          : "text-md inline-flex items-center border-b-2 border-transparent p-1   font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 focus:outline-none"
      }
    >
      {children}
    </Link>
  );
}
