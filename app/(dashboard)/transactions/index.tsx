import { Box, Flex, Stack, Text, useDisclosure } from "@chakra-ui/react";

import TransactionButton from "./button";
import { ChevronDownIcon, DownloadIcon } from "@/components/ui/icons";
import Transaction from "./transaction";
import type { TransactionsType } from "@/interfaces";
import { FilterModal } from "./filter-modal";

const Transactions = ({ data }: { data: TransactionsType[] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FilterModal isOpen={isOpen} onClose={onClose} />
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
              {data.length} Transactions
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
            <TransactionButton
              onClick={onOpen}
              text="Filter"
              Icon={ChevronDownIcon}
            />
            <TransactionButton
              text="Export list"
              iconProps={{ h: 6, w: 6, fill: "brand", py: "5.7px", mb: "4px" }}
              Icon={DownloadIcon}
            />
          </Flex>
        </Flex>
        <Stack my={"21.5px"}>
          {data.map((transaction, idx) => {
            switch (transaction.type) {
              case "deposit":
                return (
                  <Transaction
                    key={idx}
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
                    key={idx}
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
    </>
  );
};

export default Transactions;
