//array solution
//time complexity is o(n) with n being the number of letters in the given string
//space complexity is o(1) due to the alphabet being only 26 characters, could potentially be o(m) if the alphabet is larger than the normal english one

function ceaserEncryption(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (const letter in string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join("");
}

function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return newLetterCode <= 25
    ? alphabet[newLetterCode]
    : alphabet[-1 + (newLetterCode % 25)];
}

//add character code solution later
