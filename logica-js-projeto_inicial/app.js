alert ("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 5;
 console.log("Número secreto é: " + numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt("Digite um número entre 0 e 10:");
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Você acertou! Parabéns, Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
        } else {
        alert(`O número secreto é maior que ${chute}`);
        }
        tentativas = tentativas + 1;
        tentativas++;
    }
}
