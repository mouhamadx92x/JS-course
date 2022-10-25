console.clear();

const prompt = require("prompt-sync")({ sigint: true });

function secretNumber() {
  let secretArray = [];
  do {
    let randNum = Math.floor(Math.random() * 9) + 1;
    if (!secretArray.includes(randNum)) {
      secretArray.push(randNum);
    }
    //here it checks the array length is less than 4. if it is not it will execute the above condition again until the while condition return true.
  } while (secretArray.length < 4);
  return secretArray.join("");
}
let randNum = secretNumber();
console.log("secretNumber", randNum);

// to count the attempt and the round
let attempt = 0;
let round = 0;

// get the user name
function getUserName() {
  let tempName = prompt("What is your name? ").toString();

  if (tempName == "") {
    tempName = "Player";
  }
  return tempName;
}
let userName = getUserName();

// how many attampt
// let attemptNumber = prompt("How many attempts do you need ? ");

function checker() {
  // Take a number from the user and controll it
  function getUnser() {
    let tempVAlue = prompt(
      `make a guess ${userName} ==> enter 4 unique digits `
    ).toString();
    let uniqueChecker = true;
    for (let i = 0; i < tempVAlue.length - 1; i++) {
      if (tempVAlue[i] == tempVAlue[i + 1]) {
        uniqueChecker = false;
      }
    }
    if (uniqueChecker == false) {
      console.log(`Please enter unique digits`);
      userValue = getUnser();
    }
    if (tempVAlue === "" || tempVAlue.length != 4) {
      console.log(`Please enter a 4 digits`);
      userValue = getUnser();
    }

    return tempVAlue;
  }

  let userValue = getUnser();
  console.log("user input", userValue);

  // calc the bulls
  function bullsCHecker(userValue, randNum) {
    let tempNum = 0;
    for (let i = 0; i < randNum.length; i++) {
      if (userValue[i] === randNum[i]) {
        tempNum++;
      }
    }
    return tempNum;
  }

  let bulls = bullsCHecker(userValue, randNum);
  //calc the cows
  function cowsChecker(userValue, randNum) {
    let tempNum = 0;
    for (let i = 0; i < randNum.length; i++) {
      for (let j = 0; j < userValue.length; j++) {
        if (randNum[i] === userValue[j] && i != j) {
          tempNum++;
        }
      }
    }
    return tempNum;
  }

  let cows = cowsChecker(userValue, randNum);
  // consol.log msg
  function bullsAndCows() {
    if (bulls == 0 && cows == 0) {
      let arr = ["Tyr again", "almost there", "keep clam", "you can do it"];
      console.log(`${arr[Math.floor(Math.random() * 4)]} ${userName}`);
    } else {
      console.log(`Hint ${bulls} bull and ${cows} cows ${userName}`);
    }
  }

  bullsAndCows();
  // here
  if (bulls != 4) {
    attempt++;
    checker();
    console.log(`You solve it in ${attempt + 1} attempts`);
    console.log(`Good work`);
  }
}

checker();

function anotherRound() {
  let temp = prompt("Do you want to play again? Y/N ").toString();
  if (temp.toUpperCase() == "Y") {
    round++;
    randNum = secretNumber();
    console.log("secretNumber", randNum);
    checker();
    anotherRound();
  } else {
    console.log(`see you next time ${userName} you played ${round + 1} times`);
  }
}

anotherRound();