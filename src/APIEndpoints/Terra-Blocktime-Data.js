import axios from "axios";

const myQuery = `
with
  raw_data as (
    select
      block_timestamp,
      LAG(block_timestamp) ignore nulls over (
        order by
          block_id
      ) as prev_timestamp,
      datediff('seconds', prev_timestamp, block_timestamp) as seconds_diff
    from
      terra.core.fact_blocks
    order by
      block_id asc
  )
select
  date_trunc('week', block_timestamp),
  avg(seconds_diff) as avg_blocktime,
  count(1) as num_blocks
from
  raw_data
group by
  1
order by
  1 asc
`;

export async function TerraBlocktime() {
  const res = await axios.post(
    "https://flipside-api.antonyip.com/getCachedQuery",
    {
      query: myQuery,
    }
  );
  return res.data;
}

export function TerraBlocktimeQuery() {
  return myQuery
}