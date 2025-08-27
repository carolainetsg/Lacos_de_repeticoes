// Laço de repetição FOR - Tabuada

const leia=require("readline-sync");
let numero, contador;

numero=leia.questionInt("Calcule a Tabuada do: ");

for(contador=1; contador<=10; contador++){
    console.log(numero+" X "+contador+ " = "+numero*contador);
    
}