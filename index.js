// Calculadora de Partidas Rankeadas

function saldoRankeadas(quantVitorias, quantDerrotas){
    return quantVitorias - quantDerrotas
}
let saldoFinal = saldoRankeadas(67, 11)

let nivel = ""

if(saldoFinal <= 10){
    nivel = "Ferro"
}
else if(saldoFinal >= 11 && saldoFinal <= 20){
    nivel = "Bronze"
}
else if(saldoFinal >= 21 && saldoFinal <= 50){
    nivel = "Prata"
}
else if(saldoFinal >= 51 && saldoFinal <= 80){
    nivel = "Ouro"
}
else if(saldoFinal >= 81 && saldoFinal <= 90){
    nivel = "Diamante"
}
else if(saldoFinal >= 91 && saldoFinal <= 100){
    nivel = "Lendário"
}
else{
    nivel = "Imortal"
}

console.log(`O Herói tem saldo de ${saldoFinal} e está no nível ${nivel}!`)