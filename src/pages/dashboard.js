import React from "react";
import Leaderboard from "../components/leaderboard";
import Sidebar from "../components/sidebar";

import Graph from "../components/graph";

export default function Dashboard() {
  const graphLabels = [
    "1 Oct",
    "2 Oct",
    "3 Oct",
    "4 Oct",
    "5 Oct",
    "6 Oct",
    "7 Oct",
    "8 Oct",
    "9 Oct",
    "10 Oct",
    "11 Oct",
    "12 Oct",
    "13 Oct",
    "14 Oct",
    "15 Oct",
    "16 Oct",
    "17 Oct",
    "18 Oct",
    "19 Oct",
    "20 Oct",
    "21 Oct",
    "22 Oct",
    "23 Oct",
    "24 Oct",
    "25 Oct",
    "26 Oct",
    "27 Oct",
    "28 Oct",
    "29 Oct",
    "30 Oct",
  ];

  var graphDatasets1 = [[], []];
  var graphDatasets2 = [[], []];

  // eslint-disable-next-line no-unused-vars
  for (var label in graphLabels) {
    graphDatasets1[0].push(Math.floor(Math.random() * 10));
    graphDatasets1[1].push(Math.floor(Math.random() * 2));

    graphDatasets2[0].push(Math.floor(Math.random() * 10));
    graphDatasets2[1].push(Math.floor(Math.random() * 2));
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        fontFamily: "Gilroy Bold",
        overflow: "hidden",
      }}
    >
      <Sidebar />
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f6f6ff",
          padding: "1rem",
          display: "flex",
        }}
      >
        <Leaderboard />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            height: "100%",
            paddingLeft: "1rem",
          }}
        >
          <div style={{ flex: 1, width: "100%" }}>
            <Graph
              graphData={{
                graphLabels: graphLabels,
                graphDatasets: graphDatasets1,
              }}
            />
          </div>
          <div style={{ width: "100%", height: "1rem" }}></div>
          <div style={{ flex: 1 }}>
            <Graph
              graphData={{
                graphLabels: graphLabels,
                graphDatasets: graphDatasets2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
