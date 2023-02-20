import { Head } from "@inertiajs/react";

import Sidebar from "@/Components/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Table, Tabs } from "flowbite-react";

export default function Create(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Create Account" />
            <div className="flex">
                <Sidebar />
                <div className="grow border-l bg-white">
                    <Tabs.Group aria-label="Account tabs" style="underline">
                        <Tabs.Item active={true} title="Teachers"></Tabs.Item>
                        <Tabs.Item title="Students"></Tabs.Item>
                    </Tabs.Group>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
