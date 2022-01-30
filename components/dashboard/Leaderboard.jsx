import React from "react";

export default function Leaderboard({ leaderboard }) {
  leaderboard = [
    {
      name: "USDT/DAI",
      apy: "2.5%",
    },
    {
      name: "USDT/DAI",
      apy: "4.5%",
    },
    {
      name: "USDT/DAI",
      apy: "2.5%",
    },
  ];

  return (
    <div className="w-72 bg-white rounded-lg p-3 space-regular flex flex-col gap-y-1.5">
      {leaderboard.map((item, index) => {
        return (
          <div key={index} className="h-10 flex items-center justify-between bg-gray-50 rounded px-2">
            <div className="flex gap-x-2">
              <div>{index + 1}.</div> 
              <div>{item.name}</div>
            </div>

            {item.apy}

          </div>
        );
      })}
    </div>
  );
}
