
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

const result = sortFunc([5, 6, 2], [3, 7, 1], [2, 4, 8]);

console.log(result.toString());