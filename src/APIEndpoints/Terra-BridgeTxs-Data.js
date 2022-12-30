import axios from "axios";

const myQuery = `
select
  date_trunc('week', block_timestamp) as "Day",
  case
    when message_value:receiver ilike '%kujira%' then 'Kujira'
    when message_value:receiver ilike '%osmo%' then 'Osmosis'
    when message_value:receiver ilike '%axelar%' then 'Axelar'
    when message_value:receiver ilike '%evmos%' then 'Evmos'
    when message_value:receiver ilike '%secret%' then 'Secret'
    when message_value:receiver ilike '%juno%' then 'Juno'
    when message_value:receiver ilike '%cre%' then 'Cre'
    when message_value:receiver ilike '%gravity%' then 'Gravity'
    when message_value:receiver ilike '%sif%' then 'Sif'
    when message_value:receiver ilike '%stride%' then 'Stride'
    else message_value:receiver
  end as "Destination chain",
  count(distinct tx_id) as "tx count",
  count(distinct sender) as "Unique wallet",
  sum(amount::number / 1e6) as "Volume",
  avg(amount::number / 1e6) as "AVG volume"
from
  terra.core.ez_transfers
where
  tx_succeeded = 'TRUE'
  and currency = 'uluna'
  and message_value:receiver is not null
  and message_value:receiver not ilike '%terra%'
group by
  1,
  2
order by
  1
`;

export async function TerraBridgedTxs() {
  const res = await axios.post(
    "https://flipside-api.antonyip.com/getCachedQuery",
    {
      query: myQuery,
    }
  );
  return res.data;
}

export function TerraBridgedTxsQuery() {
  return myQuery
}