// Escreva uma função que receba uma palavra como primeiro argumento, um comprimento máximo como segundo argumento e trunca a palavra se ela for maior que o comprimento máximo.
// o valor default do comprimento máximo deve ser 5:
// (teste, 10) -> teste
// (fulano, 4) -> fula...
function truncar(palavra, comprimentoMax = 5) {
    if (palavra.length > comprimentoMax) {
        return `${palavra.slice(0, comprimentoMax)}...`;
    }
    return `${palavra}`;
}
const palavra = 'fulano';
const comprimentoMax = 4;
const truncarPalavra = truncar(palavra, comprimentoMax);
console.log(truncarPalavra);
// Escreva uma função que valida se o texto informado está preenchido e retorna o texto sem espaços antes ou depois.
// "" -> undefined
// "   " -> undefined
// "      Maria " -> "Maria"
function validaTextoPreenchido(texto) {
    if (texto.trim().length === 0){
        return undefined;
    }
    return texto.trim();
}
const texto = 'Maria'
console.log(texto.length);
const validaTexto = validaTextoPreenchido(texto);
console.log(validaTexto);