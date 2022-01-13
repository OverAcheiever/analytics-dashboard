import React, { useState, useEffect } from "react";
import { getLeaderboard } from "./data";

export default function Leaderboard({ currentApy, setCurrentApy }) {
  const [leaderboard, setLeaderboard] = useState(null);

  useEffect(() => {
    if (leaderboard === null) {
      getLeaderboard(setLeaderboard);
    }
  }, [leaderboard]);

  return (
    
    <div className="w-72 h-full p-3 bg-white rounded-lg">
      <div>
        {leaderboard !== null
          ? leaderboard.map((pair, key) => {
              console.log(pair);

              return (
                <div
                  key={key}
                  className={`h-10 flex items-center justify-between px-2 rounded hover:bg-gray-100 ${
                    pair.tokenName === currentApy.name &&
                    pair.protocol === currentApy.protocol
                      ? "bg-gray-100 active:bg-gray-100"
                      : "bg-white"
                  } cursor-pointer`}
                  onClick={() =>
                    setCurrentApy({
                      name: pair.tokenName,
                      address: pair.tokenAddress,
                      protocol: pair.protocol,
                    })
                  }
                >
                  <div className="flex gap-x-2">
                    <div>{key + 1}.</div>
                    <div>
                      {pair.tokenName}/{pair.protocol}
                    </div>
                  </div>
                  <div>{pair.apy}%</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
