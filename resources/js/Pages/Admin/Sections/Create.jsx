import { Head, useForm } from "@inertiajs/react";

import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import DashboardLayout from "@/Layouts/DashboardLayout";

import { useState } from "react";

export default function Create({ auth, errors, educational_stages }) {
  const { data, setData, post, processing, reset } = useForm({
    name: "",
  });
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    post(route("admin.sections.store"), { onSuccess: () => reset() });
  };

  return (
    <DashboardLayout auth={auth} errors={errors}>
      <Head title="Create Section" />
      <div className="py-12">
        <div className="mx-auto min-h-screen max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className=" border-b border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-indigo-900">
                Sections Creation
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <form onSubmit={submit}>
                  <div className="input-group mb-3">
                    <InputLabel value="Section Name" className="pb-3" />
                    <TextInput
                      onChange={(e) => setData("name", e.target.value)}
                      autoComplete="off"
                      placeHolder="Balagtas"
                    />
                  </div>

                  <div className="input-group mb-3 ">
                    <InputLabel value="Year Level" className="pb-3 " />
                    <input
                      type="text"
                      name="year_level"
                      id="year_level"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
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
                        .map((stage) => (
                          <option
                            className="dropdown-row"
                            onClick={() => setValue(stage.name)}
                            value={stage.name}
                            key={stage.name}
                          >
                            {stage.name}
                          </option>
                        ))}
                    </div>
                  </div>
                  <div className="input-group col-span-2">
                    <PrimaryButton processing={processing}>
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
