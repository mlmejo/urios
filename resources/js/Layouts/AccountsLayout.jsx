import DashboardLayout from "@/Layouts/DashboardLayout";
import NavLink from "@/Components/NavLink";

import { HiChevronRight } from "react-icons/hi";

export default function AccountsLayout({ auth, errors, children }) {
  return (
    <DashboardLayout auth={auth} errors={errors}>
      <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="border-b border-gray-200 bg-white p-6">
            <div className="responsive-item  flex items-center space-x-5">
              <h3 className=" sm:text-lg sm:font-semibold  sm:text-indigo-900">
                Accounts
              </h3>
              <div className="mobile-view block pt-1 text-2xl font-bold  lg:hidden ">
                <NavLink
                  children={"Teachers"}
                  href={route("admin.sections.index")}
                >
                  <HiChevronRight />
                </NavLink>
              </div>
            </div>

            <div className="account-links w-full space-x-5 p-3">
              <NavLink
                children={"Teachers"}
                href={route("admin.teachers.index")}
              />
              <NavLink
                children={"Students"}
                href={route("admin.students.index")}
              />
            </div>
            <div className="relative h-screen overflow-x-auto sm:rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
