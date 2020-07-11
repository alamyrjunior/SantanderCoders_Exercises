/*Condicional - Operadores lógicos - Banco
Será que posso ir ao banco?

Precisamos criar um código que ajude os usuários a saber se pode ir ao banco. 
Sabemos que o banco está aberto em todos os os dias da semana, exceto em  finais de semana. 
Caso o usuário possa ir ao banco você deve exibir com console.log a seguinte mensagem: 
“Você pode ir ao banco”, caso contrário, ‘O banco está fechado, tente outro dia’

Para esse exercício leve em consideração as seguintes informações:

- Dias da semana pro sistema: segunda, terca, quarta, quinta, sexta, sabado e domingo.
- Você terá a seguinte variável no código: diaSemana
- Para esse exercício você deve usar na condição do if o operador && para juntar as condições 
lógicas junto ao operador diferente de(!=).

Se você tiver problemas para resolver este exercício, pressione resetar codigo e tente novamente.*/

var diaSemana = 'segunda'
var feriado = false

if (diaSemana != 'sábado' && 'domingo' && feriado )
{
    console.log("O banco está fechado, tente outro dia")
}else
{
    console.log("Você pode ir ao banco")
}
