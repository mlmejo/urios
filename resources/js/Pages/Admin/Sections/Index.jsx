import { Head } from "@inertiajs/react";
import SectionsLayout from "@/Layouts/SectionsLayout";

import { useState } from "react";

export default function Index({ auth, errors, sections }) {
  return (
    <SectionsLayout auth={auth} errors={errors}>
      <Head title="Sections" />
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
                <td className="px-6 py-4">{section.user.name}</td>
                <td className="px-6 py-4">{section.user.email}</td>

                <td className="flex space-x-4 px-6 py-4">
                  <button className="rounded-lg bg-blue-500 px-2 py-1 font-medium text-white">
                    Edit
                  </button>

                  <button className="rounded-lg bg-red-500 px-2 py-1 font-medium text-white">
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
