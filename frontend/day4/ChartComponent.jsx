import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';
import '../../assets/css/chart.css'

// Register Chart.js dependencies
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const ChartComponent = ({ data, title }) => {
  // Check if data is available
  if (!data || data.length === 0) {
    return <div>No data available for {title}</div>;
  }

  // Prepare chart data here
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: title,
        data: data.map(item => item.value),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <h2>{title}</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ChartComponent;
