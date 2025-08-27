//Inserindo dados no vetor vazio

const leia=require("readline-sync");

let vetorinteiros=new Array(5);
for(let indice=0; indice<=5; indice++){
    vetorinteiros[indice]=leia.questionInt(`Digite o numero ${indice+1}:`);

}
console.log("\nOs numeros digitados foram: \n");

for(let indice=0; indice<=5; indice++){
    console.log(`${indice+1}° numero: ${vetorinteiros[indice]}`);

}
