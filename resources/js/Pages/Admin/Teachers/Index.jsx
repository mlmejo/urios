import { Head, Link } from "@inertiajs/react";
import AccountsLayout from "@/Layouts/AccountsLayout";

import { useState } from "react";

// components
import MyModal from "@/Components/MyModal";
import Alert from "@/Components/Alert";

export default function Index({ auth, errors, teachers }) {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);

  let content;
  if (!modal && alert) {
    content = <Alert alert={setAlert} children={"Deleted Successfully!"} />;
  } else {
    content = "";
  }

  return (
    <AccountsLayout auth={auth} errors={errors}>
      <Head title="Teachers" />
      <h3 className="table-title py-5 text-2xl">Teacher Accounts</h3>
      {content}
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-indigo-900  text-xs uppercase text-white ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Teacher ID
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
          {teachers.map((teacher, index) => {
            return (
              <tr
                key={index}
                className="border-b bg-white hover:bg-indigo-500 hover:text-white"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium  "
                >
                  {1900 + teacher.id}
                </th>
                <td className="px-6 py-4">{teacher.user.name}</td>
                <td className="px-6 py-4">{teacher.user.email}</td>

                <td className="flex space-x-4 px-6 py-4">
                  <button className="rounded-lg bg-blue-500 px-2 py-1 font-medium text-white">
                    Edit
                  </button>

                  <button
                    className="rounded-lg bg-red-500 px-2 py-1 font-medium text-white"
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    Delete
                  </button>
                  {modal && (
                    <MyModal
                      href={route("admin.teachers.destroy", teacher.id)}
                      children={"Are you sure?"}
                      show={setModal}
                      alert={setAlert}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </AccountsLayout>
  );
}
