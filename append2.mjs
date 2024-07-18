const request_time = new Date().toISOString()
const response = await (await fetch("https://nexus.oasis.io/v1/consensus/transactions?limit=1&offset=0")).json()
const latest_tx_time = response.transactions[0].timestamp
console.log(JSON.stringify({
  latest_tx_time,
  request_time,
  latest_tx_age_ms: new Date(request_time) - new Date(latest_tx_time),
}))
