function fibonacciSequence(n) {
    // Inicializa a sequência com os dois primeiros números
    let fibSequence = [0, 1];
    
    // Gera a sequência até que o último valor seja maior ou igual ao número informado
    while (fibSequence[fibSequence.length - 1] < n) {
        const nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextValue);
    }
    
    return fibSequence;
}

function checkFibonacci(num) {
    const sequence = fibonacciSequence(num);
    
    if (sequence.includes(num)) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de número a ser verificado.
const numero = 21;  // Você pode substituir por um valor de entrada
const resultado = checkFibonacci(numero);
console.log(resultado);