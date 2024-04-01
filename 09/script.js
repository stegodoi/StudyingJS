let numberOne = prompt("Digite o primeiro número: ");
let numberTwo = prompt("Digite o segundo número: ");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = numberOne / numberTwo;
let restDiv = numberOne % numberTwo;

if(numberOne === numberTwo){
    alert("Os dois números são iguais!!")
} else {
    alert("Os dois números são diferentes!!")
}

alert('A soma dos dois números é: ' + sum);
alert('A subtração dos dois números é: ' + sub);
alert('A multiplicação dos dois números é: ' + mult);
alert('A divisão dos dois números é: ' + div);
alert('O resto da divisão dos dois números é: ' + restDiv);

if(sum / 2 == 0) {
    alert("A soma deste número é par!")
} else {
    alert("A soma deste número é impar!")
}

