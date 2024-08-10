"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Table } from "@tanstack/react-table";
import { RotateCcw } from "lucide-react";

import { DataTableColumnFilter, DataTableFilterInput } from "@/types/data";
import { DataTableFacetedFilter } from "./filter";
import { DataTableViewOptions } from "./viewOptions";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterInput?: DataTableFilterInput;
  filterColumns?: DataTableColumnFilter[];
}

export function DataTableToolbar<TData>({
  table,
  filterInput,
  filterColumns,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {filterInput && (
          <Input
            placeholder={filterInput.placeholder}
            value={
              (table
                .getColumn(filterInput.column)
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn(filterInput.column)
                ?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        )}
        {filterColumns &&
          filterColumns.map(
            (column) =>
              table.getColumn(column.name) && (
                <DataTableFacetedFilter
                  key={column.name}
                  column={table.getColumn(column.name)}
                  title={
                    column.name[0].toUpperCase() + column.name.substring(1)
                  }
                  options={column.options}
                />
              )
          )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <RotateCcw className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
