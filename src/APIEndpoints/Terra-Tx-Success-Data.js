import axios from 'axios'

async function TerraTxSuccessRate() {
  const res = await axios.post("https://flipside-api.antonyip.com/getCachedQuery",{
      query: `
      select
        date_trunc('week', block_timestamp) as day_date,
        (sum(iff(tx_succeeded = TRUE, 1, 0)) / count(distinct tx_id)) * 100 as success_rate,
        avg(success_rate) over (order by day_date) as avg_success_rate
      from
        terra.core.fact_transactions
      group by 1
      order by 1
          `,
      },
  )
  return res.data;
}

export default TerraTxSuccessRate