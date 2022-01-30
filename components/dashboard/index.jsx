import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Leaderboard from "./Leaderboard";
import Graph from "./Graph";
import getLeaderboard from "./api/getLeaderboard";
import getGraphData from "./api/getGraphData";

export default function Dashboard() {
  const [leaderboard, setLeaderboard] = useState(null);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    if (!leaderboard) {
      getLeaderboard(setLeaderboard);
    }
    if (!graphData) {
      getGraphData(setGraphData);
    }
  }, [leaderboard, graphData]);

  return (
    <div className="w-screen h-screen flex box-border	overflow-hidden">
      <Sidebar />
      <div className="relative w-full h-full p-3 flex gap-x-3 bg-gray-100 box-border	">
        <Leaderboard leaderboard={leaderboard} />
        <div
          style={
            {
              // width: "70%",
            }
          }
          className="h-full grow flex flex-col gap-y-3"
        >
          <Graph />
          {/* <Graph /> */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
