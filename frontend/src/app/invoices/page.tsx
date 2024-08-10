"use client";

import { DataTable } from "@/components/DataTable";
import { DataTableColumnHeader } from "@/components/DataTable/header";
import Header from "@/components/Header";
import { mockDataInvoices } from "@/data/mockData";
import { InvoiceDetails } from "@/types/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<InvoiceDetails>[] = [
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
    accessorKey: "cost",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Cost" />;
    },
    cell: ({ row: { original } }) => {
      return `£${original.cost}`;
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Date" />;
    },
    cell: ({ row: { original } }) => {
      const date = new Date(original.date);
      const month = date.toLocaleString("default", { month: "short" });
      return `${date.getDate()} ${month}, ${date.getFullYear()}`;
    },
  },
];

const Invoices = () => {
  return (
    <section className="flex flex-col">
      <Header title="INVOICES" subTitle="List of invoice balances" />
      <DataTable
        columns={columns}
        data={mockDataInvoices}
        filterInput={{ column: "name", placeholder: "Filter by name..." }}
      />
    </section>
  );
};

export default Invoices;
