//Laços de Repetição
//Tipos de Laços de Repetição

//const leia =require("readline-sync");
//let nome1, nome2, nome3;
//nome1=leia.question("Digite o primeiro nome: ");
//console.log("O 1° nome é: " +nome1);
//
//nome2=leia.question("Digite o segundo nome: ");
//console.log("O 2° nome é: " +nome2);
//
//nome3=leia.question("Digite o terceiro nome: ");
//console.log("O 3° nome é: " +nome3);

const leia=require("readline-sync");

let nome;
let contador;

for(contador=1;contador<4;contador++){
    nome=leia.question("Digite um nome: ");
    console.log("O "+contador+"° nome digitador foi: "+nome);
}