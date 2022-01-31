import React from "react";

export default function Leaderboard({
  leaderboard,
  currentApy,
  setCurrentApy,
  setGraphData,
}) {
  return (
    <div className="grow-0 w-80 bg-white rounded-lg p-3 space-light flex flex-col gap-y-1.5">
      {leaderboard ? (
        leaderboard.map((item, index) => {
          return (
            <button
              key={index}
              className={`h-10 flex items-center justify-between ${
                currentApy &&
                currentApy.name === item.name &&
                currentApy.protocol === item.protocol
                  ? "bg-gray-300"
                  : "bg-gray-50"
              } rounded px-2`}
              onClick={() => {
                setGraphData(null);
                setCurrentApy(item);
              }}
            >
              <div className="flex gap-x-2">
                <div>{index + 1}.</div>
                <div>
                  {item.name}/{item.protocol}
                </div>
              </div>
              {item.apy}%
            </button>
          );
        })
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg
            className="animate-spin h-8 w-8 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
}
