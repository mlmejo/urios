import { Head } from "@inertiajs/react";
import SectionsLayout from "@/Layouts/SectionsLayout";

import { useState } from "react";
// components

import Alert from "@/Components/Alert";
import MyModal from "@/Components/MyModal";

export default function Index({ auth, errors, sections }) {
  const [section, setSection] = useState("");
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleClick = (section) => {
    setShow(true);
    setSection(section);
  };

  return (
    <SectionsLayout auth={auth} errors={errors}>
      <Head title="Sections" />
      <h3 className="table-title py-5 text-2xl">Sections</h3>

      {alert && (
        <Alert
          alert={setAlert}
          children={`${section && section.name} deleted successfully!`}
        />
      )}

      {section && show && (
        <MyModal
          show={setShow}
          user={section.name}
          alert={setAlert}
          children={"Are you sure you want to delete "}
          href={route("admin.sections.destroy", section.id)}
        />
      )}

      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-indigo-900  text-xs uppercase text-white ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Section ID
            </th>
            <th scope="col" className="px-6 py-3">
              Section name
            </th>
            <th scope="col" className="px-6 py-3">
              Section Grade Level
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, index) => {
            return (
              <tr
                key={index}
                className="border-b bg-white hover:bg-indigo-500 hover:text-white"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium  "
                >
                  {1900 + section.id}
                </th>
                <td className="px-6 py-4">{section.name}</td>
                <td className="px-6 py-4">{section.education_stage.name}</td>

                <td className="flex-col space-y-1 px-6 py-4 text-center  lg:flex lg:flex-row lg:space-x-4">
                  <button className="rounded-lg bg-blue-500 px-2 py-1 font-medium text-white">
                    Edit
                  </button>

                  <button
                    onClick={() => handleClick(section)}
                    className="rounded-lg bg-red-500 px-2 py-1 font-medium text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </SectionsLayout>
  );
}
