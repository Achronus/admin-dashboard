export type TeamAccessRoles = "admin" | "manager" | "user";

export type TeamMember = {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: TeamAccessRoles;
};

export type AccessIcon = {
  name: TeamAccessRoles;
  icon: JSX.Element;
};

export type DataTableFilterOption = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type DataTableFilterInput = {
  column: string;
  placeholder: string;
};

export type DataTableColumnFilter = {
  name: string;
  options: DataTableFilterOption[];
};
