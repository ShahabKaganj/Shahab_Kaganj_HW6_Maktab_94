
// -- assumptions --
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const num = +prompt("The Number of Numbers:");
const userInfo = new Array(num);

// -- get info --
const data = (num, userInfo) => {
    for (let i = 0; i < num; i++) {
      userInfo[i] = prompt(`The ${i + 1}th Number:`);
    }
    return userInfo;
};

//-- anagrams function --
const anagramsFunc = (arr) => {
    const anagrams = {};
  
    arr.map((word) => {
      const sortedWord = [...word]
        .map((c) => c.toLowerCase())
        .sort()
        .join("");
  
      anagrams[sortedWord] = word;
    });
    return anagrams;
};

//-- run program --
const dataUser = data(num, userInfo);
const newAnagrams = anagramsFunc(dataUser);

alert(Object.values(newAnagrams));

