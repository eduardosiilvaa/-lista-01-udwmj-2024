// Importa o módulo readline para interagir com o usuário no terminal
const readline = require('readline');

// Função para verificar se um número é primo
function ehPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Função para calcular a soma dos números primos até um dado número
function somaPrimos(ate) {
    let soma = 0;
    for (let i = 2; i <= ate; i++) {
        if (ehPrimo(i)) {
            soma += i;
        }
    }
    return soma;
}

// Configuração do readline para entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita um número ao usuário
rl.question("Digite um número para calcular a soma dos primos até ele: ", function(numero) {
    numero = parseInt(numero);
    if (!isNaN(numero) && numero > 0) {
        const resultado = somaPrimos(numero);
        console.log(`A soma dos números primos até ${numero} é ${resultado}.`);
    } else {
        console.log("Por favor, insira um número válido.");
    }
    rl.close(); // Fecha o readline após a interação
});
