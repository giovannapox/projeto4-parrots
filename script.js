qtdadeCartas();
let quantidadeCartas;
const cartas = [];

function qtdadeCartas(){
    let quantidade = Number(prompt("Insira a quantidade de cartas (4 a 14):"));

    while (quantidade % 2 === 1 || quantidade < 4 || quantidade > 14){ 
       quantidade = Number(prompt("Insira a quantidade de cartas (4 a 14):")); 
    } 
    
    quantidadeCartas.push(quantidade);
}

/*inserir as cartas viradas pra baixo na página de forma que a distribuição 
seja aleatória.*/
