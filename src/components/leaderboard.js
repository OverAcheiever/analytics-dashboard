import React, { useState, useEffect } from "react";
import { CryptoStatsSDK } from "@cryptostats/sdk";


export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([
    { name: "Bankless DAO", percent: "23.25%", current: "true" },
    { name: "Bankless LLC", percent: "5.62%", current: "false" },
    { name: "Bankless HQ", percent: "-2.14%", current: "false" },
  ]);

  // useEffect(() => {
  //   const moralisKey = "7fd1e7ef047a764836b4cbd1";

  //   const tokens = [
  //     { name: "Dai", address: "0x6b175474e89094c44da98b954eedeac495271d0f" },
  //     { name: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
  //     { name: "USDT", address: "0xdac17f958d2ee523a2206206994597c13d831ec7" },
  //   ];

  //   (async function () {
  //     const sdk = new CryptoStatsSDK({ moralisKey });
  //     const list = sdk.getList("apy");
  //     await list.fetchAdapters();

  //     for (const token of tokens) {
  //       const result = await list.executeQuery("currentAPY", token.address);

  //       console.log(`APY for ${token.name}:`);

  //       for (const protocol of result) {
  //         console.log(
  //           `${protocol.id}: ${(protocol.result * 100).toFixed(2)}%`
  //         );
  //       }
  //     }
  //   })();
  // });

  return (
    <div
      style={{
        width: "20rem",
        height: "100%",
        backgroundColor: "#fff",
        padding: "0.5rem 1rem 1rem 1rem",
        borderRadius: "0.5rem",
      }}
    >
      {/* <div
        style={{
          width: "100%",
          height: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 0.5rem 0 0.5rem",
          fontSize: "1.2rem"
        }}
      >
        Leaderboard
      </div> */}
      <div style={{ marginTop: "0.5rem" }}>
        {leaderboard.map((dao, key) => {
          return (
            <div
              key={key}
              className="leaderboard-item"
              style={{
                marginTop: "0.3rem",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "0.3rem",
                backgroundColor: `${dao.current === "true" ? "#f7f7f7" : ""}`,
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "0.5rem" }}>{key + 1}.</div>
                <div style={{ marginLeft: "0.5rem" }}>{dao.name}</div>
              </div>
              <div>{dao.percent}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
