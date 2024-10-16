function countLetterA(str) {
    // Converte a string para minúsculas e conta quantas vezes 'a' aparece
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }

    if (count > 0) {
        return `A letra 'a' aparece ${count} vezes na string.`;
    } else {
        return `A letra 'a' não aparece na string.`;
    }
}

// String previamente definida.
const string = "JavaScript é uma linguagem fantástica para aprender!";

const resultado = countLetterA(string);
console.log(resultado);
