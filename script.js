/*// 1181 Beecrowd

// Inicializa uma matriz vazia
var matriz = []

// Inicializa a variável soma com 0.0
var soma = 0.0

// Lê o índice da linha que será somada ou terá a média calculada
var indice = parseInt(lines.shift())

// Lê a operação a ser realizada: 'S' para soma e 'M' para média
operacao = lines.shift()

// Preenche a matriz com valores reais
for(let i = 0; i<12;i++){
    matriz[i] = []
    for(let j = 0; j<12;j++){
        matriz[i][j] = parseFloat(lines.shift())
        
    }
}

// Soma os elementos da linha especificada pelo índice
for(let i = 0; i<12;i++){
    for(let j = 0; j<12; j++){
        if(i==indice){
            soma += matriz[i][j]
        }
    }
}

// Se a operação for 'S', imprime a soma dos elementos da linha
if(operacao=='S'){
    console.log(soma.toFixed(1))
}

// Se a operação for 'M', imprime a média dos elementos da linha
if(operacao=='M'){
    console.log((soma/12).toFixed(1))
}*/

/*// 1182 Beecrowd

//inicializa matriz vazia
var matriz = []

//inicializa variavel soma
var soma = 0.0

//inicializa o indice que irá iterar sobre a coluna
var indice = parseInt(lines.shift())

//inicializa a operação a ser escolhida pelo usuario
var operacao = lines.shift()

//cria um laço for para criar os espaços dentro da matriz
//o primeiro laço cria os arrays dentro da matriz conforme cada indice i
for(let i= 0; i<12; i++){
    matriz[i] = []
    //o segundo for coloca números digitados pelo juiz online do Beecrowd em cada posição, conforme as iterações de linha i e coluna j
    for(let j = 0;j<12;j++){
        matriz [i][j] = parseFloat(lines.shift())
    }
}

//esse laço percorre a matriz criada acima, usando as iterações da linha i e da coluna j
for(let i = 0; i<12;i++){
    for( let j = 0; j<12; j++){
        //aqui temos uma decisão: se o indice da coluna j for igual ao indice digitado pelo juiz virtual
        //colocamos o valor de i e j na variavel soma e juntamos com os demais elementos já contidos lá
        if(j==indice){
            soma += matriz [i][j]
        }
    }
}
//se a operação digitada pelo juiz vitual for S de soma, deverá ser impresso o valor da soma no console
if(operacao=='S'){
    console.log(soma.toFixed(1))
}
//se a operação digitada pelo juiz vitual for M de média, deverá ser impresso o valor da média no console
if(operacao=='M'){
    console.log((soma/12).toFixed(1))
}*/

/*// 1183 Beecrowd

var matriz = []
var soma = 0.0
var contador = 0
var operacao = lines.shift()
// Inicia um loop que vai de 0 a 11 (inclusive).
// Cada valor de 'i' representa uma linha na matriz.
for( let i = 0; i<12 ;i++){
    //Inicializa a linha 'i' da matriz como um array vazio.
    matriz [i] = []
    //Inicia um segundo loop dentro do primeiro. 
    //Cada valor de 'j' representa uma coluna na matriz.
    for(let j =0 ;j<12; j++){
        //Pega o próximo valor de 'lines', converte para um número decimal
        // e atribui à posição [i][j] da matriz.
         matriz[i][j] = parseFloat(lines.shift())
         //Verifica se estamos em uma posição acima da diagonal principal da matriz
         // (ou seja, se a coluna 'j' é maior que a linha 'i').
         if(j>i){
            //Se estivermos acima da diagonal principal,
            // adiciona o valor na posição [i][j] à variável 'sum'.
            soma += matriz[i][j]
            //Também incrementa a variável 'count', que está contando
            // quantos números estão acima da diagonal principal.
            contador++
         }
    }
}
if(operacao=='S'){
    console.log(soma.toFixed(1))
}
if(operacao=='M'){
    //se a operação for média, precisamos dividir a soma pelo conjunto
    // dos números no contador, que acumulou os elementos acima
    // da diagonal principal
    console.log((soma/contador).toFixed(1))
}*/

/* //1184 Beecrowd

var matriz = []
var soma = 0.0
var contador = 0
var operacao = lines.shift()
// Inicia um loop que vai de 0 a 11 (inclusive).
// Cada valor de 'i' representa uma linha na matriz.
for( let i = 0; i<12 ;i++){
    //Inicializa a linha 'i' da matriz como um array vazio.
    matriz [i] = []
    //Inicia um segundo loop dentro do primeiro. 
    //Cada valor de 'j' representa uma coluna na matriz.
    for(let j =0 ;j<12; j++){
        //Pega o próximo valor de 'lines', converte para um número decimal
        // e atribui à posição [i][j] da matriz.
         matriz[i][j] = parseFloat(lines.shift())
         //Verifica se estamos em uma posição abaixo da diagonal principal da matriz
         // (ou seja, se a coluna 'j' é menor que a linha 'i').
         if(j<i){
            //Se estivermos acima da diagonal principal,
            // adiciona o valor na posição [i][j] à variável 'sum'.
            soma += matriz[i][j]
            //Também incrementa a variável 'count', que está contando
            // quantos números estão acima da diagonal principal.
            contador++
         }
    }
}
if(operacao=='S'){
    console.log(soma.toFixed(1))
}
if(operacao=='M'){
    //se a operação for média, precisamos dividir a soma pelo conjunto
    // dos números no contador, que acumulou os elementos acima
    // da diagonal principal
    console.log((soma/contador).toFixed(1))
}*/

/*// 1185 Beecrowd

//Aqui tem uma variavel para iniciar uma matriz vazia, para guardar a operação escolhida pelo juiz virtual
//outra para guardar a soma dos elementos da matriz e outra para inciar o contador que permitirá chegar a média
var matriz = []
var operation = lines.shift()
var soma = 0.0
var contador = 0

//o primeiro laço cria vários arrays dentro da matriz 12x12 
//o segundo laço vai preencher esses espaços colocando o valor escolhido pelo juiz vitual na linha i e coluna j respectiva a cada iteração do laço
for(let i = 0; i<12; i++){
    matriz[i] = []
    for(let j = 0; j<12; j++){
        matriz[i][j] = parseFloat(lines.shift())
        //se o indice da coluna j for menor que a ultima posição (0 a 11 são 12 posições) menos o indice da linha
        //significa que eu ainda tenho espaço antes de cehgar a diagonal secundária, então guardo os valores de i e j na matriz na variavel soma
        if(j<11-i){
            soma+=matriz[i][j]
            //sinalmente, incremento o contador, pois assim vou saber quantas vezes esse código foi repetido e logo por quanto eu preciso dividir  soma para chegar na média
            contador++
        }
    }
}
//No resto desse código, o juiz virtual escolhe se quer realizar uma soma ou tirar a média
if(operation=='S'){
    console.log(soma)
}
if(operation = 'M'){
    console.log((soma/contador).toFixed)
}*/

/*//1186 Beecrowd

var matriz = []
var soma = 0.0
var contador = 0
var operacao =lines.shift()

for(let i = 0; i<12; i++){
    matriz[i] = []
    for(let j = 0; j<12; j++){
        matriz[i][j] = parseFloat(lines.shift())
        if(j>11-i){
            soma+=matriz[i][j]
            contador++
        }
    }
}
if(operacao=='S'){
    console.log(soma)
}
if(operacao=='M'){
    console.log((soma/contador).toFixed)
}*/

/*//1187 Beecrowd

var matriz = []
var soma = 0.0
var contador= 0
var operacao= lines.shift()

for(let i = 0; i<12 ; i++){
    matriz[i]=[]
    for(let j = 0; j<12; j++){
        matriz[i][j]=parseFloat(lines.shift())
        if(j>i&&j<11-i){
            soma += matriz[i][j]
            contador++
        }
    }
}
if(operacao=='S'){
    console.log(soma)
}
if(operacao=='M'){
    console.log((soma/contador).toFixed(1))
}*/