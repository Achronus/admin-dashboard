export type TeamAccessRoles = "admin" | "manager" | "user";
export type Cities =
  | "New York"
  | "Tenting"
  | "Esvazark"
  | "Evertin"
  | "Esteras"
  | "Colunza";

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

export type UserContactDetails = {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: Cities;
  zipCode: string;
  registrarId: number;
};

export type InvoiceDetails = {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
};
