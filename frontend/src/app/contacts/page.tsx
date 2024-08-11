"use client";

import { DataTable } from "@/components/DataTable";
import { DataTableColumnHeader } from "@/components/DataTable/header";
import Header from "@/components/Header";
import { ContactFilterColumns, mockDataContacts } from "@/data/mockData";
import { UserContactDetails } from "@/types/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<UserContactDetails>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="ID" />;
    },
  },
  {
    accessorKey: "registrarId",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Registrar ID" />;
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
    accessorKey: "address",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Address" />;
    },
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="City" />;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "zipCode",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Zip Code" />;
    },
  },
];

const Contacts = () => {
  return (
    <>
      <Header title="CONTACTS" subTitle="List of contacts" />
      <DataTable
        columns={columns}
        data={mockDataContacts}
        filterColumns={ContactFilterColumns}
        filterInput={{ column: "name", placeholder: "Filter by name..." }}
      />
    </>
  );
};

export default Contacts;
