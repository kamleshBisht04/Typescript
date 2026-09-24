"use strict";
// export {};  this is for global install of typescript
Object.defineProperty(exports, "__esModule", { value: true });
// solution
let username = "kamlesh";
// username = 100;
console.log(username);
console.log(typeof username);
const getResult = (a, b) => {
    return a + b;
};
console.log(getResult(5, 6));
// console.log(getResult(5, "6"));  // typechecking
// datatypes
//  1 . primitive datatype
// String
let name = "Kamlesh";
// Number
let age = 25;
// Boolean
let isLoggedIn = true;
// BigInt
let bigNumber = 12345678901234567890n;
// Symbol
let id = Symbol("id");
// Null
let data = null;
// Undefined
let value = undefined;
// symbol example
const sym1 = Symbol();
const sym2 = Symbol("discription");
const sym3 = Symbol("discription");
// console.log(sym1===sym2); // false both
// console.log(sym2===sym3);
console.log(sym3 === sym3);
// 2.object Type data type
// Array single type simler value
let users = ["kamlesh", "Deepak", "Jay", "Himanshu"];
let names = ["Kamlesh", "Rahul"];
let marks = [80, 75, 90];
console.log(users);
console.log(marks);
// Tupal type
// array of  fixed datatype or fixed length
let userData = ["kamlesh", 25];
console.log(userData);
// object Type
let user = {
    name: "Deepak",
    age: 26,
    city: "tarikhet",
    contact: 7895709188,
};
console.log(user);
//special type
// these are unique to typescript  + Generally avoid any
// any can hold any type  + disable the power of typescript
let values = "Hello";
values = 100;
values = true;
console.log(values);
// unknown
//
let value1 = "Hello";
// console.log(value1.toUpperCase());  //Enforced typechecking
if (typeof value1 === "string") {
    console.log(value1.toUpperCase());
}
// void
const greeting = () => {
    console.log("hello welcome to you");
};
greeting();
// never
// a function that usually never return any value
const throwError = (message) => {
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
const value3 = "jay singh";
console.log(value3);
const user1 = {
    name: "kamlesh",
    age: 30,
    empId: "Emp101",
    deprt: "IT",
};
console.log(user1);
const userImp = {
    name: "jay sing",
    age: 28,
    email: "kamleshbisht04@gmail.com",
};
console.log(userImp);
const user2 = {
    name: "Rahul",
    age: 24,
    email: "rahul@gmail.com",
};
const user3 = {
    name: "Amit",
    age: 26,
    email: "amit@gmail.com",
};
// Enum type
var Direction;
(function (Direction) {
    Direction["Up"] = "North";
    Direction["Down"] = "South";
    Direction["Left"] = "West";
    Direction["Right"] = "East";
})(Direction || (Direction = {}));
let move = Direction.Down;
console.log(move);
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["doctor"] = 2] = "doctor";
})(Role || (Role = {}));
let role = Role.admin;
console.log(Role[role]);
// letral
let statusCode;
statusCode = 200;
statusCode = 404;
// statusCode = 201; // ❌ Error
// function type
const operations = (a, b) => {
    return a + b;
};
console.log(operations(5, 6));
// console.log(operations(5, "9"));
// ===========================================
// symbol  is uniques
const id1 = Symbol();
const id2 = Symbol();
let username1;
// =================================
// multitype array using union
let totaldata = ["kamlesh", "jay", "25", "56 "];
// map filter reduce in typescript
let total = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = total.map((num) => num * 2);
console.log(doubled);
const even = total.filter((num) => num % 2 == 0);
console.log(even);
const Total = total.reduce((acc, num) => acc + num, 0);
console.log(Total);
// function ,defaultparameter  ,optional parameter
// function greetingTo(name?: string) {
//   console.log(name);
// }
// greetingTo("kamlesh");
// guest
function greetingTo(name = "kamlesh") {
    console.log(name);
}
greetingTo();
//=====================================
const add = (a, b) => {
    return a + b;
};
const result = add(5, 6);
console.log(result);
const square = (num) => {
    return num * num;
};
console.log("square is ", square(5));
//========================================
// default,optional,and normal parameter
const welcome = (age, name, country = "india") => {
    console.log(age);
    console.log(name);
    console.log(country);
};
welcome(28, "kamlesh", "Bharat");
//========================================
//sprad operater
const operation = (...num) => {
    return num.reduce((acc, num) => acc + num, 0);
};
console.log(operation(5, 6, 7, 8, 9, 10));
//========================================
const num1 = [1, 2, 3, 4, 5, 6];
const num2 = [10, 20, 30, 40, 50, 60];
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
let multiply;
multiply = (x, y) => {
    return x * y;
};
console.log(multiply(5, 6));
// =====================================
let greet;
greet = (name) => {
    return `hello welcome to ${name}`;
};
console.log(greet("kamlesh"));
const addi = (a, b) => {
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
const calculation = (a, b, operation) => {
    return operation(a, b);
};
console.log(calculation(5, 7, (x, y) => x * y));
const sub = (a, b) => a - b;
console.log(sub(5, 6));
const calculate = (a, b) => {
    return a + b;
};
calculate.description = "Addition calculator";
console.log(calculate(10, 20));
console.log(calculate.description);
// ===========================================
// function overloading
function additionOne(a, b) {
    return a + b;
}
console.log(additionOne(5, 6));
console.log(additionOne("Happy", " birth Day"));
let userId = "EMP101";
let userName = "Deepak singh Bisht";
let User1 = {
    id: "Emp101",
    name: "kamlesh singh",
    age: 29,
    branch: "CSE",
};
let branchCode = "404";
let branchCode1 = "ESC101";
let isBranchCode = true;
let currentStatus = "pending";
const manager = {
    name: "Bob",
    employeeId: 1042,
};
const add1 = (x, y) => x + y;
let kamleshUser = {
    id: 101,
    name: "kamlesh",
    branch: "tarikhet",
    city: "delhi",
    state: "uttarakhand",
};
console.log(kamleshUser);
let kamleshEmployee = {
    id: 102,
    name: "kamlesh",
    branch: "tarikhet",
    city: "delhi",
    state: "uttarakhand",
    employeeId: "emp1001",
    company: "HCL",
};
console.log(kamleshEmployee);
const teacherData = {
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
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printValue("welcome");
printValue(56);
let kamleshUsers = {
    name: "kamlesh",
    email: "kamleshbisht04@gmail.com",
};
let kamleshAdmin = {
    name: "kamleshAdmin",
    permissions: ["READ ,WRITE,UPDATE"],
};
function getUser(user) {
    if ("permissions" in user) {
        console.log(user.permissions);
    }
    else {
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
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meau();
    }
}
makeSound(new Cat());
makeSound(new Dog());
let guestUser = {
    name: "Deepak",
    pincode: 263663,
    branch: "almora",
    age: 20,
};
// guestUser.age = 26; // if readonly it will dont change error in compile time
console.log(guestUser);
// ========================================
// for class typescript
class Student {
    name;
    branch;
    age;
    constructor(name, branch, age) {
        this.name = name;
        this.branch = branch;
        this.age = age;
    }
    getDetails() {
        console.log(`student name is ${this.name} and branch is ${this.branch} and age is ${this.age}`);
    }
}
const student = new Student("kamlesh", "computer science", 30);
// console.log(student);
console.log(student.getDetails());
// another example
class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pid) {
        this.name = name;
        this.price = price;
        this.pId = pid;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            this.isOrdered = true;
            return `Product ${this.name} is ordered in this ${this.price}`;
        }
        else {
            return `No product in cart`;
        }
    }
}
const samsung = new Product("sumsung", 100000, 112236);
console.log(samsung.buyProduct());
samsung.addToCart();
console.log(samsung.buyProduct());
// 
//# sourceMappingURL=app.js.map