/**
 * Cette fonction calcule le factoriel d'un nombre
 * @param  {Number} num
 * @return {Number}
 */
function firstFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

module.exports = firstFactorial;
