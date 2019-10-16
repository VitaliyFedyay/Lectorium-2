var nominal = [1, 2, 5, 10, 20, 50]

/* Использовал известный с 14 века нерекурсивный алгоритм индуса Нарайана Пандита.
 Из любого порядка в массиве генерится следующая итерация,
  учитывая лексикографический (по алфавиту) порядок сортировки.*/
  
function nextLexInPlace(arr) {
  var i, a = -1, b = -1;
  for (i = 0; i < arr.length - 1; i++) if (arr[i] < arr[1 + i]) a = i;
  if (!~a) return; // no more permutations
  for (i = a + 1; i < arr.length; i++) if (arr[a] < arr[i]) b = i;
  swap(arr, a, b);
  a++;
  b = arr.length - 1;
  while (a < b) swap(arr, a++, b--);
  return true;
}

function swap(arr, a, b) {
  var xx = arr[a];
  arr[a] = arr[b];
  arr[b] = xx;
}

var combi = function allMutations(source) {
  var result = [], arr = source.slice();
  result.push(arr.sort().slice());
  while (nextLexInPlace(arr)) result.push(arr.slice());
  return result;
}

console.dir(combi(nominal))
console.log(combi[500])
