let array = ['A', 'L', 'A', 'S', 'K', 'A'];
array.splice(3, 2, 'B', 'A', 'M'); //call the 3rd index of array, from there delete 2 items, and repalce with the gievn alphabetd in .splice 
array.reverse();
console.log(array); //print everything in array
console.log(array.join('Then')); //print Then in between each string
console.log(array.lastIndexOf('A')); //print the last index of A

// Function to count the occurrences of a character in an array
function countOccurrences(array, char) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === char) {
      count++;
    }
  }
  return count;
}

// Call the function to count 'A's
const numA = countOccurrences(array, 'A');
console.log("Number of 'A's in the array:", numA);
console.log('Project by Shaun!');
