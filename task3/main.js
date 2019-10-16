let waterFill = function (arr) {
  let leftMax = 0
  let rightMax = 0
  let left = 0
  let right = arr.length - 1
  let sum = 0

  while (left < right) {
    if (arr[left] > leftMax) {
      leftMax = arr[left]
    }

    if (arr[right] > rightMax) {
      rightMax = arr[right]
    }

    if (leftMax >= rightMax) {
      sum += rightMax - arr[right]
      right--
    }

    else {
      sum += leftMax - arr[left]
      left++
    }
  }
  return sum
}