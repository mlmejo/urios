import { Head } from "@inertiajs/react";
import { useState } from "react";

import DangerButton from "@/Components/DangerButton";

import Alert from "@/Components/Alert";
import MyModal from "@/Components/MyModal";

import AccountsLayout from "@/Layouts/AccountsLayout";

export default function Index({ auth, teachers }) {
  const [teacher, setTeacher] = useState();
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleClick = (teacher) => {
    setShow(true);
    setTeacher(teacher);
  };

  return (
    <AccountsLayout auth={auth}>
      <Head title="Teachers" />
      <h3 className="table-title py-5 text-2xl">Teacher Accounts</h3>
      {alert && (
        <Alert
          alert={setAlert}
          children={`${teacher && teacher.user.name} deleted successfully!`}
        />
      )}

      {teacher && show && (
        <MyModal
          show={setShow}
          user={teacher.user.name}
          alert={setAlert}
          children={"Are you sure you want to delete "}
          href={route("admin.teachers.destroy", teacher.id)}
        />
      )}

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

                <td className="flex-col space-y-1 px-6 py-4 text-center  lg:flex lg:flex-row lg:space-x-4">
                  <button className="rounded-lg bg-blue-500 px-2 py-1 font-medium text-white">
                    Edit
                  </button>

                  <DangerButton
                    className="rounded-lg bg-red-500 px-2 py-1 font-medium text-white"
                    onClick={() => handleClick(teacher)}
                  >
                    Delete
                  </DangerButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <Modal show={show}>
        <div className="relative h-full w-full max-w-md md:h-auto">
          <div className="relative rounded-lg bg-white shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
            >
              <span className="sr-only">Close modal</span>
              <span>X</span>
            </button>
            <div className="p-6 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                Are you sure you want to delete{" "}
                {teacher ? teacher.user.name : ""}
              </h3>
              {teacher && (
                <Link
                  className="rounded-lg bg-red-500 px-2 py-1 font-medium text-white"
                  as="button"
                  method="delete"
                  href={route("admin.teachers.destroy", teacher.id)}
                >
                  Delete
                </Link>
              )}
            </div>
          </div>
        </div>
      </Modal> */}
    </AccountsLayout>
  );
}
