import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";

import {
  BuildingOfficeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleStackIcon,
  ClockIcon,
  DocumentTextIcon,
  HomeIcon,
  PencilIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

export default function DashboardLayout({ auth, errors, children }) {
  return (
    <AuthenticatedLayout auth={auth} errors={errors}>
      <div className="flex">
        <div className="relative min-h-screen w-64 overflow-y-auto overflow-x-hidden bg-white p-2 shadow-lg">
          <div className="flex flex-col gap-y-2 py-6">
            <Item title="Dashboard" Icon={HomeIcon} />
            <Collapse title="Data" Icon={CircleStackIcon}>
              <Item title="Accounts" Icon={UserGroupIcon} className="pl-6" />
              <Item
                title="Sections"
                Icon={BuildingOfficeIcon}
                className="pl-6"
              />
            </Collapse>
            <Collapse title="Create" Icon={PencilIcon}>
              <Item title="Accounts" Icon={UserGroupIcon} className="pl-6" />
              <Item
                title="Sections"
                Icon={BuildingOfficeIcon}
                className="pl-6"
              />
              <Item
                title="Import CSV"
                Icon={DocumentTextIcon}
                className="pl-6"
              />
            </Collapse>
            <Item title="Activity Log" Icon={ClockIcon} />
          </div>
        </div>
        <div className="min-h-screen w-full">{children}</div>
      </div>
    </AuthenticatedLayout>
  );
}

function Item({ title, Icon, className }) {
  return (
    <a
      className={`font-base group flex cursor-pointer items-center gap-x-4 rounded-md p-2 hover:bg-indigo-900 ${className}`}
    >
      <Icon className="h-6 w-6 text-gray-500 group-hover:text-white" />
      <span className="group-hover:text-white">{title}</span>
    </a>
  );
}

function Collapse({ title, Icon, children }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <div
        role="button"
        className="font-base group flex cursor-pointer items-center gap-x-4 rounded-md p-2  hover:bg-indigo-900"
        onClick={(e) => setCollapse(!collapse)}
      >
        <Icon className="h-6 w-6 text-gray-500 group-hover:text-white" />
        <span className="flex-1 group-hover:text-white">{title}</span>
        {collapse ? (
          <ChevronDownIcon className="h-6 w-6 group-hover:text-white" />
        ) : (
          <ChevronUpIcon className="h-6 w-6 group-hover:text-white" />
        )}
      </div>
      {!collapse && children ? (
        <div className="flex flex-col gap-y-2">{children}</div>
      ) : (
        <></>
      )}
    </>
  );
}
