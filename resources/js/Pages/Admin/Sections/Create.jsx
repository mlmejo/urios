import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create(props) {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("admin.sections.store"), { onSuccess: () => reset() });
  };

  return (
    <DashboardLayout auth={props.auth} errors={props.errors}>
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
