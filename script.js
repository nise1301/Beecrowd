//Beecrowd 1181 em javascript
var matriz = []
var soma = 0.0
var indice = parseInt(lines.shift())
operacao = lines.shift()

for(let i = 0; i<12;i++){
    matriz[i] = []
    for(let j = 0; j<12;j++){
        matriz[i][j] = parseFloat(lines.shift())
        
    }
}

for(let i = 0; i<12;i++){
    for(let j = 0; j<12; j++){
        if(i==indice){
            soma += matriz[i][j]
        }
    }
}

if(operacao=='S'){
    console.log(soma.toFixed(1))
}

if(operacao=='M'){
    console.log((soma/12).toFixed(1))
}