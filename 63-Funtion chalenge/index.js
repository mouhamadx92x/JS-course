console.clear();

function showDetails(a, b, c) {
  let name;
  let age;
  let status;
  //  let status1;
  typeof a == "string"
    ? (name = a)
    : typeof a == "number"
    ? (age = a)
    : a == true
    ? (status = "Availabe")
    : (status = "Not Availabe");
  typeof b == "string"
    ? (name = b)
    : typeof b == "number"
    ? (age = b)
    : a == true
    ? (status = "Availabe")
    : (status = "Not Availabe");
  typeof c == "string"
    ? (name = c)
    : typeof c == "number"
    ? (age = c)
    : a == true
    ? (status = "Availabe")
    : (status = "Not Availabe");
  // status==true?status1="Availabel For hire":status1="Not Availabel For hire"
  console.log(`hello ${name}, Your age is ${age}, You are ${status} For hire`);
}

showDetails("osama", 34, true);
showDetails(true, "osama", 34);
showDetails("osama", true, 34);
showDetails(34, true, "osama");

/* 

function showDetails(a, b, c) {
  info = [a, b, c];
  for (i = 0; i < 3; i++) {
    if (typeof info[i] === "string") {
      first = info[i];
    } else if (typeof info[i] === "number") {
      second = info[i];
    } else if (typeof info[i] === "boolean") {
      if (info[i] === true) {
        third = "Available";
      } else {
        third = "Not Available";
      }
    }
  }
}
showDetails(false, "Ahmed", 19);

document.write(
  ` Hello ${first}, Your Age Is ${second}, You Are ${third} To Hire`
); 

*/
