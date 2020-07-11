/*Programe uma função series que recebe dois parâmetros, um prefixo com o nome da série e 
um array com a lista de todos os episódios da série. A função deve retornar um novo array 
com a lista de episódios iniciando com o nome da série.
*/


function series(prefixo, array)
{
    var arr = []
  for(i = 0; i < array.length;i++){

  arr.push(prefixo +" "+ array[i])
  }
    return arr 
    
}

