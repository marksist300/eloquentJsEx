//Chapter 3 Functions Eloquent Javascript 3rd Edition

// Create a Minimum function like Math.min()
const min = (num1, num2) => num1<num2 ? num1 : num2;

//console.log(min(9, 123))

// our own modulo function using recursion
const isEven = num => {
 if (num <0) {
   return 'Number must be positive';
 } else if (num === 0) {
   return true;
 } else if (num === 1) {
   return false;
 } else return isEven(num -2)
}

// console.log(isEven(-1))


// Bean Counting: createa a function that counts letters in a string.

// const countsBs = str => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if(str[i] === 'B') count += 1; 
//   }
//   return count;
// }

//console.log(countsBs('BeaBBnsBB'))

//Write an additional function (countChar) that takes two arguments: 1st a string, 2nd any letter
// the function then counts the instances of the letter in the string

function countChar(str, char) {
  let charCount = 0;
  for (let i = 0; i<str.length; i++) {
    if(str[i] === char) charCount +=1;
  }
  return charCount;
}


//Use the countChar function to refactor the countsBs function.
const countsBs = str => {
  return countChar(str, 'B');
}

console.log(countsBs('BeansBB'))