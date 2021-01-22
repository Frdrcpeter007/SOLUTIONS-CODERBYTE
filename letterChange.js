/**
 * Cette fonction teste si la chaine de caractère ne contient que des lettres
 * @param  {String}  str
 * @return {Boolean}
 */
function isAlpha(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.split('').every(char => alphabet.includes(char));
}

/**
 * Cette fonction teste si la chaine ne contient pas de lettre miniscule
 * @param  {String}  str
 * @return {Boolean}
 */
function isUpperCase(str) {
    return str === str.toUpperCase();
}

/**
 * Cette fonction teste si la chaine ne contient pas de lettre en majuscule
 * @param  {String}  str
 * @return {Boolean}
 */
function isLowerCase(str) {
    return str === str.toLowerCase();
}

/**
 * Cette fonction permet de mettre en majuscule tous les voyelle d'une chaine de caractère
 * @param  {String} str
 * @return {String}
 */
function capitalizeVowels(str) {
    const vowels = 'aeiouy';

    const newString = str
        .split('')
        .map(char => (vowels.includes(char) ? char.toUpperCase() : char))
        .join('');

    return newString;
}