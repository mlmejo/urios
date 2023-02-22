import { Head } from "@inertiajs/react";
import AccountsLayout from "@/Layouts/AccountsLayout";

export default function Index({ auth, errors }) {
  return (
    <AccountsLayout auth={auth} errors={errors}>
      <Head title="Students" />

      <h3 className="table-title py-5 text-2xl">Student Accounts</h3>
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-indigo-900  text-xs uppercase text-white ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Student ID
            </th>
            <th scope="col" className="px-6 py-3">
              Full name
            </th>
            <th scope="col" className="px-6 py-3">
              Email address
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white hover:bg-indigo-500 hover:text-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium  "
            >
              19001
            </th>
            <td className="px-6 py-4">Jhoniel Villacura</td>
            <td className="px-6 py-4">jhoniel.villacura@gmail.com</td>

            <td className="space-x-4 px-6 py-4 ">
              <a
                href="#"
                className="rounded-lg bg-blue-500 px-2 py-1 font-medium text-white"
              >
                Edit
              </a>
              <a
                href="#"
                className="rounded-lg bg-red-500 px-2 py-1 font-medium text-white"
              >
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </AccountsLayout>
  );
}
