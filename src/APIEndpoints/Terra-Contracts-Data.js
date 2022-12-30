import axios from 'axios'

async function TerraContracts() {
  const res = await axios.post("https://flipside-api.antonyip.com/getCachedQuery",{
      query: `
      select
        date_trunc('week', block_timestamp) as day_date,
        count(1) as num_contracts,
        sum(num_contracts) over (
          order by
            day_date
        ) as sum_contracts
      from
        terra.core.fact_msgs
      where
        msg_type = 'instantiate'
      group by
        1
      order by
        1
          `,
      },
  )
  return res.data;
}

export default TerraContracts