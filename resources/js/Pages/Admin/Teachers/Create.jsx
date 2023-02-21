import InputLabel from "@/Components/InputLabel";
import NavLink from "@/Components/NavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create(props) {
  const { data, setData, post, processing, reset, errors } = useForm({
    message: "",
  });

  const submitTeacher = (e) => {
    e.preventDefault();
    post(route("sections.store"), { onSuccess: () => reset() });
  };
  const submitStudent = (e) => {
    e.preventDefault();
    post(route("students.store"), { onSuccess: () => reset() });
  };
  return (
    <DashboardLayout auth={props.auth} errors={props.errors}>
      <Head title="Teachers" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="border-b border-gray-200 bg-white p-6">
              {/* contents here */}
              <h3 className="text-lg font-semibold text-indigo-900">
                Accounts Creation
              </h3>
              <div className="account-links w-full space-x-5 p-3">
                <NavLink children={"Teachers"} active={true} />
                <NavLink children={"Students"} active={false} />
              </div>
              <div className="account-forms border-b border-gray-200 bg-white p-6">
                <h1 className="text-md pb-10 font-semibold">
                  Create Teacher Account
                </h1>
                <div className="teacher-form border-b-2 pb-5">
                  <form
                    onSubmit={submitTeacher}
                    className="grid grid-cols-2 gap-5"
                  >
                    <div className="input-group">
                      <InputLabel value={"Full Name"} className={"pb-3"} />
                      <TextInput
                        onChange={(e) => setData("message", e.target.value)}
                        autoComplete={"off"}
                        placeHolder={"Jhoniel Villacura"}
                      />
                    </div>
                    <div className="input-group">
                      <InputLabel
                        value={"Assigned Section"}
                        className={"pb-3"}
                      />
                      <TextInput
                        onChange={(e) => setData("message", e.target.value)}
                        autoComplete={"off"}
                        placeHolder={"Balagtas"}
                      />
                    </div>
                    <div className="input-group">
                      <InputLabel
                        value={"Assigned Grade Level"}
                        className={"pb-3"}
                      />
                      <TextInput
                        autoComplete={"off"}
                        onChange={(e) => setData("message", e.target.value)}
                        placeHolder={
                          "Grade 1-12 or First Year - Fourth Year College"
                        }
                      />
                    </div>
                    <div className="input-group col-span-2">
                      <PrimaryButton
                        processing={processing}
                        children={"Submit"}
                      />
                    </div>
                  </form>
                </div>
                <h1 className="text-md pb-10 pt-10 font-semibold">
                  Create Student Account
                </h1>
                <div className="student-form">
                  <form
                    onSubmit={submitStudent}
                    className="grid grid-cols-2 gap-5"
                  >
                    <div className="input-group">
                      <InputLabel value={"Full Name"} className={"pb-3"} />
                      <TextInput
                        onChange={(e) => setData("message", e.target.value)}
                        autoComplete={"off"}
                        placeHolder={"Jhoniel Villacura"}
                      />
                    </div>
                    <div className="input-group">
                      <InputLabel
                        value={"Assigned Section"}
                        className={"pb-3"}
                      />
                      <TextInput
                        onChange={(e) => setData("message", e.target.value)}
                        autoComplete={"off"}
                        placeHolder={"Balagtas"}
                      />
                    </div>
                    <div className="input-group">
                      <InputLabel
                        value={"Assigned Grade Level  "}
                        className={"pb-3"}
                      />
                      <TextInput
                        autoComplete={"off"}
                        onChange={(e) => setData("message", e.target.value)}
                        placeHolder={
                          "Grade 1-12 or First Year - Fourth Year College"
                        }
                      />
                    </div>
                    <div className="input-group col-span-2">
                      <PrimaryButton
                        processing={processing}
                        children={"Submit"}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
