import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import TransactionButton from "./button";
import { ChevronDownIcon, DownloadIcon } from "@/components/ui/icons";
import Transaction from "./transaction";
import type { TransactionsType } from "@/interfaces";

const transactions_data: TransactionsType[] = [
  {
    amount: 500,
    metadata: {
      name: "John Doe",
      type: "digital_product",
      email: "johndoe@example.com",
      quantity: 1,
      country: "Nigeria",
      product_name: "Rich Dad Poor Dad",
    },
    payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
    status: "successful",
    type: "deposit",
    date: "2022-03-03",
  },
  {
    amount: 400,
    metadata: {
      name: "Fibi Brown",
      type: "coffee",
      email: "fibibrown@example.com",
      quantity: 8,
      country: "Ireland",
    },
    payment_reference: "d28db158-0fc0-40cd-826a-4243923444f7",
    status: "successful",
    type: "deposit",
    date: "2022-03-02",
  },
  {
    amount: 350.56,
    metadata: {
      name: "Delvan Ludacris",
      type: "webinar",
      email: "johndoe@example.com",
      quantity: 1,
      country: "Kenya",
      product_name: "How to build an online brand",
    },
    payment_reference: "73f45bc0-8f41-4dfb-9cae-377a32b71d1e",
    status: "successful",
    type: "deposit",
    date: "2022-03-01",
  },
  {
    amount: 300,
    status: "successful",
    type: "withdrawal",
    date: "2022-03-01",
  },
  {
    amount: 2000,
    status: "failed",
    type: "withdrawal",
    date: "2022-03-01",
  },
  {
    amount: 300,
    metadata: {
      name: "Shawn kane",
      type: "webinar",
      email: "shawnkane@example.com",
      quantity: 1,
      country: "United Kingdom",
      product_name: "Support my outreach",
    },
    payment_reference: "c22055e5-8f47-4059-a1e9-51124d325992",
    status: "successful",
    type: "deposit",
    date: "2022-02-28",
  },
  {
    amount: 200,
    status: "successful",
    type: "withdrawal",
    date: "2022-03-01",
  },

  {
    amount: 500,
    status: "pending",
    type: "withdrawal",
    date: "2022-03-01",
  },
  {
    amount: 200,
    metadata: {
      name: "Ada Eze",
      type: "webinar",
      email: "adaeze1@example.com",
      quantity: 1,
      country: "Nigeria",
      product_name: "Learn how to pitch your idea",
    },
    payment_reference: "5b2988d9-395e-4a91-984b-8b02f0d12df9",
    status: "successful",
    type: "deposit",
    date: "2022-02-20",
  },
];

const Transactions = () => {
  return (
    <Box w="full">
      <Flex
        justifyContent={"space-between"}
        borderBottom={"1px"}
        borderColor={"gray.50"}
        py={6}
        w={"full"}
      >
        <Box>
          <Text
            fontWeight={"bold"}
            fontSize={"24"}
            letterSpacing={"-0.6px"}
            color={"brand"}
            lineHeight={"32px"}
            as="h3"
          >
            {transactions_data.length} Transactions
          </Text>
          <Text
            fontWeight={"medium"}
            fontSize={"14"}
            letterSpacing={"-0.2px"}
            color={"gray.400"}
            lineHeight={"16px"}
            as={"span"}
          >
            Your transactions for the last 7 days
          </Text>
        </Box>
        <Flex gap={3}>
          <TransactionButton text="Filter" Icon={ChevronDownIcon} />
          <TransactionButton
            text="Export list"
            iconProps={{ h: 6, w: 6, fill: "brand", py: "5.7px", mb: "4px" }}
            Icon={DownloadIcon}
          />
        </Flex>
      </Flex>
      <Stack my={"21.5px"}>
        {transactions_data.map((transaction) => {
          switch (transaction.type) {
            case "deposit":
              return (
                <Transaction
                  title={
                    transaction.metadata.product_name
                      ? transaction.metadata.product_name
                      : transaction.metadata.type
                  }
                  subtitle={transaction.metadata.name}
                  amount={transaction.amount}
                  date={transaction.date}
                  status={transaction.status}
                  type={transaction.type}
                />
              );
            case "withdrawal":
              return (
                <Transaction
                  title={"Cash withdrawal "}
                  subtitle={transaction.status}
                  amount={transaction.amount}
                  date={transaction.date}
                  status={transaction.status}
                  type={transaction.type}
                />
              );
          }
        })}
      </Stack>
    </Box>
  );
};

export default Transactions;
