const range = document.querySelector('input[type="range"]');
const allLis = document.querySelectorAll("li");
const h1 = document.querySelector("h1");
const allPs = document.querySelectorAll("p");
const colors = ["red", "purple", "yellow"];

for (let li of allLis) {
  li.innerText = "We are the best Lis!";
}

h1.style.background = "orchid";
allPs.forEach((p, i) => {
  const color = colors[i];
  p.style.color = color;
});
