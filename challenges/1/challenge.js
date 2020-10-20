/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */
const sumArguments = (...arr) => arr.reduce((currentTotal, item) => {
    return currentTotal + item
})

module.exports = sumArguments