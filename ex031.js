/*Funções Nativas - transformaParaMaiusculo
 Algumas vezes precisamos padronizar as informações antes de guardá-las no nosso sistema. 
 Escreva uma função transformaParaMaiusculo(palavras). 
 Essa função recebe como parâmetro um array de palavras. 
 Ela deve retornar um array com a versão MAIÚSCULA de todas as palavras contidas no array 
 passado como parâmetro.*/

 var maiuscula = []

function transformaParaMaiusculo(palavras){
    for(i = 0; i < palavras.length; i++)
    {

 maiuscula.push(palavras[i].toUpperCase())

  }
  return maiuscula  
}
transformaParaMaiusculo(["gato","cachorro","tartaruga"])