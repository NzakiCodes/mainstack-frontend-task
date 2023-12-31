import { Box, Flex, Stack, Text, useDisclosure } from "@chakra-ui/react";

import TransactionButton from "./button";
import { ChevronDownIcon, DownloadIcon } from "@/components/ui/icons";
import Transaction from "./transaction";
import type { TransactionType, TransactionsType } from "@/interfaces";
import { FilterModal } from "./filter-modal";
import { useEffect, useState } from "react";

const Transactions = ({ data }: { data: TransactionsType[] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [transactionType, setTransactionType] = useState<
    string | undefined | TransactionType[] | string[]
  >();
  const [filteredData, setFilteredData] = useState<TransactionsType[]>([
    ...data,
  ]);

  function filterData(
    data: TransactionsType[],
    startDate?: Date | string,
    endDate?: Date | string,
    transactionType?:
      | TransactionType
      | string
      | TransactionType[]
      | undefined
      | string[]
  ) {
    return data.filter((entry) => {
      const entryDate = new Date(entry.date);
      const isDateInRange =
        (!startDate || entryDate >= new Date(startDate)) &&
        (!endDate || entryDate <= new Date(endDate));
      const isTransactionTypeMatch =
        !transactionType || entry.type === transactionType;

      return isDateInRange && isTransactionTypeMatch;
    });
  }

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilter = () => {
    // const filteredResult = filterData(
    //   data,
    //   startDate,
    //   endDate,
    //   transactionType
    // );
    // const startDate = "2022-02-01";
    // const endDate = "2022-03-01";
    // const transactionType = "deposit";

    const filteredResult = filterData(
      data,
      startDate,
      endDate,
      transactionType
    );

    setFilteredData(filteredResult);
    onClose();
  };

  const handleClear = () => {
    setFilteredData(data);
    onClose();
  };

  return (
    <>
      <FilterModal
        isOpen={isOpen}
        onClose={onClose}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        transactionType={transactionType ? transactionType : ""}
        setTransactionType={setTransactionType}
        onFilter={handleFilter}
        onClear={handleClear}
      />
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
              {filteredData.length} Transactions
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
          {filteredData.map((transaction, idx) => {
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
