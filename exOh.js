/**
 * Cette fonction permet de définir si dans une chaine de caractère (ex. xoooxoxxxooxo)
 * la lettre x et o sont repris à part égales
 * @param  {string} str
 * @return {string}
 */
function exOh(str) {
    let xCount = 0;
    let oCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            xCount++;
        }
        if (str[i] === 'o') {
            oCount++;
        }
    }

    return xCount === oCount ? 'true' : 'false';
}

module.exports = exOh;
