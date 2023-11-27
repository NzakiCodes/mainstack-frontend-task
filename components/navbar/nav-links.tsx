import { Stack } from "@chakra-ui/react";

import NavLink from "./nav-link";
import {
  ChartIcon,
  GroupIcon,
  HomeIcon,
  MoneyIcon,
  WidgetsIcon,
} from "@/components/ui/icons";

const NavLinks = () => (
  <Stack direction={"row"} justify={"space-between"} columnGap={5}>
    <NavLink Icon={HomeIcon} text="Home" href="/home" />
    <NavLink Icon={ChartIcon} text="Analytics" href="/analytics" />
    <NavLink Icon={MoneyIcon} isActive text="Revenue" href="/revenue" />
    <NavLink Icon={GroupIcon} text="CRM" href="/crm" />
    <NavLink Icon={WidgetsIcon} text="Apps" href="/apps" />
  </Stack>
);

export default NavLinks;
