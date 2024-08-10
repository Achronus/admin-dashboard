import { AccessIcon } from "@/types/data";
import { LockOpen, ShieldBan, ShieldCheck } from "lucide-react";

export const accessIcons: AccessIcon[] = [
  {
    name: "admin",
    icon: <ShieldCheck size={20} />,
  },
  {
    name: "manager",
    icon: <ShieldBan size={20} />,
  },
  {
    name: "user",
    icon: <LockOpen size={20} />,
  },
];
