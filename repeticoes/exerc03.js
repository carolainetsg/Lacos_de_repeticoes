const leia=require("readline-sync");
let menor=0;
let maior=0;
let idade;
let continua=true;

while(continua){
    idade=leia.questionInt("Digite a sua idade: ");

    if(idade>=0 && idade<=21.0){
        menor++;
        console.log(`Menores de 21 anos: ${menor}`);
    }
    else if(idade>=50){
        maior++;
        console.log(`Menores de 50 anos: ${maior}`);
    }
    else if(idade>=22.0 && idade<=49){
            console.log("IDADES INTERMEDIARIAS!!");
        }
    else{
        console.log("Sessão Finalizada!!");
        continua=leia.keyInYNStrict("Deseja continuar? ")
        console.log("++++++++++++++++++++++++++++++++++++++++");
    }
    
}


