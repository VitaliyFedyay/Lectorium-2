const coins = [
  { name: '100 UAH', value: 100 },
  { name: '50 UAH', value: 50 },
  { name: '20 UAH', value: 20 },
  { name: '10 UAH', value: 10 },
  { name: '5 UAH', value: 5 },
  { name: '2 UAH', value: 2 },
  { name: '1 UAH', value: 1 },
]
const coinCount = {}

submit.onclick = function () {
  let money = document.getElementById('money').value
  let price = document.getElementById('price').value
  let diff = money - price
  document.getElementById('diff').innerHTML = diff
  generateCoinChange(diff)
}

function generateCoinChange(diff) {
  let indexOfCoin = 0
  while (diff > 0) {
    const coin = coins[indexOfCoin]
    if (diff >= coin.value) {
      diff -= coin.value
      coinCount[coin.name] = coinCount[coin.name] == null ? 1 : coinCount[coin.name] + 1
    } else {
      indexOfCoin++
    }
  }

  const text = Object.getOwnPropertyNames(coinCount)
    .map(coinName => coinName + ": " + coinCount[coinName] + ' amount')
    .join(`, `)
  document.getElementById('optimal').innerHTML = text

}



