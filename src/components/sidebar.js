import React from "react";
import { HomeIcon } from "@heroicons/react/outline";
const navigation = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    href: "#",
  },
];

export default function Sidebar() {
  return (
    <div style={{ width: "20rem", height: "100%", padding: "0.5rem" }}>
      <div
        style={{ width: "100%", height: "3.5rem", marginBottom: "1rem" }}
      ></div>
      <div>
        {navigation.map((nav, key) => {
          return (
            <div
              key={key}
              style={{
                width: "100%",
                height: "2.5rem",
                borderRadius: "0.3rem",
                backgroundColor: "#f7f7f7",
                padding: "0.5rem 0 0 0.6rem",
                color: "rgba(75, 85, 99)",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <div style={{ color: "rgba(75, 85, 99)" }}>
                <nav.icon
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "0.8rem",
                    color: "rgba(75, 85, 99)",
                  }}
                />
              </div>
              {nav.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
