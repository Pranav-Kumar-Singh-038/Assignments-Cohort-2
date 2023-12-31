/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.lenght != str2.lenght) {
    return false;
  }
  stch1 = str1.toLowerCase().split("");
  stch2 = str2.toLowerCase().split("");
  stch1.sort();
  stch2.sort();
  for (let i = 0; i < stch1.length; i++) {
   if(stch1[i]!=stch2[i])
   {
     return false;
   }
  }
  return true;
}

module.exports = isAnagram;
//palindrome calculator todolist anagram