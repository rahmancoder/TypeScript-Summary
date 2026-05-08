// Basic Type Alias
type UserID = string | number;

// Object Type
type Point = 
{
  x: number;
  y: number;
};

// Union Type
type Status = "pending" | "approved" | "rejected";

const myId: UserID = 101;
const myPoint: Point = { x: 10, y: 20 };