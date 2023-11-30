"use client";
import { Box, Flex } from "@chakra-ui/react";

import Balances from "./balance/balances-card";
import AvailableBalance from "./balance/available-balance";
import Transactions from "./transactions";
import TransactionsChart from "./transactions/chart";
import { useEffect, useState } from "react";
import { fetchTransactions, fetchUser, fetchWallet } from "@/api";
import { TransactionsType, Wallet } from "@/interfaces";

export default function Home() {
  const [transactionData, setTransactionData] = useState<
    TransactionsType[] | undefined
  >();
  const [walletData, setWalletData] = useState<Wallet | undefined>();
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
  const getWallet = async () => {
    try {
      setLoading(true);
      const res = (await fetchWallet()).data;
      setWalletData(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getTransactions();
    getWallet();
  }, []);

  return (
    <Box as="main" bgColor={"white"} w={"full"}>
      <Flex columnGap={124} justifyContent={"space-between"} my={16}>
        <Box w={765}>
          <AvailableBalance
            balance={!loading && walletData ? walletData?.balance : 0}
          />
          <TransactionsChart transactions={!loading && transactionData !== undefined ? transactionData : []} />
        </Box>
        <Balances
          ledger_balance={
            !loading && walletData ? walletData?.ledger_balance : 0
          }
          total_payout={!loading && walletData ? walletData?.total_payout : 0}
          total_revenue={!loading && walletData ? walletData?.total_revenue : 0}
          pending_payout={
            !loading && walletData ? walletData?.pending_payout : 0
          }
        />
      </Flex>
      <Transactions
        data={!loading && transactionData !== undefined ? transactionData : []}
      />
    </Box>
  );
}
