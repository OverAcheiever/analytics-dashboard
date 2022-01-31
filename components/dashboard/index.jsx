import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Leaderboard from "./Leaderboard";
import Graph from "./Graph";
import getLeaderboard from "./api/getLeaderboard";
import getGraphData from "./api/getGraphData";
import moment from "moment";

export default function Dashboard() {
  const [leaderboard, setLeaderboard] = useState(null);
  const [currentApy, setCurrentApy] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [dateRange, setDateRange] = useState(7);

  console.log(currentApy);

  useEffect(() => {
    if (!leaderboard) {
      getLeaderboard(setLeaderboard);
    }
    if (leaderboard && !currentApy) {
      setCurrentApy(leaderboard[1]);
    }
  }, [leaderboard, graphData, currentApy]);

  useEffect(() => {
    if (leaderboard && currentApy && !graphData) {
      let startDate = moment().subtract(dateRange, "days").calendar();
      startDate = moment(startDate).format("YYYY-MM-DD");
      const endDate = moment().format("YYYY-MM-DD");
      getGraphData(
        startDate,
        endDate,
        currentApy.address,
        currentApy.protocol,
        setGraphData
      );
    }
  }, [leaderboard, currentApy, graphData]);

  return (
    <div className="w-screen h-screen flex box-border	overflow-hidden">
      <Sidebar />
      <div className="relative w-full h-full p-3 flex gap-x-3 bg-gray-100 box-border	">
        <Leaderboard
          leaderboard={leaderboard}
          currentApy={currentApy}
          setGraphData={setGraphData}
          setCurrentApy={setCurrentApy}
        />
        <div
          style={
            {
              // width: "70%",
            }
          }
          className="h-full grow flex flex-col gap-y-3"
        >
          <Graph
            currentApy={currentApy}
            graphData={graphData}
            setDateRange={setDateRange}
            setGraphData={setGraphData}
          />
          {/* <Graph /> */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
