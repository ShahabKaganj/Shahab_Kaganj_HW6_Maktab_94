
const num = +prompt("The Number of Numbers:");
const userInfo = new Array(num);


// -- get info --
const data = (num, userInfo) => {
    for (let i = 0; i < num; i++) {
        userInfo[i] = prompt(`The ${i + 1}th Number:`);
    }
    return userInfo;
};
