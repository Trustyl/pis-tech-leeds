import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

type tempDataProps = {
  shortenedDate: string;
  date: string;
  temp: number;
}[];

const TempChart = ({ tempData }: { tempData: tempDataProps }) => {
  return (
    <>
      <h2>Temperature Chart</h2>
      <ResponsiveContainer width={"100%"} height={300} min-width={300}>
        <AreaChart
          data={tempData}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="shortenedDate">
            <Label value="Date" position="bottom" />
          </XAxis>
          <YAxis dataKey="temp">
            <Label
              value="Temperature &#8457;"
              angle={-90}
              position="left"
              dy="-10"
            />
          </YAxis>
          <Tooltip content={<CustomTooltip payload={tempData} />} />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default TempChart;
