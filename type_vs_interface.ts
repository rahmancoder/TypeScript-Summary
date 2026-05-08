// 1. Declaration Merging (Interface only)
interface Person { name: string; }
interface Person { age: number; }

const person: Person = { name: "Mustafiz", age: 27 }; // Works!

// 2. Unions (Type only)
type ObjResponse = { data: string } | { error: string };

// 3. Intersections
type User = { name: string };
type Employee = Person & { role: string }; // Similar to extends