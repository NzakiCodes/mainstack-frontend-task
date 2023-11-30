"use client";
import { Box, Flex } from "@chakra-ui/react";

import Balances from "./balance/balances-card";
import AvailableBalance from "./balance/available-balance";
import Transactions from "./transactions";
import TransactionsChart from "./transactions/chart";
import { useEffect, useState } from "react";
import { fetchTransactions, fetchUser } from "@/api";
import { TransactionsType } from "@/interfaces";

export default function Home() {
  const [transactionData, setTransactionData] = useState<
    TransactionsType[] | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);

  const getTransactions = async () => {
    try {
      setLoading(true);
      const res = (await fetchTransactions()).data;
      setTransactionData(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  const getUser = async () => {
    try {
      setLoading(true);
      const res = (await fetchUser()).data;
      setTransactionData(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

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
      <Transactions
        data={!loading && transactionData !== undefined ? transactionData : []}
      />
    </Box>
  );
}
