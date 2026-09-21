// export {};  this is for global install of typescript

// solution
let username: string = "kamlesh";
// username = 100;
console.log(username);
console.log(typeof username);

const getResult = (a: number, b: number) => {
  return a + b;
};

console.log(getResult(5, 6));
// console.log(getResult(5, "6"));  // typechecking

// datatypes

//  1 . primitive datatype

// String
let name: string = "Kamlesh";

// Number
let age: number = 25;

// Boolean
let isLoggedIn: boolean = true;

// BigInt
let bigNumber: bigint = 12345678901234567890n;

// Symbol
let id: symbol = Symbol("id");

// Null
let data: null = null;

// Undefined
let value: undefined = undefined;

// symbol example

const sym1 = Symbol();
const sym2 = Symbol("discription");
const sym3 = Symbol("discription");

// console.log(sym1===sym2); // false both
// console.log(sym2===sym3);

console.log(sym3 === sym3);

// 2.object Type data type
// Array single type simler value

let users: string[] = ["kamlesh", "Deepak", "Jay", "Himanshu"];
let names: Array<string> = ["Kamlesh", "Rahul"];
let marks: number[] = [80, 75, 90];

console.log(users);
console.log(marks);

// Tupal type
// array of  fixed datatype or fixed length
let userData: [string, number] = ["kamlesh", 25];
console.log(userData);

// object Type

let user: {
  name: string;
  age: number;
  city: string;
  contact: number;
} = {
  name: "Deepak",
  age: 26,
  city: "tarikhet",
  contact: 7895709188,
};

console.log(user);

//special type
// these are unique to typescript  + Generally avoid any
// any can hold any type  + disable the power of typescript

let values: any = "Hello";

values = 100;
values = true;

console.log(values);

// unknown
//
let value1: unknown = "Hello";
// console.log(value1.toUpperCase());  //Enforced typechecking

if (typeof value1 === "string") {
  console.log(value1.toUpperCase());
}

// void
const greeting = (): void => {
  console.log("hello welcome to you");
};

greeting();

// never
// a function that usually never return any value

const throwError = (message: string): never => {
  throw new Error(message);
};

console.log("it is error");

const tureFunction = () => {
  while (true) {
    console.log("working");
  }
};

// tureFunction()

// Advance types

// 1 union
const value3: string | number = "jay singh";
console.log(value3);

// intersection

type person = {
  name: string;
  age: number;
};
type Employee = {
  empId: string;
  deprt: string;
};

type EmployeeDetails = person & Employee;

const user1: EmployeeDetails = {
  name: "kamlesh",
  age: 30,
  empId: "Emp101",
  deprt: "IT",
};

console.log(user1);

// Alias

type User = {
  name: string;
  age: number;
  email: string;
};

const userImp: User = {
  name: "jay sing",
  age: 28,
  email: "kamleshbisht04@gmail.com",
};

console.log(userImp);

const user2: User = {
  name: "Rahul",
  age: 24,
  email: "rahul@gmail.com",
};

const user3: User = {
  name: "Amit",
  age: 26,
  email: "amit@gmail.com",
};

// Enum type

enum Direction {
  Up = "North",
  Down = "South",
  Left = "West",
  Right = "East",
}
let move: Direction = Direction.Down;
console.log(move);

enum Role {
  admin,
  user,
  doctor,
}

let role: Role = Role.admin;
console.log(Role[role]);

// letral
let statusCode: 200 | 404 | 500;

statusCode = 200;
statusCode = 404;
// statusCode = 201; // ❌ Error

// function type

const operations = (a: number, b: number) => {
  return a + b;
};

console.log(operations(5, 6));
// console.log(operations(5, "9"));

// ===========================================
// symbol  is uniques
const id1 = Symbol();
const id2 = Symbol();

let username1: {
  [id1]: 22;
  [id2]: 33;
};
// =================================
// multitype array using union
let totaldata: (string | number)[] = ["kamlesh", "jay", "25", "56 "];

// map filter reduce in typescript

let total: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled: number[] = total.map((num: number) => num * 2);
console.log(doubled);

const even: number[] = total.filter((num: number) => num % 2 == 0);
console.log(even);

const Total: number = total.reduce((acc, num: number) => acc + num, 0);
console.log(Total);

// function ,defaultparameter  ,optional parameter
// function greetingTo(name?: string) {
//   console.log(name);
// }

// greetingTo("kamlesh");

// guest
function greetingTo(name: string = "kamlesh") {
  console.log(name);
}

greetingTo();

//=====================================

const add = (a: number, b: number): number => {
  return a + b;
};

const result = add(5, 6);
console.log(result);

const square = (num: number): number => {
  return num * num;
};

console.log("square is ", square(5));

//========================================
// default,optional,and normal parameter
const welcome = (age: number, name?: string, country: string = "india") => {
  console.log(age);
  console.log(name);
  console.log(country);
};

welcome(28, "kamlesh", "Bharat");

//========================================
//sprad operater
const operation = (...num: number[]) => {
  return num.reduce((acc: number, num: number) => acc + num, 0);
};

console.log(operation(5, 6, 7, 8, 9, 10));

//========================================
const num1: number[] = [1, 2, 3, 4, 5, 6];
const num2: number[] = [10, 20, 30, 40, 50, 60];

const totalNum = [...num1, ...num2];
console.log(totalNum);

const tempUser = {
  name: "kamlesh",
  age: "34",
};

const updatedUser = {
  ...tempUser,
  age: 25,
  country: "Delhi",
};

console.log(updatedUser);
//========================================

// function addON(a: number, b: number): number {
//   return a + b;
// }
// console.log(addON(5,6));

//function with type return

let multiply: (a: number, b: number) => number;
multiply = (x, y) => {
  return x * y;
};

console.log(multiply(5, 6));

// =====================================
let greet: (name: string) => string;

greet = (name) => {
  return `hello welcome to ${name}`;
};
console.log(greet("kamlesh"));

// =====================================
// type Alias

type AddFunction = (a: number, b: number) => number;

const addi: AddFunction = (a, b) => {
  return a + b;
};

// console.log(addi(10, 20));

// type greet = (name: string) => string;

// const welcomeText: greet = (name) => {
//   return `hello welcome to ${name}`;
// };

// console.log(welcomeText("Deepak"));

// =====================================
// fucntion as a callback operation
// important one

// const calculation = (
//    a: number,
//    b: number,
//    operation: (x: number, y: number) => number): number => {
//   return operation(a, b);
// };

// let results = calculation(5,6,(x,y)=>x*y)
// console.log(results);

// =====================================

const calculation = (a: number, b: number, operation: (x: number, y: number) => number): number => {
  return operation(a, b);
};

console.log(calculation(5, 7, (x, y) => x * y));

// =====================================
// call signiture

type Sub = {
  (a: number, b: number): number;
};

const sub: Sub = (a, b) => a - b;
console.log(sub(5, 6));

// with interface

// interface Sub {
//   (a: number, b: number): number;
// };

// const sub: Sub = (a, b) => a - b;
// console.log(sub(5, 6));

// for function and call signiture same more useful we have to declear extra functionality

type Calculator = {
  (a: number, b: number): number;
  description: string;
};

const calculate: Calculator = (a, b) => {
  return a + b;
};

calculate.description = "Addition calculator";

console.log(calculate(10, 20));
console.log(calculate.description);

// ===========================================

// function overloading

function additionOne(a: number | string, b: number | string) {
  return (a as any) + (b as any);
}

console.log(additionOne(5, 6));
console.log(additionOne("Happy", " birth Day"));

// ===========================================

// type
//primitve alias
type ID = string;
type Name = string;

let userId: ID = "EMP101";
let userName: Name = "Deepak singh Bisht";

// object creating  shaping the object

type user = {
  id: string;
  name: string;
  age: number;
  branch: string;
};

let User1: user = {
  id: "Emp101",
  name: "kamlesh singh",
  age: 29,
  branch: "CSE",
};

// union

type Code = string | number | boolean;

let branchCode: Code = "404";
let branchCode1: Code = "ESC101";
let isBranchCode: Code = true;

type Status = "pending" | "approved" | "rejected";
type InputValue = string | number;

let currentStatus: Status = "pending";

// intersection type

type Person = { name: string };
type Employee1 = { employeeId: number };

// Combines both objects into one type
type StaffMember = Person & Employee1;

const manager: StaffMember = {
  name: "Bob",
  employeeId: 1042,
};

// function type
type MathOperation = (a: number, b: number) => number;

const add1: MathOperation = (x, y) => x + y;

//interface

interface users {
  id: number;
  name: string;
  branch: string;
  city: string;
  distt?: string;
  state: string;
}

let kamleshUser: users = {
  id: 101,
  name: "kamlesh",
  branch: "tarikhet",
  city: "delhi",
  state: "uttarakhand",
};

console.log(kamleshUser);

interface employee extends users {
  employeeId: string;
  company: string;
}

let kamleshEmployee: employee = {
  id: 102,
  name: "kamlesh",
  branch: "tarikhet",
  city: "delhi",
  state: "uttarakhand",
  employeeId: "emp1001",
  company: "HCL",
};

console.log(kamleshEmployee);

// ======================================
// index signiture =>provide dynamic data in
// object when we dos't known properties

interface teacherDataType {
  name: string;
  collage: string;
  employeeId: string;
  [key: string]: string | number | boolean;
}

const teacherData: teacherDataType = {
  name: "kamlesh",
  collage: "dbit",
  employeeId: "emp101",
  age: 25,
  ismarried: true,
};

console.log(teacherData);

// ======================================
// type narrwoing

// let status: string | number = "pending";

// if (typeof status === "string") {
//   console.log(status.toUpperCase());
// } else {
//   console.log(status);
// }

// with function

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
printValue("welcome");
printValue(56);

// in operater in narrowing in object

interface Admin {
  name: string;
  permissions: string[];
}

interface Users {
  name: string;
  email: string;
}
let kamleshUsers: Users = {
  name: "kamlesh",
  email: "kamleshbisht04@gmail.com",
};

let kamleshAdmin: Admin = {
  name: "kamleshAdmin",
  permissions: ["READ ,WRITE,UPDATE"],
};
function getUser(user: Admin | Users) {
  if ("permissions" in user) {
    console.log(user.permissions);
  } else {
    console.log(user.email);
  }
}

getUser(kamleshUsers);
getUser(kamleshAdmin);

// for class instance of

class Dog {
  bark() {
    console.log("bhaw bhaw");
  }
}

class Cat {
  meau() {
    console.log("meau meau");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meau();
  }
}

makeSound(new Cat());
makeSound(new Dog());

// ========================================

type userType = {
  id: string;
  name: string;
  branch: string;
  city: string;
  state: string;
  pincode: number;
  readonly age: number;
};

// make optonal
type newUser = {
  [key in keyof userType]?: userType[key];
  // readonly [key in keyof userType]?: userType[key];
};

let guestUser: newUser = {
  name: "Deepak",
  pincode: 263663,
  branch: "almora",
  age: 20,
};

//guestUser.age = 26; // if readonly it will dont change error in compile time
console.log(guestUser);

// ========================================



