function main() {
  let root = document.querySelector("#root");
  let btn = document.querySelector("#chng_btn");
  let input = document.querySelector("#input");
  let copyBtn = document.querySelector("#copyBtn");
  let toast = document.querySelector(".toast");
  let hMsg = document.querySelector("h4.hMsg");
  btn.addEventListener("click", function () {
    let bgColor = generateHex();
    root.style.backgroundColor = bgColor;
    input.value = bgColor;
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(input.value);
    hMsg.textContent = "You copied: " + input.value;
    toast.style.display = "block";
    setTimeout(function timeOut() {
      toast.style.display = "none";
      // alert("You copied: " + input.value)
    }, 1000);
  });
  function generateHex() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  }
  function toastStyle() {
    toast.style.position = "absolute";
    toast.style.top = "25px";
    toast.style.right = "25px";
    toast.style.backgroundColor = "green";
    toast.style.padding = "16px 48px";
    hMsg.style.lineHeight = "0px";
    toast.style.display = "none";
  }
  toastStyle();
}
main();
