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



// rest operator
function totalCart(...prices: number[]): number {
  return prices.reduce((sum, p) => sum + p, 250);
}

// spread
const newProducts = [...baseProducts, "mustard oil"];

//console.log(newProducts);

// destructuring

const buyer: { CustomerName: string; address: string; contactNumber: number } =
{
  CustomerName: "Rahman",
  address: "Dhaka",
  contactNumber: 1873334569,
};

const { CustomerName, contactNumber } = buyer;

// console.log(CustomerName, contactNumber);


// Ternary, Nullish, Optional chaining
const stock = 0;
// ternary
const PrdctStatus = stock > 0 ? "available" : "out of stock";

// nullish
const discountPrice = products.discount ?? 0;

//optional chaining
const sellerName = products?.name;