var idade_compra = 72


if(idade_compra >= 35)
{
    console.log("Pode")
    console.log("Qual seu pedido")
}
else if(idade_compra >= 18)
{
    console.log("Pode")
    console.log("Mostre a identidade")
}
else
{
    console.log("Não Pode.")
    console.log("Volte Futuramente")
}
if (idade_compra >= 18  && idade_compra <= 70)
{
    console.log("Pode")
    console.log("Qual seu pedido")

}
else
{
    console.log("Não Pode.")
    console.log("Você não tem idade para a compra.")
}

var idade = 19;

idade >= 18 ? console.log("Já Pode"): console.log("Ainda Não Pode") //"?"Operador ternário

var pode = idade >= 18 ? true:false
console.log(pode)

//CONDICIONAL SWITCH-CASE

var nota1 = 1.0;
var nota2 = 6.0;

conceito = "";

var media = (nota1 + nota2) / 2;
if (media >= 9)
{
    conceito = "Ótimo";
}
else if (media >= 7)
{
    conceito = "Bom"
}
else if(media >= 5.5)
{
    conceito = "Regular"
}
else
{
    conceito = "Ruim"
}
console.log(conceito)

switch(conceito)
{
    case "Ótimo":
        console.log("Parabéns, Voce foi aprovado, ficou com média: "+ media);

        break;

    case "Bom":
        console.log("Voce foi aprovado, ficou com média: "+ media);
    
        break;

    case "Regular":
        console.log("Voce está em recuperação, ficou com média: "+ media);

        break;

    case "Ruim":
        console.log("Voce foi reprovado, ficou com média: "+ media);
    
        break;

    default:
        console.log("Erro")
        
        break;
}

//REPETIÇÂO - FOR e WHILE

var repete = 5;

for(var vez = 0; vez < repete; vez++)
{
    console.log("Executanto o laço FOR");
}
console.log("Acabou");

for( var num = 0; num < repete; num++)
{
    console.log("Executando o laço FOR:" + num + " vez.")
}

while(repete < 10)
{
    console.log("Número\n" + repete)
    repete++;
}
console.log(" ")
console.log("Acabou o primeiro While.")
console.log(" ")

console.log("Sorteando números aleatórios");
console.log(" ")
var numero = Math.random() * 100;

while(numero < 90)
{
    console.log(numero);
    numero = Math.random() * 100;
}
console.log(" ")
console.log("Acabou, o último número sorteado foi: \n" + numero);

