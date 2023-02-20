import { Head } from "@inertiajs/react";

import Sidebar from "@/Components/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Table, Tabs } from "flowbite-react";

export default function Index(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Accounts" />
            <div className="flex">
                <Sidebar />
                <div className="grow border-l bg-white">
                    <Tabs.Group aria-label="Account tabs" style="underline">
                        <Tabs.Item active={true} title="Teachers">
                            <Table hoverable={true}>
                                <Table.Head>
                                    <Table.HeadCell>Full name</Table.HeadCell>
                                    <Table.HeadCell>
                                        Email address
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        <span className="sr-only">Edit</span>
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        <span className="sr-only">Delete</span>
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y"></Table.Body>
                            </Table>
                        </Tabs.Item>
                        <Tabs.Item title="Students">
                            <Table hoverable={true}>
                                <Table.Head>
                                    <Table.HeadCell>Full name</Table.HeadCell>
                                    <Table.HeadCell>
                                        Email address
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        <span className="sr-only">Edit</span>
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        <span className="sr-only">Delete</span>
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y"></Table.Body>
                            </Table>
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
