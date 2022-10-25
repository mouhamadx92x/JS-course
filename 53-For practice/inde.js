console.clear();

let products = ["keyboard", "Mouse", "Pen", "Pad","Iphone", "Monitor"];
let color = ["Green", "Red", "Black"];
let show = 5;

document.write(`<h1>show ${show} products</h1>`);

for (let i = 0; i < show; i++) {
  document.write(`<div>`);
  document.write(`<h3>Item [${i + 1}] ${products[i]} </h3>`);
  /* for (let j = 0; j < color.lengthl; j++) {
    document.write(`<p>${color[j]}</p>`);
  } */
  document.write(`<p>${color.join(" | ")}</p>`);
  document.write(`</div>`);
}
