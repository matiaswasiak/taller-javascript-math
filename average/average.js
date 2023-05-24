const result = document.getElementById("result");

const averages = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// With reduce
const average =
  averages.reduce((acc, current) => {
    return acc + current;
  }, 0) / averages.length;

result.innerText = `La media es ${average}`;

// With forEach
let totalAverage = 0;
averages.forEach((average) => {
  totalAverage += average;
});

result.innerText = `La media es ${totalAverage / averages.length}`;
