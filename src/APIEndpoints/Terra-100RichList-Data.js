import axios from "axios";

const myQuery = `
with
  all_transfers as (
    select
      sender as addr,
      sum(amount::number / 1e6) as volume
    from
      terra.core.ez_transfers
    where
      currency = 'uluna'
      and amount is not null
      and tx_succeeded = true -- and message_type = '/ibc.applications.transfer.v1.MsgTransfer'
    group by
      1
    union all
    select
      receiver as addr,
      - sum(amount::number / 1e6) as volume
    from
      terra.core.ez_transfers
    where
      currency = 'uluna'
      and amount is not null
      and tx_succeeded = true -- and message_type = '/ibc.applications.transfer.v1.MsgTransfer'
    group by
      1
  )
select
  addr as "Wallet",
  sum(volume::number) as "Balance"
from
  all_transfers
group by
  1
having
  "Balance" > 0
order by
  2 desc
limit
  100
`;

export async function Terra100Richlist() {
  const res = await axios.post(
    "https://flipside-api.antonyip.com/getCachedQuery",
    {
      query: myQuery,
    }
  );
  return res.data;
}

export function Terra100RichlistQuery()
{
  return myQuery
}

