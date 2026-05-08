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



// Generics With Interface

interface ApiResponse<Data>
{
  status: number;
  data: Data;
  message: string;
}

const userRes: ApiResponse<{ name: string }> = 
{
  status: 200,
  data: { name: "John" },
  message: "Success"
};

// console.log(userRes);



// Generics with Type

type ListWrapper<T> = 
{
  items: T[];
  count: number;
};

const productList: ListWrapper<{ id: number; price: number }> = 
{
  items: [{ id: 1, price: 99 }],
  count: 1
};


// console.log(productList);