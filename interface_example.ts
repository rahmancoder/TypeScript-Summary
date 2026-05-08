interface Animal 
{
  name: string;
  age?: number; // Optional property
  readonly species: string; // Cannot be changed after initialization
}

interface Dog extends Animal 
{
  breed: string;
}

const myDog: Dog = 
{
  name: "tommy",
  species: "German Shepard",
  breed: "Golden Retriever"

};


console.log(myDog);

// Output

// {   name: 'tommy', 
//     species: 'German Shepard', 
//     breed: 'Golden Retriever' 
// }