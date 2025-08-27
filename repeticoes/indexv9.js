//exemplo do reverse.
//reverse (array) Inverte a ordenação dos elementos de um array.

let array_nomes=["Samantha", "Amanda", "Vinícius", "Caue", "Leonardo"];
array_nomes.reverse();

console.log("\nArray em Ordem Decrescente \n");
for(let indice=0; indice<array_nomes.length; indice++){
    console.log(array_nomes[indice]);
}