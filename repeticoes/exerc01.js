const leia=require("readline-sync");
let a, z, contador, numero,num1, num2, num3;
a=leia.questionInt("Digite o primeiro numero do intervalo: ");
z=leia.questionInt("Digite o ultimo numero do intervalo: ");
numero=leia.questionInt("Digite um numero: ");
num1=numero/3;
    num2=numero/5;
    console.log(`Resultado multiplo de 3 é ${num1} e o resultado multiplo de 5 é ${num2}`);
    if(a<=z){
        console.log("Intervalo válido!");
    for(contador=a; contador<=z;contador++){
    if( (contador%3==0) && (contador%5==0)){
        console.log(`O numero ${contador} é multiplo de 3 e 5!`);
    }
}
}
    else{
        console.log("Intervalo inválido!");
        
    }