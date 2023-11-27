import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";

const data = [
    {
      name: "Apr 1 ,  2022",
      uv: 100,
      pv: 100,
      amt: 100,
    },
    {
      uv: 200,
      pv: 200,
      amt: 2400,
    },
    {
      uv: 300,
      pv: 300,
      amt: 2400,
    },
  
    {
      uv: 400,
      pv: 400,
      amt: 2100,
    },
    {
      uv: 450,
      pv: 450,
      amt: 2100,
    },
    {
      uv: 400,
      pv: 400,
      amt: 2100,
    },
    {
      uv: 300,
      pv: 300,
      amt: 2400,
    },
  
    {
      uv: 200,
      pv: 200,
      amt: 2400,
    },
    {
      uv: 300,
      pv: 300,
      amt: 2400,
    },
  
    {
      uv: 400,
      pv: 400,
      amt: 2100,
    },
    {
      uv: 300,
      pv: 300,
      amt: 2400,
    },
  
    {
      uv: 200,
      pv: 200,
      amt: 2400,
    },
    {
      name: "Apr 30 ,  2022",
      uv: 100,
      pv: 100,
      amt: 100,
    },
  ];

const TransactionsChart = () => {
    return (
      <ResponsiveContainer width={765} height={292} style={{ padding: 0 }}>
        <LineChart
          width={765}
          height={57}
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 0,
            bottom: 5,
          }}
          barSize={20}
        >
          {/* <YAxis tick={false} stroke="" /> */}
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
            dataKey="pv"
            stroke="#FF5403"
            dot={false}
            activeDot={{ r: 8 }}
            begin={1}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  export default TransactionsChart