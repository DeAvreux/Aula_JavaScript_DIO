//var x: declara uma variavel com de nome x
//A atribuição é dinâmica, ou seja, o tipo da variável é determniado no momento de sua atribuição! 
var meuNome = 'Daniel de Abreu';
//meuNome é uma string
var minhaIdade = 21;
//minhaIdade é um número inteiro
var frase = 'Curitiba é a melhor cidade do Paraná!';
//frase é uma string


//alert('string' ou variavel de qualquer tipo): Cria uma alerta sobre a tela com o conteúdo!
//alert(`Bem vindo ao Site de ${meuNome}`);

//Console.log('string' ou variavel de qualquer tipo): Imprime o conteúdo no console do Browser(f12)!
//console.log(`Nome: ${meuNome} Idade: ${minhaIdade}`);
//console.log(frase.replace('Curitiba', 'Londrina'));
/* 
//Arrays:
var listaFrutas = ['Maçã', 'Pêra', 'Laranja'];
//listaFrutas é um array (ou vetor) de strings!
console.log(listaFrutas);
//comando push(): insere um valor ao final da string
//OBS: Perceba que é dinâmico não é necessário informar o tamanho do vetor e nem altera-lo depois
listaFrutas.push('uva');
//alert(listaFrutas);
console.log(listaFrutas);
//Comando pop(): remove o último valor do vetor e o retorna
var frutaOut = listaFrutas.pop();
console.log(`Fruta retirada: ${frutaOut}`);
//comando reverse(): Inverte a ordem do vetor permanentemente
console.log(listaFrutas.reverse());
console.log(listaFrutas);
//comando toString(): Converte um vetor ou uma variável em string
//no exemplo abaixo transformamos a posição zero do array em string e pegamos o seu primeiro caracter
console.log(listaFrutas[0].toString()[0]);
//comando join: tranforma o array em string e insere um "separador" de sua escolha
//nesse caso usaremos o traço( - )
console.log(listaFrutas.join(' - '));
//podemos inserir um caracter também
console.log(listaFrutas.join(' e '));

//dicionários:
//a variável se comporta como um objeto
/*
var frutaDic = {
    nome: 'Toranja',
    cor: 'Amarela'
}

console.log(frutaDic);
//podemos acessar os atributos separadamente também
console.log(frutaDic.nome);
*/
//Nos também podemos criar um array de objetos como vemos abaixo
/*
var listaFrutaDic = [
    {
        nome: 'Melancia',
        cor: 'verde'
    },
    {
        nome: 'Abacaxi',
        cor: 'amarela'
    },
    {
        nome: 'Morango',
        cor: 'vermelha'
    },
]
console.log(listaFrutaDic);
//E da mesma forma, acessa-los individualmente
console.log(listaFrutaDic[1]);
//E seus atributos também!
console.log(`A cor da fruta ${listaFrutaDic[1].nome} é ${listaFrutaDic[1].cor}`)
*/ 

//Condicionais
//Realizam "Testes" e executam comandos de acordo com as condições
/*
    A estrutura de um comando if (ou 'se'), else if (se não, se) e else (se não):
        if (condição) {
            *código executado caso a condição seja comprida*
            OBS: Um código pode ter vários IFs para testar várias condições ao mesmo tempo
            Ou um if por si só pode testar várias condições ao mesmo tempo
            Ainda mais levando em conta os operadores && : (e) e || : (ou).
        if else(condição) {
            *código executado caso a condição seja comprida*
            Ao contrário de um IF o IF ELSE só executa caso a condição seja suprida
            e nenhum outro IF ou IF ELSE seja ativado (pela satisfação de suas condições, claro)
            Diferente do ELSE (Visto abaixo) ele permite que se estabeleça uma condição.
        }
        } else {
            *código executado caso a nenhuma condição anterior seja suprida*
            E nem possui uma condição particular que não, a de nenhuma outra ser suprida.
            por isso else pode ser entendido como 'se não', 'caso contrário' e etc.
        }
        veja os exemplos abaixo

//Comando prompt(string ou outra variavel): Gera um alerta com campo de texto
//Faz uma pergunta ao usuário por assim dizer. E retorna a resposta (inserção do usuário)
var idade = prompt('Qual sua Idade?');
if (idade >= 18) {
    alert('Maior de Idade')
} else if (idade < 18) {
    alert('Menor de Idade')
} else {
    alert('Resposta Incondizente');
    // tente informa algo que não uma número ;D
}
*/
//Laços de repetição
/*
    São estruturas que permitem que um procedimento seja realizado várias vezes
    enquanto uma condição seja suprida. Essa condição pode ser o próprio numero de repetições
    Ou até mesmo uma condição mais específica, como encontrar uma valor determinado...
    while(condição) {
        *executa o código enquanto a condição seja suprida*
        OBS: O programa só é executado caso a condição seja suprida previamente!!
    }
    
    do{
        *similhar ao while comum, porem executa o código ao menos uma vez*
    } while(condição)

    for (var i = 0; i < X; i++) {
        *executa o código enquanto i for menor que X*
        OBS: a terceira base determina a taxa de incremento 'i++' ou seja +1 a cada repetição
    }

*/
/*
var count = 0;
while (count < 5) {
    console.log(count);
    count++;
}


for (var i = 1; i <=5; i++) {
    alert(i);
}
*/
//Data
/*
    Em JS existe o objeto data, ao declara-lo vc terá um objeto com a Data atual
    Porém você tambám pode acessar seus elementos invidualmente como veremos a seguir
*/
//var data = new Date();
//Observando o Objeto data:
//alert(data);
//Observando seus atributos individualmente
//alert(`Mes: ${data.getMonth() +1}\nDia: ${data.getDate()}\nHora: ${data.getHours()}\nMinutos: ${data.getMinutes()}`);
/*Em Js o os meses são representados por numeros a partir de 0 (zero) 
ou seja, janeiro = 0, para uma melhor visualização adicionamos 1 ao valor
Além desses vistos também é possivel ver os milisegundos, dia da semana (Dom = 0, Seg = 1...)
E muito mais!
*/
var x = 'oi';
var y = 'io';
//console.log( 1 + '1');

var lista = ['a', 'b', 'c'];
lista.push('g');
lista.pop('b');
console.log(lista);