"use client";

import {
  ChartItems,
  DataItems,
  HomeItem,
  PageItems,
} from "@/constants/SidebarItems";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  menuClasses,
  MenuItem,
  Sidebar as ProSidebar,
  sidebarClasses,
} from "react-pro-sidebar";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <ProSidebar
      collapsed={isCollapsed}
      className="h-screen !border-none"
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          background: "hsl(var(--primary-400))",
        },
        [`.${menuClasses.button}:hover`]: {
          color: "#868dfb",
          background: "transparent !important",
        },
        [`.${menuClasses.button}:active`]: {
          color: "#868dfb",
        },
      }}
    >
      <Menu>
        {/* Logo and Menu Icon */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: "text-gray-100",
          }}
        >
          {!isCollapsed && (
            <section className="flex justify-between items-center ml-4">
              <h3 className="text-gray-100">DashMash</h3>
              <MenuIcon
                size={24}
                onClick={() => setIsCollapsed(!isCollapsed)}
              />
            </section>
          )}
        </MenuItem>

        {/* User */}
        {!isCollapsed && (
          <section className="mb-6 flex flex-col justify-center items-center gap-4">
            <div className="rounded-full p-4 bg-[#141A28]">
              <Image
                src={`/user.png`}
                width={75}
                height={75}
                alt="profile"
                className="cursor-pointer rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-gray-100 font-bold">John Doe</h2>
              <h5 className="text-accent-green-500">Man Of Mystery</h5>
            </div>
          </section>
        )}

        {/* Nav Items */}
        <nav
          className={cn(
            isCollapsed ? "pl-[10%]" : "",
            "flex flex-col items-center justify-center"
          )}
        >
          <MenuItem
            active={selected === HomeItem.title}
            className="text-gray-100"
            onClick={() => setSelected(HomeItem.title)}
            icon={HomeItem.icon}
          >
            <Link href={HomeItem.path}>
              <p>{HomeItem.title}</p>
            </Link>
          </MenuItem>

          <section className="w-full">
            <h5 className="text-gray-300 mx-4 mt-5">Data</h5>
            {DataItems.map((item, idx) => (
              <MenuItem
                key={idx}
                active={selected === item.title}
                className="text-gray-100"
                onClick={() => setSelected(item.title)}
                icon={item.icon}
              >
                <Link href={item.path}>
                  <p>{item.title}</p>
                </Link>
              </MenuItem>
            ))}
          </section>

          <section className="w-full">
            <h5 className="text-gray-300 mx-4 mt-5">Pages</h5>
            {PageItems.map((item, idx) => (
              <MenuItem
                key={idx}
                active={selected === item.title}
                className="text-gray-100"
                onClick={() => setSelected(item.title)}
                icon={item.icon}
              >
                <Link href={item.path}>
                  <p>{item.title}</p>
                </Link>
              </MenuItem>
            ))}
          </section>

          <section className="w-full">
            <h5 className="text-gray-300 mx-4 mt-5">Charts</h5>
            {ChartItems.map((item, idx) => (
              <MenuItem
                key={idx}
                active={selected === item.title}
                className="text-gray-100"
                onClick={() => setSelected(item.title)}
                icon={item.icon}
              >
                <Link href={item.path}>
                  <p>{item.title}</p>
                </Link>
              </MenuItem>
            ))}
          </section>
        </nav>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
