const cartas = ["bobrossparrot", "explodyparrot",
"fiestaparrot", "metalparrot", "revertitparrot", 
"tripletsparrot", "unicornparrot"];
let quantidade;
qtdadeCartas();

const baralho = [];
let contadorBaralho = 0;

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
        <img data-test="face-down-image" class="atras" src="imagens/back.png" />
        <img data-test="face-up-image" class="frente" src="imagens/${baralho[contador]}.gif" />
    </div>` + divCarta.innerHTML;

    contador++;
}

let tempo = 0;

let cronometro = setInterval(function(){

    tempo += 1
    
    document.getElementById('cronometro').innerHTML = tempo

}, 1000)

