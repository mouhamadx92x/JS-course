console.clear();

/* let name =function(...arrayName){
 return ` String [${arrayName.join("],[")}] => Done !`

} */


let name =(...arrayName)=>` String [${arrayName.join("],[")}] => Done !`

console.log(name("osama","mohamad","ali"));
// --------------------------------------------------------------------------------

// let calc=(one , tow, ...nums)=>-one-tow+nums[0]+nums[1];


let calc= function(one , tow, ...nums){
     return-one-tow+nums[0]+nums[1];}


console.log(calc(10,20,50,60));

