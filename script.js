const cartas = ["bobrossparrot", "explodyparrot",
"fiestaparrot", "metalparrot", "revertitparrot", 
"tripletsparrot", "unicornparrot"];
let quantidade;
let acertos = 0;
let erros = 0;
qtdadeCartas();

const baralho = [];
let contadorBaralho = 0;

let primeiraCarta;
let segundaCarta;

while(contadorBaralho < quantidade/2){
    baralho.push(cartas[contadorBaralho]);
    baralho.push(cartas[contadorBaralho]);

    contadorBaralho++;
}

function comparador() { 
    return Math.random() - 0.5; 
}

function qtdadeCartas(){
    quantidade = Number(prompt("Insira a quantidade de cartas (4 a 14):"));

    while (quantidade % 2 === 1 || quantidade < 4 || quantidade > 14){ 
       quantidade = Number(prompt("Insira a quantidade de cartas (4 a 14):")); 
    } 
}

let contador = 0;
let divCarta = document.querySelector('.cartas');
baralho.sort(comparador); 

while (contador < quantidade){
    divCarta.innerHTML = `<div data-test="card" class="carta" onclick="virarCarta(this)">
        <div class="face front-face">
            <img data-test="face-down-image" src="imagens/back.png" />
        </div>
        <div class="face back-face">
            <img data-test="face-up-image" src="imagens/${baralho[contador]}.gif" />
        </div>
    </div>` + divCarta.innerHTML;

    contador++;
}

function redefineCarta(){
    primeiraCarta = undefined;
    segundaCarta = undefined;
}

function desvirarCarta(){
    primeiraCarta.classList.remove('virarCarta');
    segundaCarta.classList.remove('virarCarta');

    redefineCarta();
}

let contadorJogadas = 0;

function virarCarta(cartaSelecionada){

    contadorJogadas++;
    if (cartaSelecionada.classList.contains('virarCarta')){
        return;
    } if(primeiraCarta !== undefined && segundaCarta !== undefined) {
        return;
    }

    cartaSelecionada.classList.add('virarCarta');

    if(primeiraCarta === undefined){
        primeiraCarta = cartaSelecionada;
    } else {
        if(segundaCarta === undefined){
            segundaCarta = cartaSelecionada;
            if(primeiraCarta.innerHTML === segundaCarta.innerHTML){
                acertos++;
                console.log(acertos);
                redefineCarta();
                setTimeout(finalizarJogo, 300);
            } else {
                setTimeout(desvirarCarta, 1000);
            }
        }
    }
}

function finalizarJogo(){
    if(quantidade/2 === acertos){
        alert(`Você ganhou em ${contadorJogadas} jogadas! A duração do jogo foi de ${tempo} segundos!`)
        reiniciarJogo();
    }
}

let tempo = 0;

let cronometro = setInterval(function(){

    tempo ++
    
    document.getElementById('cronometro').innerHTML = tempo;
    if(quantidade/2 === acertos){
        clearInterval(cronometro);
    }

}, 1000)


function reiniciarJogo(){
    resposta = prompt("Gostaria de reiniciar a partida? (sim ou não)");  

    while (resposta !== 'não' && resposta !== 'sim'){ 
        resposta = prompt("Gostaria de reiniciar a partida? (sim ou não)"); 
     } 

    if (resposta === 'sim'){
        location.reload();
    } else if (resposta === 'não'){

    } 
}

