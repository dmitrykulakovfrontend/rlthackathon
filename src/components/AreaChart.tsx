import React from "react";
import Chart from "react-google-charts";

type AreaChartProps = {
  options: any;
  data: (string | number)[][];
};

function AreaChart({ options, data }: AreaChartProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <Chart
        chartType="AreaChart"
        width="90%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default AreaChart;
