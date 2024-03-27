function capitalize(string) {
  let capitalChar = string.slice(0, 1).toUpperCase()
  let restOfString = string.slice(1)
  
  return capitalChar + restOfString;
  
}

function reverseString(string) {
  let newString = string.split("").reverse().join("")

  return newString
}

const calculator = {
  add(num1, num2) {
    return num1 + num2
  }
}; 




export { capitalize, reverseString, calculator };
