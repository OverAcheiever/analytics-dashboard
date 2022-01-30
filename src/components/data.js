import axios from "axios";
import moment from "moment";

const tokens = [
  { name: "Dai", address: "0x6b175474e89094c44da98b954eedeac495271d0f" },
  { name: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
  { name: "USDT", address: "0xdac17f958d2ee523a2206206994597c13d831ec7" },
];

function cropDecimal(num, fixed) {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
}

function sort(a, b) {
  return b.apy - a.apy;
}

export async function getLeaderboard(setLeaderboard) {
  let leaderboard = [];

  for (let token in tokens) {
    await axios
      .get(
        `https://staging.api.cryptostats.community/api/v1/apy-current/apyCurrent/${tokens[token].address}`
      )
      .then((res) => {
        const data = res.data.data;
        for (let protocol in data) {
          if (
            data[protocol].id === "yearn-vaults" ||
            data[protocol].id === "aave-v2" ||
            data[protocol].id === "compound"
          ) {
            leaderboard.push({
              tokenName: tokens[token].name,
              tokenAddress: tokens[token].address,
              protocol: data[protocol].id,
              apy: cropDecimal(data[protocol].results.apyCurrent * 100, 2),
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  await leaderboard.sort(sort);
  setLeaderboard(leaderboard);
}

function getDateArray(start, end, array) {
  start = moment(start);
  end = moment(end);

  while (start <= end) {
    array.push(start.format("YYYY-MM-DD"));
    start = start.add(1, "days");
  }
}

export async function getGraphData(
  start,
  end,
  tokenAddress,
  protocol,
  setGraphData
) {
  setGraphData(null);

  let dates = [];
  getDateArray(start, end, dates);

  let apyRange = [];
  for (let date in dates) {
    try {
      const url = `https://api.cryptostats.community/api/v1/apy-range/apyOverDateRange/${tokenAddress},${
        dates[date]
      },${dates[parseInt(date) + 1]}?metadata=false`;

      await axios.get(url).then((res) => {
        const data = res.data.data;

        for (let p in data) {
          if (data[p].id === protocol) {
            let apy = data[p].results.apyOverDateRange * 100;
            apy = !apy ? 0 : apy;
            apyRange.push(String(apy));
          }
        }
      });
    } catch (err) {
      console.log(err);
    }

    if (dates.length - 1 === parseInt(date)) {
      setGraphData({
        labels: dates,
        datasets: apyRange,
      });
    }
  }
}
