let inputA = parseInt(prompt("Nhập vào số A: "));
let inputB = parseInt(prompt("Nhập vào số B: "));
function result() {
  if (inputA % inputB === 0) {
    alert("A chia hết cho B");
  } else {
    alert("A không chia hết cho B");
  }
}
result();
