"use client";
import { Avatar, Box, Button, Flex, Stack, WrapItem } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import { BellIcon, ChatIcon, MenuIcon } from "@/components/ui/icons";
import NavLinks from "./nav-links";

function Topbar() {
  const navShadow =
    "0px 2px 4px 0px rgba(45, 59, 67, 0.05), 0px 2px 6px 0px rgba(45, 59, 67, 0.06)";
    
  return (
    <Box pos={"fixed"} top={0} width={"full"} zIndex={30}>
      <Stack
        direction={"row"}
        px={6}
        py={"14px"}
        shadow={navShadow}
        borderRadius={100}
        my={4}
        bgColor={"white"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={1480}
        mx={"auto"}
      >
        <Logo />
        <NavLinks />
        <MenuGroup />
      </Stack>
    </Box>
  );
}

const MenuGroup = () => (
  <Flex alignItems={"center"} role="group" columnGap={2}>
    <Button rounded={"full"} variant={"ghost"} h={10} w={10}>
      <BellIcon h={5} w={5} fill="gray.400" />
    </Button>
    <Button rounded={"full"} variant={"ghost"} h={10} w={10}>
      <ChatIcon h={5} w={5} fill="gray.400" />
    </Button>
    <MenuButton />
  </Flex>
);

const MenuButton = () => {
  return (
    <Flex>
      <WrapItem
        borderRadius={"100px"}
        py={"4px"}
        px={"5px"}
        bg={"gray.100"}
        display={"flex"}
        alignItems={"center"}
      >
        <Avatar
          name="Kola Tioluwani"
          sx={{ p: "8px" }}
          bgGradient={"linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)"}
          color={"white"}
          size={"sm"}
          fontWeight={"semibold"}
        />
        <Button _active={{ bgColor: "transparent" }} variant={"ghost"}>
          <MenuIcon h={6} w={6} fill="gray.400" />
        </Button>
      </WrapItem>
    </Flex>
  );
};

const Logo = () => (
  <Image
    src={"/images/mainstack-logo.svg"}
    height={36}
    width={36}
    alt="mainstack-logo"
  />
);

export default Topbar;
