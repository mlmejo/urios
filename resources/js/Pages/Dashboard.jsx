import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({
  auth,
  errors,
  sections,
  students,
  teachers,
  educational_stage,
}) {
  return (
    <DashboardLayout auth={auth} errors={errors}>
      <Head title="Dashboard" />
      <div className="py-12">
        <div className="mx-auto min-h-screen max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="grid grid-cols-3 gap-5 border-b border-gray-200 bg-white p-6">
              <div className="accounts-card block max-w-sm rounded-md border-2 border-indigo-200 bg-indigo-300 p-6 shadow hover:bg-indigo-100">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-900 ">
                  Accounts Created
                </h5>
                <p className="font-normal text-indigo-700 ">
                  Total Accounts:{" "}
                  {sections.length + teachers.length + students.length}
                </p>
              </div>
              <div className="section-card block max-w-sm rounded-md border-2 border-green-200 bg-green-300 p-6 shadow hover:bg-green-100">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900  ">
                  Sections Created
                </h5>
                <p className="font-normal text-green-700 ">
                  Total Sections: {sections.length}
                </p>
              </div>
              <div className="grade-level-card block max-w-sm rounded-md border-2 border-blue-200 bg-blue-300 p-6 shadow hover:bg-blue-100">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 ">
                  Grade Levels Created
                </h5>
                <p className="font-normal text-blue-700">
                  Total Levels: {educational_stage.length}
                </p>
              </div>
              <div className="teacher-card block max-w-sm rounded-md border-2 border-yellow-200 bg-yellow-300 p-6 shadow hover:bg-yellow-100">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-900  ">
                  Teacher Accounts Created
                </h5>
                <p className="font-normal text-yellow-700 ">
                  Total Accounts: {teachers.length}
                </p>
              </div>
              <div className="student-card block max-w-sm rounded-md border-2 border-slate-200 bg-slate-300 p-6 shadow hover:bg-slate-100">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 ">
                  Students Accounts Created
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Total Students: {students.length}
                </p>
              </div>
              <div className="inactive-card block max-w-sm rounded-md border-2 border-red-200 bg-red-300 p-6 shadow hover:bg-red-100">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900 ">
                  Inactive Accounts
                </h5>
                <p className="font-normal text-red-700 ">Total Accounts: 0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
