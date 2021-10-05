import React from "react";
import { Chart, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

export default function Graph({ graphData }) {
  if (graphData !== null) {
    var data = {
      labels: graphData.graphLabels,
      datasets: [
        {
          label: "APY",
          barPercentage: 1,
          data: graphData.graphDatasets[0],
          backgroundColor: "#99A2C6",
          display: true,
          fill: true,
        },
        {
          label: "Reward",
          barPercentage: 1,
          display: "auto",
          data: graphData.graphDatasets[1],
          backgroundColor: "#DBE0EA",
          fill: true,
          datalabels: {
            offset: "-20",
          },
        },
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
          padding: "1.5rem 1.5rem 0.8rem 1.5rem",
        }}
      >
        <Bar
          width="100%"
          height="100%"
          data={data}
          options={options}
          plugins={[ChartDataLabels]}
        />
      </div>
    );
  } else {
    return null;
  }
}
