"use client";

import { DataTable } from "@/components/DataTable";
import { DataTableColumnHeader } from "@/components/DataTable/header";
import Header from "@/components/Header";
import { accessIcons } from "@/data/icons";
import { mockDataTeam } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { TeamMember } from "@/types/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TeamMember>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="ID" />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Age" />;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email Address" />;
    },
  },

  {
    accessorKey: "phone",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Contact Number" />;
    },
  },
  {
    accessorKey: "access",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Access Level"
          className="justify-center"
        />
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    cell: ({ row: { original } }) => {
      return (
        <div
          className={cn(
            "w-[60%] my-0 mx-auto p-2 flex justify-center items-center gap-2 rounded",
            original.access === "admin"
              ? "bg-accent-green-600"
              : "bg-accent-green-700"
          )}
        >
          {accessIcons.find((item) => item.name === original.access)!.icon}
          <span className="text-gray-100 ml-1">
            {original.access[0].toUpperCase() + original.access.substring(1)}
          </span>
        </div>
      );
    },
  },
];

const Team = () => {
  return (
    <section className="flex flex-col">
      <Header title="TEAM" subTitle="Managing your team members" />
      <DataTable columns={columns} data={mockDataTeam} />
    </section>
  );
};

export default Team;
