let numberOne = Number(prompt('Olá, digite um número!'))
let numberTwo = Number(prompt('Agora digite outro número!'))
alert(`A soma dos números ${numberOne} e ${numberTwo} é igual a ${numberOne + numberTwo}`)
alert(`A subtração dos números ${numberOne} e ${numberTwo} é igual a ${numberOne - numberTwo}`)
alert(`A multiplicação dos números ${numberOne} e ${numberTwo} é igual a ${numberOne * numberTwo}`)
alert(`A divisão dos números ${numberOne} e ${numberTwo} é igual a ${numberOne / numberTwo}`)
alert(`O resto da divisão dos números ${numberOne} e ${numberTwo} é igual a ${numberOne % numberTwo}`)
let sum = numberOne + numberTwo
if (sum % 2 == 0) {
  alert(`O resultado da soma dos números (${sum}) é PAR`)
} else {
  alert(`O resultado da soma dos números (${sum}) é ÍMPAR`)
}
if (numberOne == numberTwo) {
  alert(`Os números inseridos por você (${numberOne} e ${numberTwo}) são iguais!!`)
} else {
  alert(`Os números inseridos por você (${numberOne} e ${numberTwo}) são diferentes!!`)
}

alert('FIM :D')