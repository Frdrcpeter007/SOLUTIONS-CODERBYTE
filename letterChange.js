/**
 * Cette fonction teste si la chaine de caractère ne contient que des lettres
 * @param  {String}  str
 * @return {Boolean}
 */
function isAlpha(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.split('').every(char => alphabet.includes(char));
}