export function isPalindrome(word) {
  const wordOriginal = word;

  const wordSimplified = word
    .toLowerCase()
    .replace(/[\W]/g, '');

  const wordSimplefiedReversed = wordSimplified
    .split('')
    .reverse()
    .join('');

  const isPalindrome = wordSimplified === wordSimplefiedReversed;

  if (isPalindrome) {
    console.log(`"${wordOriginal}" is a palindome.`);
  }
  else {
    console.log(`"${wordOriginal}" is not a palindome.`);
  }

  return isPalindrome;
}
