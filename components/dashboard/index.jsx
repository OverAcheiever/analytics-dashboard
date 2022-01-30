import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Leaderboard from "./Leaderboard";
import Graph from "./Graph";
import getLeaderboard from "./api/getLeaderboard";

export default function Dashboard() {
  const [leaderboard, setLeaderboard] = useState(null);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    if (!leaderboard) {
      getLeaderboard(setLeaderboard);
    }
  }, [leaderboard]);

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="w-full h-full p-3 flex gap-x-3 bg-gray-100">
        <Leaderboard leaderboard={leaderboard} />
        <Graph />
      </div>
    </div>
  );
}
