// Exercises https://www.youtube.com/watch?v=JeR_oHRtNGY
// Warmup ---------------------------------------------------------------------------------------
// FIZZBUZZ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function fizzbuzz(startNum, endNum) {
  if (startNum > endNum) return;

  if (startNum % 3 === 0 && startNum % 5 === 0) {
    console.log("FizzBuzz");
  } else if (startNum % 3 === 0) {
    console.log("Fizz");
  } else if (startNum % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(`${startNum}`);
  }

  fizzbuzz(startNum + 1, endNum);
}

// fizzbuzz(1, 15)

// Exercise 1 --------------------------------------------------------------------------------------

function palindrome(str) {
  let length = str.length;

  if (length === 0 || length === 1) return true;
  if (length === 2 && str.charAt(0) === str.charAt(1)) return true;
  if (length === 2) {
    if (str[0] === str[1]) return true;
    return false;
  }
  if (str.charAt(0) != str.charAt(length - 1)) return false;

  // let newString = str.slice(1, 0);
  // let finalString = newString.slice(0, -1)

  // return palindrome(finalString)

  return palindrome(str.substring(1, length - 1));
}

console.log("Exercise 1", palindrome("racecar"));
console.log("Exercise 1", palindrome("hfdhfkjs"));

// Exercise 2 ---------------------------------------------------------------------------------------------------
function flatten(arr) {
  let newArr = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      const secondaryArr = flatten(element);

      for (const innerElement of secondaryArr) {
        newArr.push(innerElement);
      }
    } else {
      newArr.push(element);
    }
  }

  return newArr;
}

console.log("Exercise 2", flatten([1, 2, 3, [1, 2, 3], 4, 5]));

// Exercise 3 -----------------------------------------------------------------------------------------------------
function flattenObj(obj) {
  let newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      const secondaryObj = flattenObj(value);
      newObj = { ...newObj, ...secondaryObj };
      return newObj;
    } else {
      newObj[key] = value;
    }
  }

  return newObj;
}

console.log(
  "Exercise 3",
  flattenObj({
    id: 1,
    name: "bob",
    happy: true,
    friend: {
      id2: 2,
      name2: "alice",
      happy2: true,
    },
  })
);

// Bonus Exercise --------------------------------------------------------------------------------------
function constructDOM(node) {
  if(node.innerText) return node.innerText

  let html = ""

  for (const childNode of node.childNodes) {
    html += `<${childNode.nodeName}>`
    html += constructDOM(childNode)
    html += `</${childNode.nodeName}>`;

  }

  return html
}

const doc = {
  childNodes: [
    {
      nodeName: "html",
      childNodes: [
        {
          nodeName: "head",
          childNodes: [
            {
              nodeName: "script",
              innerText: "console.log('hi');",
            },
          ],
        },
        {
          nodeName: "body",
          childNodes: [
            {
              nodeName: "ul",
              childNodes: [
                {
                  nodeName: "li",
                  childNodes: [
                    {
                      nodeName: "b",
                      innerText: "Home",
                    },
                  ],
                },
                {
                  nodeName: "li",
                  innerText: "Blog",
                },
                {
                  nodeName: "li",
                  innerText: "About",
                },
              ],
            },
            {
              nodeName: "div",
              childNodes: [
                {
                  nodeName: "h1",
                  innerText: "My Blog",
                },
                {
                  nodeName: "p",
                  innerText: "Welcome to my blog!",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

console.log("Bonus Exercise", constructDOM(doc));