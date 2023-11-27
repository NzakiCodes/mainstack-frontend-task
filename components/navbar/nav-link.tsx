import { Link } from "@chakra-ui/next-js";
import { IconProps, Text } from "@chakra-ui/react";
import type { ComponentType } from "react";

interface NavLinkProps {
  text: string;
  href: string;
  Icon?: ComponentType<IconProps>;
  isActive?: boolean;
}

const NavLink = ({ href, text, Icon, isActive }: NavLinkProps) => {
  return (
    <Link
      _hover={{ bgColor: isActive ? "black" : "gray.100" }}
      borderRadius={"100px"}
      bgColor={isActive ? "brand" : ""}
      gap={2}
      px={"18px"}
      py={"8px"}
      role="group"
      display={"flex"}
      href={href}
      alignItems={"center"}
    >
      {Icon && <Icon fill={isActive ? "white" : "gray.400"} h={5} w={5} />}
      <Text
        py={"4px"}
        color={isActive ? "white" : "gray.400"}
        lineHeight={"24px"}
        fontSize={16}
        fontWeight={"semibold"}
        letterSpacing={"-0.4px"}
      >
        {text}
      </Text>
    </Link>
  );
};

export default NavLink;
