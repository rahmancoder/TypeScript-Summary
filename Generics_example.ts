function wrapInArray<T>(value: T): T[] 
{
  return [value];
}

const stringArr = wrapInArray("Hello"); // T is string
const numberArr = wrapInArray(123);     // T is number

console.log(stringArr);
console.log(numberArr);

// Output

// [ 'Hello' ]
// [ 123 ]



// Generics With Functions

function getLength<T extends { length: number }>(item: T): number 
{
  return item.length;
}

getLength("Hello");   // Works (string has length)
getLength([1, 2, 3]); // Works (array has length)

// getLength(10); // Error: number doesn't have length