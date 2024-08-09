import { SideNavItem } from "@/types/core";

import {
  BarChart,
  Calendar,
  Contact,
  HelpCircle,
  House,
  LineChart,
  Map,
  PieChart,
  Receipt,
  User,
  Users2,
} from "lucide-react";

export const HomeItem: SideNavItem = {
  title: "Dashboard",
  path: "/",
  icon: <House size={24} />,
};

export const DataItems: SideNavItem[] = [
  {
    title: "Manage Team",
    path: "/team",
    icon: <Users2 size={24} />,
  },
  {
    title: "Contact Information",
    path: "/contacts",
    icon: <Contact size={24} />,
  },
  {
    title: "Invoice Balances",
    path: "/invoices",
    icon: <Receipt size={24} />,
  },
];

export const PageItems: SideNavItem[] = [
  {
    title: "Profile Form",
    path: "/form",
    icon: <User size={24} />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <Calendar size={24} />,
  },
  {
    title: "FAQs",
    path: "/faq",
    icon: <HelpCircle size={24} />,
  },
];

export const ChartItems: SideNavItem[] = [
  {
    title: "Bar",
    path: "/charts/bar",
    icon: <BarChart size={24} />,
  },
  {
    title: "Pie",
    path: "/charts/pie",
    icon: <PieChart size={24} />,
  },
  {
    title: "Line",
    path: "/charts/line",
    icon: <LineChart size={24} />,
  },
  {
    title: "Geography",
    path: "/charts/map",
    icon: <Map size={24} />,
  },
];
