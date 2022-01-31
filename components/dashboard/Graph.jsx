import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({
  graphData,
  setDateRange,
  setGraphData,
  currentApy,
}) {
  console.log(graphData);

  var data = {
    labels: graphData ? graphData.labels : "⠀",
    datasets: [
      {
        label: "APY",
        barPercentage: 1,
        data: graphData ? graphData.datasets : "",
        backgroundColor: "#99A2C6",
        display: true,
        fill: true,
      },
    ],
  };

  const options = {
    defaultFontFamily: "Space Grotesk",
    responsive: true,
    maintainAspectRatio: false,
    options: {
      interaction: {
        mode: "nearest",
      },
    },
    font: {
      fontFamily: "Space Grotesk",
    },
    elements: {},
    plugins: {
      datalabels: {
        anchor: "end",
        clamp: "true",
        align: "bottom",
        offset: "0",
        color: "#000",
        display: function (context) {
          return context.dataset.data[context.dataIndex] > 0;
        },
        font: {
          family: "Space Grotesk",
          size: "12",
        },
        formatter: function (value, context) {
          return `${Math.round(value)}%`;
        },
      },
      legend: {
        display: false,
        position: "bottom",
        labels: {
          boxWidth: 13,
          font: {
            family: "Space Grotesk",
            size: 13,
          },
        },
      },

      tooltip: {
        intersect: true,
        interaction: { mode: "x" },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 8,
        cornerRadius: 2,
        caretSize: 5,
        titleMarginBottom: 3,
        titleFont: {
          family: "Space Grotesk",
          size: 15,
        },
        bodyFont: {
          family: "Space Grotesk",
          size: 12,
        },
        footerFont: {
          family: "Space Grotesk",
          size: 12,
        },
        filter: function (data, tooltipItem) {
          if (data.raw === 0) {
            return false;
          } else {
            return true;
          }
        },
      },
    },
    scales: {
      xAxis: {
        stacked: true,
        grid: {
          display: false,
        },

        ticks: {
          maxTicksLimit: 5,
          maxRotation: 0,
          minRotation: 0,
          font: {
            family: "Space Grotesk",
            size: 14,
          },
        },
      },

      yAxis: {
        stacked: true,
        min: 0,
        grid: {
          borderDash: [8, 4],
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit: 10,
          font: {
            family: "Space Grotesk",
            size: 14,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        filter: `${!graphData ? "blur(0px)" : ""}`,
      }}
      className="h-1/2 bg-white rounded-lg px-4 pt-1 pb-12 space-regular"
    >
      {!graphData ? (
        <svg
          style={{
            filter: "blur(0px)",
          }}
          className="absolute top-2/4 left-2/4 animate-spin -mt-5 h-7 w-7 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      <div className="w-full h-10 flex items-center justify-between px-0">
        <div className="space-light pl-0 text-xl">
          {currentApy ? `${currentApy.name}/${currentApy.protocol}` : null}
        </div>
        <div className="flex gap-x-1.5 bg-gray-50">
          <button
            className="h-full w-7 bg-gray-200 rounded"
            onClick={() => {
              setGraphData(null);
              setDateRange(7);
            }}
          >
            7
          </button>
          <button
            className="h-full w-7 bg-gray-200 rounded"
            onClick={() => {
              setGraphData(null);
              setDateRange(10);
            }}
          >
            10
          </button>
          <button
            className="h-full w-7 bg-gray-200 rounded"
            onClick={() => {
              setGraphData(null);
              setDateRange(30);
            }}
          >
            30
          </button>
        </div>
      </div>
      <Bar width="100%" height="100%" data={data} options={options} />
    </div>
  );
}
