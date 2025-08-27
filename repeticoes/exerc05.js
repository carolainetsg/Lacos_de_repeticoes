const leia=require("readline-sync");
let numero, contador=0;

do{
    numero=leia.questionInt("Digite um numero: ");
    if(numero>0){
        contador+=numero;
    }
}while(numero!==0);
console.log(`A soma dos numeros positivos é: ${contador}`);
