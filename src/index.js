
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let direction = "left-right";
  const result = [];
  
  if (!Array.isArray(matrix)) {
    return [];
  }

  for (row of matrix) {
    if (direction === "left-right") {
      for (num of row)
      result.push(num);
      direction = "right-left";
    } else {
      for (let i = row.length - 1; i >= 0; i -= 1) {
        result.push(row[i]);
        direction = "left-right";
      }
    }
  }
  return result;
}
