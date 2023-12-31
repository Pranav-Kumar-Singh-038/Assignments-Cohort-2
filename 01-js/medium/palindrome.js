/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its 
  result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are 
  considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str.toLowerCase().split("");
  let l=0;
  let r=s.length-1;
  while(l<r)
  {
    if(s[l].charCodeAt(0)<97 || s[l].charCodeAt(0)>122)
    {
      l++;
      continue;
    }
    if(s[r].charCodeAt(0)<97 || s[r].charCodeAt(0)>122)
    {
      r--;
      continue;
    }
    if(s[l]!=s[r])
    {
      console.log(s[l]," ",s[r]);
      return false;
    }
    l++;
    r--;
  }
  return true;
}
module.exports = isPalindrome;
