import axios from "axios";

const myQuery = `
with
  first_tx as (
    select
      min(block_timestamp) as first_date,
      tx_sender
    from
      terra.core.fact_transactions
    group by
      2
  )
select
  date_trunc('week', first_date) as day_date,
  count(tx_sender) as new_weekly,
  sum(new_weekly) over (
    order by
      day_date
  ) as sum_users
from
  first_tx
group by
  1
order by
  1
`;

export async function TerraWeeklyUnique() {
  const res = await axios.post(
    "https://flipside-api.antonyip.com/getCachedQuery",
    {
      query: myQuery,
    }
  );
  return res.data;
}

export function TerraWeeklyUniqueQuery() {
  return myQuery
}