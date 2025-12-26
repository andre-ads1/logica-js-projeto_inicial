alert ("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 5;
 console.log("Número secreto é: " + numeroSecreto);
let chute =prompt("Digite um número entre 0 e 100:");

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert("Você acertou! Parabéns!");
} else {
    alert("Você errou! Tente novamente!");
}