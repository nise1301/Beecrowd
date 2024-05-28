//Beecrowd 1181 em javascript
/*
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

/*
//problema 1182 do Beecrowd

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
