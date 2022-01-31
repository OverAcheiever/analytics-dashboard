import { tokens } from "../constants/tokens";
import axios from "axios";
import moment from "moment";

function getDateArray(start, end, array) {
  start = moment(start);
  end = moment(end);

  while (start <= end) {
    array.push(start.format("YYYY-MM-DD"));
    start = start.add(1, "days");
  }
}

export default async function getGraphData(
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
