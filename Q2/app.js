

//-- sort data --

function sortFunc() {
    const aggregatedList = [];
    [...arguments].map((item) => {
        aggregatedList.push(...item);
    });
    aggregatedList.sort((a, b) => {
        return b - a;
    });

    return aggregatedList;
}

// const result = sortFunc([5, 6, 2], [3, 7, 1], [2, 4, 8]);


//-- get data from user --

const rows = +prompt("Total number of members:");
const columns = +prompt("Internal number of members");

function getData(row, col) {
  let arr = [];

  for (let i = 0; i < row; i++) {
    arr[i] = [];
    for (let j = 0; j < col; j++) {
      arr[i][j] = +prompt(
        `Enter Your ${j + 1}-th Number from ${i + 1}-th Member:`
      );
    }
  }
  return arr;
}

const data = getData(rows, columns);
console.log(data);

const result = sortFunc(data);

console.log(result.toString());
console.log(...result);

