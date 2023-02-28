import { Head, useForm } from "@inertiajs/react";

import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import DashboardLayout from "@/Layouts/DashboardLayout";

import Alert from "@/Components/Alert";

import { useState } from "react";

export default function Create({ auth, educational_stages }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    education_stage_id: 1,
  });

  const [alert, setAlert] = useState(false);
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    post(route("admin.sections.store"), { onSuccess: () => reset() });
  };

  const click = (stage) => {
    setValue(stage.name);
    setHidden(true);
    setData("education_stage_id", stage.id);
  };

  const change = (e) => {
    setValue(e.target.value);
  };

  return (
    <DashboardLayout auth={auth} errors={errors}>
      <Head title="Create Section" />
      <div className="py-12">
        <div className="mx-auto min-h-screen max-w-7xl sm:px-6 lg:px-8">
          {alert ? (
            <Alert
              alert={setAlert}
              children={"Section Created Successfully!"}
            />
          ) : (
            ""
          )}
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="mobile-view font-base my-5 block space-x-5 p-4  pt-1 text-sm lg:hidden">
              <a
                href={route("admin.teachers.create")}
                className="mobile-links cursor-pointer rounded-md px-3 py-1 hover:bg-indigo-600 hover:text-white "
              >
                Accounts
              </a>
              <a
                href={route("admin.sections.create")}
                className="mobile-links cursor-pointer rounded-md px-3 py-1 hover:bg-indigo-600 hover:text-white"
              >
                Sections
              </a>
              <a className="mobile-links cursor-pointer rounded-md px-3 py-1 hover:bg-indigo-600 hover:text-white">
                Import CSV
              </a>
            </div>
            <div className=" border-b border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-indigo-900">
                Sections Creation
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <form onSubmit={submit}>
                  <div className="input-group mb-3">
                    <InputLabel value="Section Name" className="pb-3" />
                    <TextInput
                      handleChange={(e) => setData("name", e.target.value)}
                      autoComplete="off"
                      value={data.name}
                      placeHolder="Balagtas"
                    />
                  </div>

                  <div className="input-group mb-3 ">
                    <InputLabel value="Year Level" className="pb-3 " />
                    <input
                      type="text"
                      name="year_level"
                      onClick={() => setHidden(false)}
                      id="year_level"
                      value={value}
                      onChange={(e) => change(e)}
                      className="min-w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <div className="dropdown">
                      {educational_stages
                        .filter((item) => {
                          const searchGrade = value.toLowerCase();
                          const fullGrade = item.name.toLowerCase();

                          return (
                            searchGrade &&
                            fullGrade.startsWith(searchGrade) &&
                            fullGrade !== searchGrade
                          );
                        })
                        .slice(0, 10)
                        .map((stage) => {
                          return (
                            <option
                              className={`dropdown-row ${
                                hidden ? "hidden" : ""
                              }`}
                              onClick={() => click(stage)}
                              value={stage.id}
                              key={stage.id}
                            >
                              {stage.name}
                            </option>
                          );
                        })}
                    </div>
                  </div>
                  <div className="input-group col-span-2">
                    <PrimaryButton
                      onClick={() => setAlert(true)}
                      processing={processing}
                    >
                      Submit
                    </PrimaryButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
