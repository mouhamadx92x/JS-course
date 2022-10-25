console.clear();

let arr = ["Mouhamad", "ali", "asd", "bla", "madrid", "yaya", "issam"];

let check = arr.reduce((acc, curent) =>
  acc.length > curent.length ? acc : curent
);

console.log(check);

let arr2 = ["m", "@", "h", "@", "d", "@", "@"];

let mhd = arr2
  .filter((el) => !el.startsWith("@"))
  .reduce((acc, curent) => `${acc}${curent}`);
console.log(mhd);

let arr3 = [1, 4, 7, 3, 7];

let addEle = arr3.forEach((ele) => {
   sum = 0;
  sum += ele;
});

console.log(sum);
//--------------------------------
