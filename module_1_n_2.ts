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



// Type in TS

type TProduct = {
  productName: string;
  price: number;
  address: {
    thana: "kafrul";
    zipcode: number;
  };
};

const item: TProduct = {
  productName: "Water Bottle",
  price: 30,
  address: {
    thana: "kafrul", // mill thakte hobe
    zipcode: 6000,
  },
};

type TPaymentMethod = "bkash" | "rocket" | "nagad" | "mcash";

let payment: TPaymentMethod = "bkash";

type TUser = {
  name: string;
};

type TSeller = TUser & {
  shopName: string;
};

const SellerName: TSeller = {
  name: "Rahman",
  shopName: "Rahman EntirePrise",
};


// Handling Unknown using type narrowing

let userInput: unknown;

function processInput(input: unknown) {
  // (userInput as string).toUpperCase();
  if (typeof input === "string") {
    input.toUpperCase();
  }
}

function throwError(msg: string): never {
  throw new Error(msg);
}

// api response
let apiData: unknown = "Rahman";

let userName = (apiData as string).length;


// Interface

// interface
interface IProduct {
  productName: string;
  price: number;
}

const prdct1: IProduct = {
  productName: "Pressure medicine",
  price: 10,
};

// Generics
function identity<T>(value: T): T {
  return value;
}
// any
// const paracetamol = identity("Napa");
const paracetamol = identity(12);

// console.log("paracetamol", typeof paracetamol);

// generics with interface
interface IApiRes<TLLM> {
  success: boolean;
  data: TLLM;
}

const res: IApiRes<string[]> = {
  success: true,
  data: ["rice", "oil"],
};

interface IPersona {
  name: string;
  add: string;
}



/ Constraints
function getName<T extends IPersona>(param: T): string {
  return param?.name;
}

// keyof
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; //obj.name, obj[name] = value -> key er kaan dhore value k ana
}

// api

// constraints means badha boundary

// enum

enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
}

let orderStat = OrderStatus.Delivered;

const Status = {
  PENDING: "pending",
  SHIPPED: "SHIPPED",
} as const;

type StatusCheck = (typeof Status)[keyof typeof Status];

const typebosiye: StatusCheck = "pending";

// console.log("last", typebosiye);

type IsString<T> = T extends number ? "yes" : "no";

type A = IsString<string>; // yes

const xyz: A = "no";

// mapped
type TReadOnly<T> = {
  readonly [k in keyof T]: T[k];
};

type TProductReadOnly = TReadOnly<TProduct>;

type PartialProduct = Partial<TProduct>;

type RequiredProduct = Required<PartialProduct>;

type PickProduct = Pick<TProduct, "productName">;

type OmitProduct = Omit<TProduct, "address">;
