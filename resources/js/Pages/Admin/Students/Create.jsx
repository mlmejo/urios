import { Head, useForm } from "@inertiajs/react";

import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import CreateAccountLayout from "@/Layouts/CreateAccountLayout";

export default function Create(props) {
  return (
    <CreateAccountLayout auth={props.auth} errors={props.errors}>
      <Head title="Students" />
      <div className="border-b border-gray-200 bg-white p-6">
        <h1 className="text-md pb-10 font-semibold">Create Student Account</h1>
        <div className="border-b-2 pb-5">
          <form className="grid grid-cols-2 gap-5">
            <div className="input-group">
              <InputLabel value={"Full Name"} className={"pb-3"} />
              <TextInput
                autoComplete={"off"}
                placeHolder={"Jhoniel Villacura"}
              />
            </div>
            <div className="input-group">
              <InputLabel value={"Assigned Section"} className={"pb-3"} />
              <TextInput autoComplete={"off"} placeHolder={"Balagtas"} />
            </div>
            <div className="input-group">
              <InputLabel value={"Assigned Grade Level"} className={"pb-3"} />
              <TextInput
                autoComplete={"off"}
                placeHolder={"Grade 1-12 or First Year - Fourth Year College"}
              />
            </div>
            <div className="input-group col-span-2">
              <PrimaryButton children={"Submit"} />
            </div>
          </form>
        </div>
      </div>
    </CreateAccountLayout>
  );
}
