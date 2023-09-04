window.onload = () => {
  main();
};

function main() {
  let root = document.querySelector("#root");
  let btn = document.querySelector("#chng_btn");
  let input = document.querySelector("#input");
  btn.addEventListener("click", function () {
    let bgColor = generateHex();
    root.style.backgroundColor = bgColor;
    input.value = bgColor;
  });
}

function generateHex() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
