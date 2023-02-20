import {
    BuildingOfficeIcon,
    CircleStackIcon,
    HomeIcon,
    PencilIcon,
    RectangleGroupIcon,
    TableCellsIcon,
    UserGroupIcon,
} from "@heroicons/react/20/solid";
import { Sidebar as FBSidebar } from "flowbite-react";

export default function Sidebar(props) {
    return (
        <div className="h-screen w-fit rounded-none">
            <FBSidebar aria-label="Application sidebar">
                <FBSidebar.Items>
                    <FBSidebar.ItemGroup>
                        <FBSidebar.Item
                            href={route("dashboard")}
                            icon={HomeIcon}
                        >
                            Dashboard
                        </FBSidebar.Item>
                        <FBSidebar.Collapse label="Data" icon={CircleStackIcon}>
                            <FBSidebar.Item
                                href={route("admin.teachers.index")}
                                icon={UserGroupIcon}
                            >
                                Accounts
                            </FBSidebar.Item>
                            <FBSidebar.Item href="#" icon={BuildingOfficeIcon}>
                                Section
                            </FBSidebar.Item>
                        </FBSidebar.Collapse>
                        <FBSidebar.Collapse label="Create" icon={PencilIcon}>
                            <FBSidebar.Item href="#" icon={UserGroupIcon}>
                                Accounts
                            </FBSidebar.Item>
                            <FBSidebar.Item href="#" icon={BuildingOfficeIcon}>
                                Section
                            </FBSidebar.Item>
                            <FBSidebar.Item href="#" icon={TableCellsIcon}>
                                Import CSV
                            </FBSidebar.Item>
                        </FBSidebar.Collapse>
                        <FBSidebar.Item href="#" icon={RectangleGroupIcon}>
                            Activity Log
                        </FBSidebar.Item>
                    </FBSidebar.ItemGroup>
                </FBSidebar.Items>
            </FBSidebar>
        </div>
    );
}
