import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import CreateAccountLayout from "@/Layouts/CreateAccountLayout";
import Alert from "@/Components/Alert";

export default function Create(props) {
  const [alert, setAlert] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "changeme",
    password_confirmation: "changeme",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("admin.teachers.store"), { onSuccess: () => reset() });
  };

  return (
    <CreateAccountLayout auth={props.auth} errors={errors}>
      <Head title="Students" />

      <div className="bg-white p-6">
        {alert ? (
          <Alert alert={setAlert} children={"Account Created Successfully!"} />
        ) : (
          ""
        )}
        <h1 className="text-md pb-10 font-semibold">Create Teacher Account</h1>
        <div className="pb-5">
          <form onSubmit={submit}>
            <div>
              <InputLabel forInput="name" value="Name" />

              <TextInput
                id="name"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel forInput="email" value="Email" />

              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="username"
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel forInput="password" value="Password" />

              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="new-password"
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel
                forInput="password_confirmation"
                value="Confirm Password"
              />

              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1 block w-full"
                autoComplete="new-password"
                handleChange={onHandleChange}
                required
              />

              <InputError
                message={errors.password_confirmation}
                className="mt-2"
              />
            </div>

            <div className="mt-4 flex items-center justify-end">
              <PrimaryButton
                onClick={() => {
                  setAlert(true);
                }}
                className="ml-4"
                processing={processing}
              >
                Register
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </CreateAccountLayout>
  );
}
