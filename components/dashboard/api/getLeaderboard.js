import axios from "axios";
import { tokens } from "../constants/tokens";

function toFixedWithoutRounding(num, fractionDigits) {
  if ((num > 0 && num < 0.000001) || (num < 0 && num > -0.000001)) {
    num = 0;
  }
  const re = new RegExp("^-?\\d+(?:.\\d{0," + (fractionDigits || -1) + "})?");
  return Number(num.toString().match(re)[0]).toFixed(fractionDigits);
}

export default async function getLeaderboard(setLeaderboard) {
  let leaderboard = [];

  for (let token in tokens) {
    const address = tokens[token].address;

    await axios
      .get(
        `https://api.cryptostats.community/api/v1/apy-current/apyCurrent/${address}?metadata=false`
      )
      .then((res) => {
        const protocols = res.data.data;

        for (let protocol in protocols) {
          let apy = protocols[protocol].results.apyCurrent * 100;
          apy = toFixedWithoutRounding(apy, 2);

          leaderboard.push({
            name: tokens[token].name,
            protocol: protocols[protocol].id,
            address: address,
            apy: apy,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(leaderboard);
  setLeaderboard(leaderboard);
}
