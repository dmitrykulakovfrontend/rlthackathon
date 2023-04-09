import React from "react";
import Chart from "react-google-charts";

type AreaChartProps = {
  options: any;
  data: (string | number)[][];
};

function AreaChart({ options, data }: AreaChartProps) {
  return (
    <Chart
      chartType="AreaChart"
      width="900px"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default AreaChart;
