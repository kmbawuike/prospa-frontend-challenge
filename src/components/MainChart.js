import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    scales: {
      x: {
        grid: { display: false }
      }
    }
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [7000, 8000, 11000, 14000, 12000, 9000, 8000, 6000, 20000, 5000, 25000, 0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function MainChart() {
  return <Line options={options} data={data} />;
}
