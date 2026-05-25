import React from "react";
import { Pie } from "react-chartjs-2";

const StorageChart = () => {
  const data = {
    labels: ["Images", "Videos", "Documents"],
    datasets: [
      {
        data: [40, 30, 30],
      },
    ],
  };

  return (
    <div>
      <h2>Storage Usage</h2>
      <Pie data={data} />
    </div>
  );
};

export default StorageChart;