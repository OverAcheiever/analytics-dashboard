import React from "react";
import { Chart, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useState } from "react/cjs/react.development";
Chart.register(ChartDataLabels);


export default function Graph({ graphData }) {
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
      // {
      //   label: "Reward",
      //   barPercentage: 1,
      //   display: "auto",
      //   data: graphData.datasets[1],
      //   backgroundColor: "#DBE0EA",
      //   fill: true,
      //   datalabels: {
      //     offset: "-20",
      //   },
      // },
    ],
  };

  const options = {
    options: {
      interaction: {
        mode: "nearest",
      },
    },
    font: {
      fontFamily: "Gilroy",
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
          family: "Gilroy",
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
            family: "Gilroy",
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
          family: "Gilroy Bold",
          size: 15,
        },
        bodyFont: {
          family: "Gilroy",
          size: 12,
        },
        footerFont: {
          family: "Gilroy",
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
            family: "Gilroy Bold",
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
            family: "Gilroy Bold",
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
        width: "100%",
        // height: "100%",
        backgroundColor: "#fff",
        borderRadius: "1rem",
        padding: "1.5rem 1.5rem 0.8rem 1.5rem",
        filter: `${!graphData ? "blur(0px)" : ""}`,
      }}
      className="h-full"
    >
      {" "}

    
      <div className="w-full flex justify-end">
        <div className="w-max border border-gray-300 flex gap-2 pointer rounded-sm p-2">
          <button>1d</button>
          <button>90d</button>
          <button>1y</button>
        </div>
      </div>

      
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
      <Bar
        width="100%"
        height="100%"
        data={data}
        options={options}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
}
