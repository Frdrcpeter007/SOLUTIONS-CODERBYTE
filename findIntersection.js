/**
 * Doit renvoyer l'intersection entre les deux élement du tableau
 * @param {Array} strArr Le tableau eg. ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
 */

function findIntersection(strArr) {

	var firstArray = strArr[0].split(', '),
		secondArray = strArr[1].split(', '),
		out = [];

	for (let i = 0; i < firstArray.length; i++) {
		if (secondArray.includes(parseInt(firstArray[i]).toString())) {
			out.push(firstArray[i])
		}
	}

	return out.length > 0 ? out.join(',') : false;

}

module.export = findIntersection;