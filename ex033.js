/*Funções Nativas - Maximo e Minimo
Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros 
e o segundo elemento é o maior dos parâmetros.*/
var arr = []

function maxmin(a, b, c, d, e){

    
  var min =Math.min(a, b, c, d, e)
  var max = Math.max(a, b, c , d, e)
arr.push(min)
arr.push(max)
}
