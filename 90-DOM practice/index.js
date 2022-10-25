console.clear();

for (let i = 0; i < 5; i++) {
  let myDiv = document.createElement("div");
  let myHead = document.createElement("h2");
  let myPara = document.createElement("p");

  let myHeadText = document.createTextNode(`Product Title ${i+1}`);
  let myParaText = document.createTextNode(`Product description ${i+1}`);
  myHead.appendChild(myHeadText);
  myPara.appendChild(myParaText);

  myDiv.appendChild(myHead);
  myDiv.appendChild(myPara);

  document.body.appendChild(myDiv);
}
