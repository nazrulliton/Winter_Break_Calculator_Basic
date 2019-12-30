

function minus1 () {
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  c = num1-num2;
  document.getElementById('ans').value = c;
}

function times1 () {
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  c = num1*num2;
  document.getElementById('ans').value = c;
}
function divide1 () {
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  c = num1/num2;
  document.getElementById('ans').value = c;
}

function addition1() {
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  c= eval(num1) + eval(num2);
    document.getElementById('ans').value = c;
}
