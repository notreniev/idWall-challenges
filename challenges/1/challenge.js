/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = arr.reduce((currentTotal, item) => {
    return currentTotal + item
}, 0)

module.exports = sumArguments