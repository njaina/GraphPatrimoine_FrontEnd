import { LineChart } from "@mui/x-charts/LineChart";
import { dataset } from "./Dataset";

export default function Chart() {
  return (
    <LineChart
      dataset={dataset}
      xAxis={[{ dataKey: "x" }]}
      series={[{ dataKey: "y" }]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}
