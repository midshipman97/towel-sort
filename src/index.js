
// You should implement your task here.

module.exports = function towelSort (matrix) { //проверяем на заполненность аргумент и нечетные элементы массива (т.к. начинается с "0") реверсим
  if (!matrix) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      arr = arr.concat(matrix[i]);
    } else {
      arr = arr.concat(matrix[i].reverse());
    }
  }
  return arr
}
