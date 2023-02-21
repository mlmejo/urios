import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Index(props) {
  return (
    <DashboardLayout auth={props.auth} errors={props.errors}>
      <Head title="Teachers" />
    </DashboardLayout>
  );
}
