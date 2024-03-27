function capitalize(string) {
  let capitalChar = string.slice(0, 1).toUpperCase();
  let restOfString = string.slice(1);
  return capitalChar + restOfString;
}

function reverseString(string) {
  let newString = string.split("").reverse().join("");
  return newString;
}

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2
};

// function currently adds shift factor to character code and directly converts it back without considering if it goes beyond alphabet's range
// function caesarCipher(shiftFactor, string) {
//    let currArr = string.split("");
//    let newArr = []
//    let char = 0;
//    let newChar = ""
//    let shiftedArr = []
//    let codedString = ""
//    for(let i = 0; i < currArr.length; i++) {
//       char = string.charCodeAt(i)
//       char += shiftFactor
//       newArr.push(char)
//    }

//    for(let i = 0; i < newArr.length; i++) {
//     char = newArr[i]
//     newChar = String.fromCharCode(char)
//     shiftedArr.push(newChar)
//    }

//    codedString = shiftedArr.join("")

//    return codedString
// }

function caesarCipher(shiftFactor, string) {
  let codedString = "";

  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);

    // Check if the character is uppercase
    if (char >= 65 && char <= 90) {
      char = ((char - 65 + shiftFactor) % 26) + 65;
    }
    // Check if the character is lowercase
    else if (char >= 97 && char <= 122) {
      char = ((char - 97 + shiftFactor) % 26) + 97;
    }
    // For non-alphabetical characters, char remains unchanged
    codedString += String.fromCharCode(char);
  }

  return codedString;
}

function analyzeArray(arr) {
  let object = { average: 0, min: 0, max: 0, length: 0 };

  (object.average = arr.reduce((sum, num) => sum + num, 0) / arr.length), (object.min = Math.min(...arr));
  object.max = Math.max(...arr);
  object.length = arr.length;

  return object;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
