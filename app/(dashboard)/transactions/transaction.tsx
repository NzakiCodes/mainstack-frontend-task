import { ArrowBottomLeft, ArrowTopRight } from "@/components/ui/icons";
import type {
  TransactionStatus,
  TransactionsType,
  TransactionType,
} from "@/interfaces";
import { toCurrency } from "@/utils";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";

interface TransactionProp {
  type: TransactionType;
  status: TransactionStatus;
  date: Date | string;
  amount: number;
  title: string;
  subtitle: string;
}

function Transaction({
  title,
  subtitle,
  type,
  status,
  amount,
  date,
}: TransactionProp) {
  const fill =
    status == "successful"
      ? "#075132"
      : status == "pending"
      ? "#A77A07"
      : "#961100";

  const bg =
    status == "successful"
      ? "#E3FCF2"
      : status == "pending"
      ? "#ede4cd"
      : "#F9E3E0";

  const subtitleTextColor =
    type == "deposit"
      ? "gray.400"
      : status == "successful"
      ? "#0EA163"
      : status == "pending"
      ? "#A77A07"
      : "#961100";

  const colors: {
    status: TransactionStatus;
    fill: string;
    subtitleTextColor: string;
    bg: string;
  }[] = [
    {
      status: "successful",
      fill: "#075132",
      bg: "#E3FCF2",
      subtitleTextColor: "gray.400",
    },
    {
        status: "pending",
        fill: "#A77A07",
        bg: "#ede4cd",
        subtitleTextColor: "#A77A07",
      },
      {
        status: "failed",
        fill: "#961100",
        bg: "#F9E3E0",
        subtitleTextColor: "#961100",
      },
  ];

  return (
    <Flex as={"div"} my={3} justifyContent={"space-between"}>
      <HStack gap={"14.5px"}>
        <Box
          w={12}
          h={12}
          bg={bg}
          rounded={"full"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={"14px"}
        >
          <Box p={"4.75px"}>
            {type == "deposit" ? (
              <ArrowBottomLeft fill={fill} h={3} w={3} />
            ) : (
              <ArrowTopRight fill={fill} h={3} w={3} />
            )}
          </Box>
        </Box>
        <Stack gap={1}>
          <Text
            fontSize={"md"}
            color={"brand"}
            fontWeight={"medium"}
            letterSpacing={"-0.4px"}
          >
            {`${title.slice(0, 1).toLocaleUpperCase()}${title.slice(1)}`}
          </Text>
          <Text
            fontSize={"sm"}
            color={subtitleTextColor}
            fontWeight={"medium"}
            letterSpacing={"-0.2px"}
            textTransform={"capitalize"}
          >
            {subtitle}
          </Text>
        </Stack>
      </HStack>
      <Stack gap={1} textAlign={"right"}>
        <Text
          fontSize={"md"}
          color={"brand"}
          fontWeight={"bold"}
          letterSpacing={"-0.4px"}
        >
          USD {toCurrency.format(amount)}
        </Text>
        <Text
          fontSize={"sm"}
          color={"gray.400"}
          fontWeight={"medium"}
          letterSpacing={"-0.2px"}
        >
          {format(new Date(date), "MMM dd,yyyy")}
        </Text>
      </Stack>
    </Flex>
  );
}

export default Transaction;
