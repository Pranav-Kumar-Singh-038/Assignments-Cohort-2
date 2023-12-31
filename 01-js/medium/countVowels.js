/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let s=str.split("");
  let count=0;
  for(let i=0;i<s.length;i++)
  {
    if(s[i]=='a' ||s[i]=='e' ||s[i]=='i' ||s[i]=='o' ||s[i]=='u' ||
    s[i]=='A' ||s[i]=='E' ||s[i]=='I' ||s[i]=='O' ||s[i]=='U')
    {
         count++;
    }
  }
  return count;
}

let ans=countVowels("Rish");
console.log(ans);
module.exports = countVowels;