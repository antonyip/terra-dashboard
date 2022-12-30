import axios from 'axios'

async function TerraFees() {
  const res = await axios.post("https://flipside-api.antonyip.com/getCachedQuery",{
      query: `
      select
        date_trunc('week', block_timestamp) as day_date,
        sum(fee) as sum_fee,
        avg(fee) as avg_fee
      from
        terra.core.fact_transactions
      group by
        1
      order by
        1
          `,
      },
  )
  return res.data;
}

export default TerraFees