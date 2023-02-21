import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  CircleStackIcon,
  ClockIcon,
  HomeIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";

export default function DashboardLayout(props) {
  const [active, setActive] = useState();

  const Menus = [
    { title: "Dashboard", Icon: HomeIcon },
    { title: "Data", Icon: CircleStackIcon },
    { title: "Create", Icon: PencilIcon },
    { title: "Activity Log", Icon: ClockIcon },
  ];

  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <div className="flex">
        <div className="relative min-h-screen w-64 overflow-y-auto overflow-x-hidden bg-white px-5 shadow-lg duration-300">
          <div className="flex flex-col gap-y-2 py-6">
            {Menus.map(({ title, Icon }, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="font-base group flex cursor-pointer items-center gap-x-4 rounded-md p-2 hover:bg-indigo-900"
                >
                  <Icon className="h-6 w-6 text-gray-500 group-hover:text-white" />
                  <span className="group-hover:text-white">{title}</span>
                </a>
              );
            })}
            <DropdownMenu title="Data" Icon={CircleStackIcon}>
              <a
                href="#"
                className="font-base group flex cursor-pointer items-center gap-x-4 rounded-md p-2 hover:bg-indigo-900"
              >
                <HomeIcon className="h-6 w-6 text-gray-500 group-hover:text-white" />
                <span className="group-hover:text-white">Accounts</span>
              </a>
            </DropdownMenu>
          </div>
        </div>
        <div className="min-h-screen">{props.children}</div>
      </div>
    </AuthenticatedLayout>
  );
}

function DropdownMenu(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="font-base group flex cursor-pointer items-center gap-x-4 rounded-md p-2 hover:bg-indigo-900"
        onClick={(e) => setOpen(!open)}
      >
        <props.Icon className="h-6 w-6 text-gray-500 group-hover:text-white" />
        <span className="flex-1 group-hover:text-white">{props.title}</span>
        {open ? (
          <ChevronUpIcon className="h-6 w-6 group-hover:text-white" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 group-hover:text-white" />
        )}
      </div>
      {!open && props.children ? (
        <div className="flex flex-col gap-y-2 ml-3">{props.children}</div>
      ) : (
        <></>
      )}
    </>
  );
}
