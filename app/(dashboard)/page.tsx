"use client"
import { Box, Flex } from "@chakra-ui/react";

import Balances from "./balance/balances-card";
import AvailableBalance from "./balance/available-balance";
import Transactions from "./transactions";
import TransactionsChart from "./transactions/chart";

export default function Home() {
  return (
    <Box as="main" bgColor={"white"} w={"full"}>
      <Flex columnGap={124} justifyContent={"space-between"} my={16}>
        <Box w={765}>
          <AvailableBalance balance={120_500} />
          <TransactionsChart />
        </Box>
        <Balances
          ledger_balance={0.0}
          total_payout={120_000}
          total_revenue={200}
          pending_payout={0}
        />
      </Flex>
      <Transactions />
    </Box>
  );
}
