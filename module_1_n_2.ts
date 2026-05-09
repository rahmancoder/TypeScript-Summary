// javaScript is a dynamically typed language.
// let a  = 5;
// a = "Mustafiz"

// primitive variables in  TS
let shopName: string = "Mustafiz Store";
let totalProducts: number = 50;
let isOpen: boolean = true;
let rating: null = null;
let discount: undefined = undefined;


// non-primitive
let baseProducts: string[] = ["Ghee", "Egg", "Salt"];

// let prices: number[] = [60,150,40]

const products: {
  name: string;
  price: number;
  category: "grocery" | "electronics";
  discount?: number;
} = {
  name: "Rice",
  price: 60,
  category: "grocery",
};

// void
// function voidfunc(): void{
//     console.log("this is void")
// }

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

// console.log(calculateTotal(50, 5)); // 250
