//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

function getCount(input) {
  let vowelsCount = 0;
  let inputLetters = input.split("");
  
  const vowels = ["a","e","i","o","u"];
  
  vowels.forEach(function(vowel) {
    inputLetters.forEach(function(inpLetter) {
      if (inpLetter === vowel) {
        vowelsCount++;
      }
    });
  });
  
  return vowelsCount;
}
