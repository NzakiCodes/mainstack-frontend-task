import { Wallet } from "@/interfaces";
import { Stack } from "@chakra-ui/react";

import Balance from "./balance";

interface BalancesProps extends Omit<Wallet, "balance"> {
  isLoading?: boolean;
}

const Balances = (props: BalancesProps) => {
  return (
    <Stack rowGap={"34px"} w={271}>
      <Balance
        hasInfo
        info="the checking account balance at the beginning of the day"
        title="Ledger Balance"
        value={props.ledger_balance}
      />
      <Balance hasInfo title="Total Payout" value={props.total_payout} />
      <Balance hasInfo title="Total Revenue" value={props.total_revenue} />
      <Balance hasInfo title="Pending Payout" value={props.pending_payout} />
    </Stack>
  );
};

export default Balances;
