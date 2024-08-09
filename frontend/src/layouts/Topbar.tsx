"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Bell, Search, Settings, User } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between mb-6">
      <section className="flex rounded items-center justify-center bg-primary-400 px-2">
        <Input
          className="flex-1 border-none bg-transparent"
          placeholder="Search"
        />
        <Search size={24} className="p-1 cursor-pointer" />
      </section>

      <section className="flex p-2 gap-6">
        <ThemeToggle size={24} />
        <Bell size={24} />
        <Settings size={24} />
        <User size={24} />
      </section>
    </div>
  );
};

export default Topbar;
