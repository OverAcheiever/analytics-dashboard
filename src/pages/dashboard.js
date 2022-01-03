import React, { useState, useEffect } from "react";
import moment from "moment";
import Leaderboard from "../components/leaderboard";
import Sidebar from "../components/sidebar";
import Graph from "../components/graph";

import { getGraphData } from "../components/data";

export default function Dashboard() {
  const [currentApy, setCurrentApy] = useState({
    name: "USDT",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    protocol: "yearn-vaults",
  });
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    let startDate = moment().subtract(9, "days").calendar();
    startDate = moment(startDate).format("YYYY-MM-DD");
    const endDate = moment().format("YYYY-MM-DD");
    getGraphData(
      startDate,
      endDate,
      currentApy.address,
      currentApy.protocol,
      setGraphData
    );
  }, [currentApy]);

  return (
    <div className="flex w-screen h-screen overflow-hidden gilroy">
      <Sidebar />
      <div className="flex w-full h-full p-3 bg-gray-100">
        <Leaderboard currentApy={currentApy} setCurrentApy={setCurrentApy} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            height: "100%",
            paddingLeft: "1rem",
          }}
          className=""
        >
          <div style={{ flex: 1, width: "100%" }}>
            {graphData || true ? <Graph graphData={graphData} /> : null}
          </div>
          <div style={{ width: "100%", height: "1rem" }}></div>
          <div style={{ flex: 1 }}>
            {/* <Graph
              graphData={{
                graphLabels: graphLabels,
                graphDatasets: graphDatasets2,
              }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
