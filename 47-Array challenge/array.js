let zero=0;

let counter=3;

let my=["Ahmad","Mazero","Elham","Osama","Gamal","Ammer"]

console.log(my.slice(zero,++counter).reverse());

console.log(my.slice(++zero,--counter).reverse());

console.log(`${my[2][0]}${my[2][1]}${my[1].substring(--counter)}`);

console.log(`${my[1][4]}${my[1][5].toUpperCase()}`);


