/**
 * Cette fonction permet de classe les lettres d'un mot passé en paramètre de la fonction du plus petit au plus grand selon l'alphabet français
 * @param {String} str La chaine de caractère
 */
function alphabetSoup(str) {
    let letters = str.split('');
  
    return letters.sort((a, b) => {
      if(a.charCodeAt(0) > b.charCodeAt(0)) return 1
      
      return -1;
      
    }).join('');
}


module.exports = alphabetSoup;