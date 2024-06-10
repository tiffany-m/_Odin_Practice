function findMatch(input, length) {
  let match = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (input[i] === input[j]) {
        match++;
      }
    }
  }

  if(match >= Math.floor(length / 2)) {
    return true
  } else {
    return false
  }
}

function permuteAPalindrome(input) {
  let length = input.length;

  switch (length) {
    case 0:
      return true;
      break;
    case 1:
      return true;
      break;
    case 2:
      if (input[0] === input[1]) {
        return true;
      } else {
        return false;
      }
      break;
    case 3:
      if (input[0] === input[1] || input[0] === input[2]) {
        return true;
      } else if (input[1] === input[2]) {
        return true;
      } else {
        return false;
      }
      break;
    default:
      return findMatch(input, length);
  }
}

console.log(permuteAPalindrome("a"), true);
console.log(permuteAPalindrome("aa"), true);
console.log(permuteAPalindrome("aaa"), true);
console.log(permuteAPalindrome("baa"), true);
console.log(permuteAPalindrome("aab"), true);
console.log(permuteAPalindrome("baabcd"), false);
console.log(permuteAPalindrome("racecars"), false);
console.log(permuteAPalindrome("abcdefghba"), false);
console.log(permuteAPalindrome(""), true);
