import React, { useState ,useEffect} from "react";
import Sidebar from "./Sidebar";
import Leaderboard from "./Leaderboard";

export default function Dashboard() {

  const [leaderboard, setLeaderboard] = useState(null);

  useEffect(() => {
    if(!leaderboard) {
    }
  }, [leaderboard]);

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="w-full h-full p-3 flex gap-x-3 bg-gray-100">
        <Leaderboard leaderboard={leaderboard} />
      </div>
    </div>
  );
}
