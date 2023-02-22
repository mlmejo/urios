import DashboardLayout from "@/Layouts/DashboardLayout";
import NavLink from "@/Components/NavLink";

export default function CreateAccountLayout({ auth, errors, children }) {
  return (
    <DashboardLayout auth={auth} errors={errors}>
      <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="border-b border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-indigo-900">
              Accounts Creation
            </h3>
            <div className="account-links w-full space-x-5 p-3">
              <NavLink
                children={"Teachers"}
                href={route("admin.teachers.create")}
              />
              <NavLink
                children={"Students"}
                href={route("admin.students.create")}
              />
            </div>
            <div className="border-b border-gray-200 bg-white p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
