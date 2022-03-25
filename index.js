function isPalindrome(word) { 
  let lowRegWord = word.toLowerCase()
  let reverseWord = lowRegWord.split('').reverse().join(''); 
  return reverseWord === lowRegWord;
}
    
  // Write your algorithm here


/* 
  Add your pseudocode here
*/// input is word
// output is true or false based on if palindrome
/*
  Add written explanation of your solution here
*/// make the input all lower case, split the characters in each string using .split then reverse it and put it back into a string using join

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
