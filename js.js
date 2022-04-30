const sub = document.getElementById("jsSub");
const plus = document.getElementById("jsPlus");
const input = document.getElementById("jsNum");

var num =Number.parseInt( input.innerText);

sub.addEventListener("click", () => {
    input.innerText = num - 1;
    num --;
});

plus.addEventListener("click", () => {
    input.innerText = num + 1;
    num++;
});
