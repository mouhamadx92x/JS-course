console.clear();

let myString="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"

let solution=myString.split(",")
.filter((el) => isNaN(parseInt(el)))
.filter((el) => !el.startsWith("_"))
.reduce((acc,curent)=>`${acc}${curent}`).slice(1,16)

console.log(solution);