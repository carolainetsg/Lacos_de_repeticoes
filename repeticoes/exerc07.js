const leia=require("readline-sync");
let vet=new Array(9);
let encontrado;
let numpesq;

for (let indice=0; indice<=9; indice++){
    vet[indice]=leia.questionInt(`Digite uma posicao ${indice}: `);

}
console.log("\n--------PROXIMA ETAPA!-------------------\n");

numpesq=leia.questionInt("Digite um numero: ");
for (let indice=0; indice<=9; indice++){
    
    if(vet[indice]===numpesq){
        console.log(`O numero ${numpesq} foi encontrado na posicao ${indice}`);
        encontrado=true;
    }
}
if(!encontrado){
    console.log(`O numero ${numpesq} não foi encontrado!!`);
}

