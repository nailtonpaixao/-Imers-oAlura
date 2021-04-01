var alcool = prompt ("Qual o valor do álcool ?")
alcool = parseFloat (alcool)

var gasolina = prompt ("Qual o valor da gasolina ?")
gasolina = parseFloat (gasolina)

var result = alcool/gasolina

if (result < 0.7)  {
alert("Abasteça com álcool")
  
} else if (result > 0,7) {
alert("Abasteça com Gasolina")
}

//*REVISÃO*
//Variáveis = var - int - float - string
// alert - parseInt parseFloat
//Operações = somar, dividir, multiplicar, subtrair
//comentario final
