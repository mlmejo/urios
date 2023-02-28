import DashboardLayout from "@/Layouts/DashboardLayout";
import NavLink from "@/Components/NavLink";

export default function CreateAccountLayout({ auth, errors, children }) {
  return (
    <DashboardLayout auth={auth} errors={errors}>
      <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="mobile-view font-base my-5 block space-x-5 p-4  pt-1 text-sm lg:hidden">
            <a
              href={route("admin.teachers.create")}
              className="mobile-links cursor-pointer rounded-md px-3 py-1 hover:bg-indigo-600 hover:text-white"
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
          <div className="bg-white p-6">
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
            <div className="bg-white p-6">{children}</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
