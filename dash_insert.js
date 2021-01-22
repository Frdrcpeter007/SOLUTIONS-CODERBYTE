/**
 * Cette insère une - entre deux nombre impair dans une chaine
 * @param  {String} str
 * @return {String}
 */
function dashInsert(str) {
    let newString = str[0] || '';

    for (let i = 1, lastNumberIsOdd = str[0] % 2 === 1; i < str.length; i++) {
        const numberIsOdd = str[i] % 2 === 1;

        newString += numberIsOdd && lastNumberIsOdd ? '-' + str[i] : str[i];

        lastNumberIsOdd = numberIsOdd;
    }
    return newString;
}

module.exports = dashInsert;