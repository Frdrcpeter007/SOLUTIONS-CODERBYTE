/**
 * Cette fonction inverse complètement le sens de lecture d'une chaine (ex. hello => olleh)
 * @param  {string} str A string to be reversed
 * @return {string} Reversed str
 */
function firstReverse(str) {
    let reversedString = str
        .split('')
        .reverse()
        .join('');
    return reversedString;
}

module.exports = firstReverse;
