import axios from 'axios'

async function TerraTPS() {
  const res = await axios.post("https://flipside-api.antonyip.com/getCachedQuery",{
      query: `
      with
      raw_data as (
        select
          date_trunc('week', block_timestamp) as day_date,
          count(distinct tx_id) as tx_count,
          tx_count / 3600 / 24 / 7 as tps
        from
          terra.core.fact_transactions
        group by
          1
      )
    select
      *
    from
      raw_data
    order by
      day_date
          `,
      },
  )
  return res.data;
}

export default TerraTPS