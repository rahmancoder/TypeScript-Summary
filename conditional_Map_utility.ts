type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"

// Practical usage: Extracting types
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

const sayHi = () => "Hi!";
type HiReturn = GetReturnType<typeof sayHi>; // string



// Map Example


// 1. ES6 Map Object with TS
const userMap = new Map<number, string>();

userMap.set(1, "Alice");

// 2. Record Type (Utility for Map-like objects)
type RolePermissions = Record<"admin" | "editor", string[]>;

const permissions: RolePermissions = {
  admin: ["create", "delete"],
  editor: ["edit"]
};



// Utility Example


interface Task 
{
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// 1. Partial: Makes all properties optional
const update: Partial<Task> = { completed: true };

// 2. Pick: Select specific properties
type TaskHeader = Pick<Task, "id" | "title">;

// 3. Omit: Remove specific properties
type TaskBody = Omit<Task, "id">;

// 4. Readonly: Prevent modification
const fixedTask: Readonly<Task> = 
{ 
    id: 1, title: "Learn TS", description: "...", completed: false 
};
// fixedTask.id = 2; // Error