"use client";
import { Avatar, Box, Button, Flex, Stack, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { BellIcon, ChatIcon, MenuIcon } from "@/components/ui/icons";
import NavLinks from "./nav-links";
import { fetchUser } from "@/api";
import { User } from "@/interfaces";

function Topbar() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();

  const getUser = async () => {
    try {
      setLoading(true);
      const res = (await fetchUser()).data;
      setUser(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
        <MenuGroup user={!loading && user !== undefined ? user : undefined} />
      </Stack>
    </Box>
  );
}

const MenuGroup = ({ user }: { user: User | undefined }) => (
  <Flex alignItems={"center"} role="group" columnGap={2}>
    <Button rounded={"full"} variant={"ghost"} h={10} w={10}>
      <BellIcon h={5} w={5} fill="gray.400" />
    </Button>
    <Button rounded={"full"} variant={"ghost"} h={10} w={10}>
      <ChatIcon h={5} w={5} fill="gray.400" />
    </Button>
    <MenuButton user={user} />
  </Flex>
);

const MenuButton = ({ user }: { user: User | undefined }) => {
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
          name={user ? `${user.first_name} ${user.last_name}` : ""}
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
