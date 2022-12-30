const axios = require('axios')

const main = async () => {
  const res = await axios.post("https://flipside-api.antonyip.com/getCachedQuery",{
      query: `with raw_data as (
          select 
            date_trunc('hour', block_timestamp) as day_date,
            count(distinct tx_id) as tx_count,
            tx_count/3600 as tps
          from terra.core.fact_transactions
          group by 1
          )
          select *
          from raw_data
          order by day_date`,
      },
  ).then((res) => {
  //console.log(res.data) })
  return res;
}


main()
//console.log();