import axios from "axios";

const myQuery = `
select
  date_trunc('week', block_timestamp) as day_date,
  count(DISTINCT tx_sender)
from
  terra.core.fact_transactions
group by
  1
order by
  1
`;

export async function TerraWeeklyActive() {
  const res = await axios.post(
    "https://flipside-api.antonyip.com/getCachedQuery",
    {
      query: myQuery,
    }
  );
  return res.data;
}

export function TerraWeeklyActiveQuery() {
  return myQuery
}
