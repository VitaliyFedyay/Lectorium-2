function findValue(arr) {

  let newArr = arr.filter(function (item) { return typeof (item) === 'number' && !isNaN(item) })

  let max = newArr.reduce((acc, current) => acc > current ? acc : current)
  let min = newArr.reduce((acc, current) => acc < current ? acc : current)
  let sum = newArr.reduce((acc, current) => acc + current, 0)

  function createObj(max, min, sum) {
    return { max: max, min: min, sum: sum }
  }

  console.table(createObj(max, min, sum))
}