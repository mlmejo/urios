import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create(props) {
  const { data, setData, post, processing, reset, errors } = useForm({
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("sections.store"), { onSuccess: () => reset() });
  };

  return (
    <DashboardLayout auth={props.auth} errors={props.errors}>
      <Head title="Create Section" />
      <div className="py-12">
        <div className="mx-auto min-h-screen max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className=" border-b border-gray-200 bg-white p-6">
              {/* contentes here */}
              <h3 className="text-lg font-semibold text-indigo-900">
                Sections Creation
              </h3>
              <form onSubmit={submit} className="mt-5 grid grid-cols-2 gap-5">
                <div className="input-group">
                  <InputLabel value={"Section Name"} className={"pb-3"} />
                  <TextInput
                    onChange={(e) => setData("message", e.target.value)}
                    autoComplete={"off"}
                    placeHolder={"Balagtas"}
                  />
                </div>
                <div className="input-group">
                  <InputLabel value={"School Year"} className={"pb-3"} />
                  <TextInput
                    onChange={(e) => setData("message", e.target.value)}
                    autoComplete={"off"}
                    placeHolder={"2023-2024"}
                  />
                </div>
                <div className="input-group">
                  <InputLabel
                    value={"Year Level Assigned to Section"}
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
                  <PrimaryButton processing={processing} children={"Submit"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
