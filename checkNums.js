/**
 * Une fonction qui teste si le deuxième nombre passé en paramètre est plus grand que le premier
 * @param  {Number} num1
 * @param  {Number} num2
 * @return {String}
 */
function checkNums(num1, num2) {
    if (num2 > num1) {
        return 'true';
    } else if (num1 === num2) {
        return '-1';
    } else {
        return 'false';
    }
}

module.exports = checkNums;
