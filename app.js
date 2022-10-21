// Retrieve sale-el paragraph from index.html and store in variable saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

// listen for clicks on the increment button
function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  // create variable num and set equal to count and string " - "
  let num = " " + count + " - ";
  // render variable in saveEl using innerText
  saveEl.textContent += num;
  count = 0;
  countEl.textContent = count;
}
