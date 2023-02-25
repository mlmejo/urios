import DashboardLayout from "@/Layouts/DashboardLayout";

export default function SectionsLayout({ auth, errors, children }) {
  return (
    <DashboardLayout auth={auth} errors={errors}>
      <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="border-b border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-indigo-900">Sections</h3>
            <div className="relative h-screen overflow-x-auto sm:rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
