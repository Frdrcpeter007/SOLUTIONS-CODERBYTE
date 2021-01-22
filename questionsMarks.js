/**
 * Demandez à la fonction QuestionsMarks ( str ) de prendre le paramètre de chaîne str , 
 * qui contiendra des nombres à un seul chiffre, des lettres et des points d'interrogation, 
 * et vérifiez s'il y a exactement 3 points d'interrogation entre chaque paire de deux nombres qui totalisent 10. 
 * Si c'est le cas, alors votre programme doit renvoyer la chaîne true , sinon il doit renvoyer la chaîne false . 
 * S'il n'y a pas deux nombres qui totalisent 10 dans la chaîne, votre programme doit également renvoyer false .
 * Par exemple: si str est "arrb6???4xxbl5???eee5" alors votre programme doit retourner true 
 * car il y a exactement 3 points d'interrogation entre 6 et 4, et 3 points d'interrogation entre 5 et 5 à la fin de la chaîne.
 * @param {String} str 
 */
function QuestionsMarks(str) {

	var spliceLetter = str.replace(new RegExp("[^(0-9)\?]", "g"), '').split('???').join(''),
		newRegex = spliceLetter.replace(new RegExp("[^(0-9)]", "g"), '').split(''),
		out = false;

	newRegex.sort((a, b) => {
		var a = parseInt(a),
			b = parseInt(b);

		if ((a + b) == 10) {
			out = true
		}
	})

	return out;

}