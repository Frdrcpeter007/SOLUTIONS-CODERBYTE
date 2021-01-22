/**
 * Cette fonction met la première lettre d'une chaine de caractère en majuscule
 * @param  {string} str
 * @return {string}
 */
function letterCapitalize(str) {
    let newString = '';
    for (let i = 0, newWord = true; i < str.length; i++) {
        if (newWord) {
            newString += str[i].toUpperCase();
        } else {
            newString += str[i];
        }

        newWord = str[i] === ' ' ? true : false;
    }

    return newString;
}

module.exports = letterCapitalize;
