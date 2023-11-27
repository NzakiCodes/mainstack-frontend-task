import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import TransactionButton from "./button";
import { ChevronDownIcon, DownloadIcon } from "@/components/ui/icons";

const Transactions = () => {
  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        borderBottom={"1px"}
        borderColor={"gray.50"}
        py={6}
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
            24 Transactions
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
      
    </Box>
  );
};

export default Transactions;
