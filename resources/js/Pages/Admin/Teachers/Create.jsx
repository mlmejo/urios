import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Create(props) {
  return (
    <DashboardLayout auth={props.auth} errors={props.errors}>
      <Head title="Teachers" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="border-b border-gray-200 bg-white p-6">
              Hello, Kamote!
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
