import React from "react";
import { Bar } from "react-chartjs-2";

export default function Graph({ graphData }) {
  if (graphData !== null) {
    var data = {
      labels: graphData.graphLabels,
      datasets: [
        {
          label: "Tier 1",
          barPercentage: 0.9,
          data: graphData.graphDatasets[0],
          backgroundColor: "rgb(139, 92, 246)",

          fill: true,
        },
        {
          label: "Tier 2",
          barPercentage: 0.9,
          data: graphData.graphDatasets[1],
          backgroundColor: "rgb(175, 206, 255)",

          fill: true,
        },
        // {
        //   label: "Tier 3",
        //   barPercentage: 0.8,
        //   data: graphData.graphDatasets[2],
        //   backgroundColor: "rgb(251, 207, 232)",
        //   fill: true,
        // },
      ],
    };

    const options = {
      font: {
        fontFamily: "Gilroy",
      },
      elements: {},
      plugins: {
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
          callbacks: {
            label: function (data) {
              return ` USDC: ${data.parsed.y}%`;
            },
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
          suggestedMax: 25,
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
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: "1rem",
          padding: "1.5rem 1.5rem 0.8rem 1rem",
        }}
      >
        <Bar width="100%" height="100%" data={data} options={options} />
      </div>
    );
  } else {
    return null;
  }
}
