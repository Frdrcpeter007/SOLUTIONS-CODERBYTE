/**
 * Cette fonction permet de dire dans une phrase quel est le plus long mot
 * @param {String} sen
 */
function longestWord(sen) { 

    // code goes here  
    var splitSen = sen.split(' ');
  
    return splitSen.sort((a, b) => {
      if (a.length > b.length) return -1
  
      return 1
    })[0]
  
  }

module.exports = longestWord;
