let vitorias = 40;
let derrotas = 0;

console.log("O Herói tem de saldo de " + saldoPartidas(vitorias, derrotas) + 
            " está no nível de " + nivel(vitorias));

function saldoPartidas(vitorias, derrotas) {
  return vitorias - derrotas;
}

function nivel(vitorias) {
    let valorNivel = vitorias;
    if (valorNivel < 10){
        return "Ferro";
    } else if (valorNivel >= 11 && valorNivel <= 20){
        return "Bronze";
    } else if (valorNivel >= 21 && valorNivel <= 50){
        return "Prata";
    } else if (valorNivel >= 51 && valorNivel <= 80){
        return "Ouro";
    } else if (valorNivel >= 81 && valorNivel <= 90){
        return "Diamante";
    } else if (valorNivel >= 91 && valorNivel <= 100){
        return "Lendário";
    } else {
        return "Imortal";
    }
}
