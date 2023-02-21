import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

import NavLink from "@/Components/NavLink";

export default function Index(props) {
  return (
    <DashboardLayout auth={props.auth} errors={props.errors}>
      <Head title="Teachers" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="border-b border-gray-200 bg-white p-6">
              {/* contentes here */}
              <h3 className="text-lg font-semibold text-indigo-900">
                Accounts
              </h3>
              <div className="account-links w-full space-x-5 p-3">
                <NavLink children={"Teachers"} active={true} />
                <NavLink children={"Students"} active={false} />
              </div>

              <div className="teacher-accounts relative overflow-x-auto shadow-md sm:rounded-lg">
                <h3 className="table-title py-5 text-2xl">Teacher Accounts</h3>
                <table className="w-full text-left text-sm text-gray-500">
                  <thead className="bg-indigo-900  text-xs uppercase text-white ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Student ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Full Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email Address
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
              </div>
              <div className="student-accounts relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
                <h3 className="table-title py-5 text-2xl">Student Accounts</h3>
                <table className="w-full text-left text-sm text-gray-500">
                  <thead className="bg-indigo-900  text-xs uppercase text-white ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Student ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Full Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email Address
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
                        00001
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
