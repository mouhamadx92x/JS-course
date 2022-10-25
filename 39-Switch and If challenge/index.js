console.clear();
let job = "Support";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(salary);

    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);

    break;
  default:
    salary = 4000;
    console.log(salary);
}

let holidays = 3;
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(money);
}else if(holidays === 1 || holidays === 2){
  money = 3000;
  console.log(money);
}else if(holidays === 3){
  money = 2000;
  console.log(money);
}else{
  money = 1000;
  console.log(money);
}
