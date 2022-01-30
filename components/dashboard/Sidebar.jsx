import React from "react";
import { HomeIcon } from "@heroicons/react/solid";

export default function Sidebar() {
  const nav = [
    {
      name: "Dashboard",
      icon: HomeIcon,
    },
  ];

  return (
    <div className="w-72 h-screen p-4 flex flex-col gap-y-3">
      <div className="w-full h-20"></div>

      <div className="space-regular">
        {nav.map((item, key) => (
          <div
            key={key}
            className="w-full flex items-center gap-x-3 h-10 rounded pl-2 py-2 bg-gray-50"
          >
            <item.icon className="h-full" />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
