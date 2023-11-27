export interface User {
  first_name: string;
  last_name: string;
  email: string;
}

export interface Wallet {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export type TransactionsType = Withdrawal | Deposit;

interface Withdrawal {
  type: "withdrawal";
  amount: number;
  status: TransactionStatus;
  date: Date | string;
}
interface Deposit {
  type: "deposit";
  amount: number;
  metadata: DepositMetadata;
  payment_reference: string;
  status: TransactionStatus;
  date: Date | string;
}

interface DepositMetadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name?: string;
}

export type TransactionStatus = "successful" | "failed" | "pending";
export type TransactionType = "withdrawal"|"deposit"