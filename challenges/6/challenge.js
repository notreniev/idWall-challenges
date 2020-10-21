/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const htmlTemplate = `<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>`
// const htmlTemplate = `<div style="height: 20px; width: 60px;">`
// const htmlTemplate = `
// <div style="width: 442px;">
//   <span style="height: 911px;"></span>
//   <span style="height: 121px;"></span>
// </div>
// `

const extractSize = htmlTemplate => {

    if (!htmlTemplate) return {
        width: 0,
        height: 0
    }

    const matches = htmlTemplate.match(/\bstyle=(['"])(.*?)\1/gi);
    var styles = [];
    for (var i = 0; i < matches.length; i++) {
        let str = matches[i].substring(7, matches[i].length - 1)
        //console.log('undefined?', str !== 1 ? str : str)
        styles.push(str !== 1 ? str : undefined);
    }

    // console.log(styles)

    const results = styles.filter((s, i) => {
        if (styles[i].startsWith('width') || styles[i].startsWith('height')) {
            //console.log(styles[i])
            return styles
        }
    })

    //console.log(results)


    let atributos = results[0].split(";")
    let prop1 = `"${atributos[0].split(":")[0].trim()}"`
    let val1 = `${parseInt(atributos[0].split(":")[1])}`

    let prop2 = `"${atributos[1].split(":")[0].trim()}"`
    let val2 = `${parseInt(atributos[1].split(":")[1])}`

    const retorno = JSON.parse(`{${prop1}: ${val1},${prop2}: ${val2}}`)

    console.log(retorno)

    return retorno
}

extractSize(htmlTemplate)

module.exports = extractSize