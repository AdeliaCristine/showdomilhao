var name = prompt("Qual o seu nome?");
document.getElementById('ola').innerHTML= "Olá, " + name + "!";
var jogo = prompt("Olá " + name + "! Você deseja jogar? \nColoque o número da sua resposta \n1. Sim \n2.Não" );

if (jogo==1 ) { 
    var perg1 = prompt ("Qual o nome da namorada do Mickey? \n Escolha o numero da sua resposta. \n 1. Pateta \n 2.Minnie \n 3.Margarida");
    var perg2 = prompt ("Quem era o dono do cofre de moedas de ouro? \n Escolha o numero da sua resposta. \n 1. Tio Patinha \n 2.Pluto \n 3.Huguinho");
    var perg3 = prompt ("Quem tem medo de água? \n Escolha o numero da sua resposta. \n 1. Monica \n 2.Anjinho \n 3.Cascão");
    
    if (perg1 == 2){
        document.getElementById('r1').innerHTML= "Resposta 1"
    } else {
        document.getElementById('e1').innerHTML= "Resposta 1";
    } 
    if (perg2 == 1){
        document.getElementById('r2').innerHTML= "Resposta 2"
    } else {
        document.getElementById('e2').innerHTML= "Resposta 2";
    } 
    if (perg3 == 3){
        document.getElementById('r3').innerHTML= "Resposta 3"
    } else {
        document.getElementById('e3').innerHTML= "Resposta 3";
    } 

} else {
    document.getElementById('bye').innerHTML= "Até logo " + name + "!";
}




