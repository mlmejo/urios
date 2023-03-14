import InputLabel from "@/Components/InputLabel";

import { useState } from "react";

export default function AssignTeacherModal({ show }) {
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(false);
  const [teachersList, setTeachersList] = useState([]);

  const closeModal = () => {
    show(false);
  };

  const change = (e) => {
    setValue(e.target.value);
  };

  const click = (teacher) => {
    setValue(teacher.name);
    teachersList.push({
      id: teacher.id,
      name: teacher.name,
      assigned: teacher.assigned,
    });
    setHidden(true);
  };

  const teachers = [
    {
      id: 1,
      name: "Jhoniel Villacura",
      assigned: false,
    },
    {
      id: 2,
      name: "Joel Trillo",
      assigned: false,
    },
    {
      id: 3,
      name: "Joshua Caalim",
      assigned: false,
    },
  ];

  return (
    <div className="modals border-4">
      <div
        id="popup-modal"
        tabIndex={1}
        className="h-modal fixed top-0 left-0 right-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-16 md:inset-0 md:h-full  "
      >
        <div className="absolute rounded-lg border-2 bg-white px-5 py-3 shadow">
          <button
            onClick={closeModal}
            type="button"
            className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          >
            <span className="sr-only">Close modal</span>
            <span>X</span>
          </button>
          <div className="content-section space-x-5">
            <div className="flex items-center space-x-10 ">
              <h5 className="text-lg font-bold">
                Section: <span className=" pl-3 text-indigo-500">Balagtas</span>
              </h5>
            </div>
          </div>
          <div className="content-section">
            <div className="search-field">
              <InputLabel value="Teachers Name" className="pt-3 pb-3" />
              <input
                type="text"
                name="year_level"
                onClick={() => setHidden(false)}
                id="year_level"
                value={value}
                placeholder="Search name"
                onChange={(e) => change(e)}
                className="min-w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="teachers-field">
              <div className="dropdown py-3">
                {teachers
                  .filter((item) => {
                    const searchTeacher = value.toLowerCase();
                    const fullTeacher = item.name.toLowerCase();

                    return (
                      searchTeacher &&
                      fullTeacher.startsWith(searchTeacher) &&
                      fullTeacher !== searchTeacher
                    );
                  })
                  .slice(0, 10)
                  .map((teacher) => {
                    return (
                      <option
                        className={`dropdown-row ${hidden ? "hidden" : ""}`}
                        onClick={() => click(teacher)}
                        value={teacher.id}
                        key={teacher.id}
                      >
                        {teacher.name}
                      </option>
                    );
                  })}
              </div>
              <div className="teachers-list">
                <h5 className=" bg-indigo-500 px-3 py-1 text-white">
                  Teachers name <span className="pl-12">Status</span>
                </h5>
                <div className="teachers pt-3">
                  {teachersList.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="teacher-data flex items-center justify-between py-1"
                      >
                        <p>{data.name}</p>
                        {data.assigned && (
                          <button className="rounded-md bg-red-500 px-2 py-1 text-white">
                            Remove
                          </button>
                        )}
                        {!data.assigned && (
                          <button className="rounded-md bg-emerald-500 px-2 py-1 text-white">
                            Assign
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  //   <div className="content-section px-16">
  //   <h3 className="font-bold text-emerald-500">Balagtas</h3>
  //   <div className="teacher-search pb-3">
  //     <InputLabel value="Teachers Name" className="pt-3 pb-3" />
  //     <div className="flex">
  //       <input
  //         type="text"
  //         name="year_level"
  //         onClick={() => setHidden(false)}
  //         id="year_level"
  //         value={value}
  //         placeholder="Search name"
  //         onChange={(e) => change(e)}
  //         className="min-w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
  //       />
  //       <button className="rounded-md bg-indigo-600 px-3 py-2 text-white">
  //         Search
  //       </button>
  //     </div>
  //     <div className="dropdown py-3">
  //       {teachers
  //         .filter((item) => {
  //           const searchTeacher = value.toLowerCase();
  //           const fullTeacher = item.name.toLowerCase();

  //           return (
  //             searchTeacher &&
  //             fullTeacher.startsWith(searchTeacher) &&
  //             fullTeacher !== searchTeacher
  //           );
  //         })
  //         .slice(0, 10)
  //         .map((teacher) => {
  //           return (
  //             <option
  //               className={`dropdown-row ${hidden ? "hidden" : ""}`}
  //               onClick={() => click(teacher)}
  //               value={teacher.id}
  //               key={teacher.id}
  //             >
  //               {teacher.name}
  //             </option>
  //           );
  //         })}
  //     </div>
  //   </div>
  //   <div className="teachers-data ">
  //     <div className="teacher-title bg-gray-300 p-1 lg:flex lg:justify-between">
  //       <h3>Teacher Name</h3>
  //       <h3>Status</h3>
  //     </div>
  //     <div className="teachers-list flex">
  //       <div className="teachers-name"></div>
  //     </div>
  //   </div>
  // </div>
}
