var vida = document.getElementById('vida');
var ataque = document.getElementById('ataque');

var vidaDoInimigo = document.getElementById('vidaDoInimigo');
var aviso = document.getElementById('aviso')
var turno = true;

vida.value = 50;
vidaDoInimigo.value = 50;

ataque.addEventListener('click', function(){

    if(turno){

        var danoJogador = Math.floor(Math.random() * 20)  + 1;

        vidaDoInimigo.value -= danoJogador;

        aviso.innerHTML += `Você causou ${danoJogador} de dano ao inimigo. </br>`;

    }

    if(vidaDoInimigo.value <= 0){

        aviso.innerHTML = `O Jogador ganhou!`
    
        ataque.disabled = true;
    
    }

    turno = !turno;

    if(!turno && vida.value > 0 && vidaDoInimigo.value > 0){

        var danoInimigo = Math.floor(Math.random() * 15)  + 1;

        vida.value -= danoInimigo;

        aviso.innerHTML += `O inimigo causou ${danoInimigo} de dano a você. </br>`

        if(vida.value <= 0){

            aviso.innerHTML = `O inimigo ganhou!`
        
            ataque.disabled = true;
        
        }

    }

});