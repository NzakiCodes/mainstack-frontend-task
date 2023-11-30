import { TransactionsType } from "@/interfaces";
import { format } from "date-fns";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const TransactionsChart = ({
  transactions,
}: {
  transactions: TransactionsType[];
}) => {
  const transformToChartData = () => {
    return transactions.map((transaction) => ({
      name: format(new Date(transaction.date), "MMM dd,yyyy"),
      value: transaction.amount,
    }));
  };
  return (
    <ResponsiveContainer width={765} height={292} style={{ padding: 0 }}>
      <LineChart
        width={765}
        height={57}
        data={transformToChartData()}
        margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 5,
        }}
        barSize={20}
      >
        <YAxis tick={false} stroke="" />
        <XAxis
          style={{ marginTop: 19 }}
          tickSize={1}
          markerStart="10"
          markerHeight={10}
          offset={50}
          textAnchor="2"
          tickCount={2}
          dataKey="name"
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#FF5403"
          dot={false}
          activeDot={{ r: 8 }}
          begin={1}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TransactionsChart;
