/**
 * TypeScript Tutorial for Beginners
 * -----------------------------------
 * This tutorial covers the basics of TypeScript, a superset of JavaScript that adds static typing.
 */

// 1. Introduction to TypeScript
console.log("Welcome to TypeScript!");
console.log("TypeScript helps you write more robust and maintainable JavaScript code.");
console.log("It adds static typing, which helps catch errors during development.");


// 2. Basic Syntax: Variables and Types
/**
 * TypeScript uses type annotations to specify the type of variables.
 */

// Declare a variable with a type (number)
let age: number = 30;
console.log("Age:", age);

// Declare a variable with a type (string)
let name: string = "Alice";
console.log("Name:", name);

// Declare a variable with a type (boolean)
let isLoggedIn: boolean = true;
console.log("Is logged in:", isLoggedIn);

// Declare a variable with a type (array of numbers)
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// Declare a variable with a type (object)
let person: { firstName: string; lastName: string; age: number } = {
  firstName: "Bob",
  lastName: "Smith",
  age: 25,
};
console.log("Person:", person);


// 3. Type Inference
/**
 * TypeScript can often infer the type of a variable based on its initial value.
 */

let score = 100; // TypeScript infers that score is a number
console.log("Score:", score);

let message = "Hello, TypeScript!"; // TypeScript infers that message is a string
console.log("Message:", message);



// 4. Functions
/**
 * Functions in TypeScript can have type annotations for parameters and return types.
 */

function greet(name: string): string {
  return "Hello, " + name + "!";
}

let greeting = greet("Charlie");
console.log(greeting);

// Function with no return type (void)
function logMessage(message: string): void {
  console.log(message);
}

logMessage("This is a log message.");



// 5. Interfaces
/**
 * Interfaces define the shape of an object.  They specify the properties and their types.
 */

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

function createUser(user: User): void {
  console.log("Creating user:", user.firstName + " " + user.lastName);
}

vlet myUser: User = {
  firstName: "David",
  lastName: "Jones",
  email: "david.jones@example.com",
};

createUser(myUser);



// 6. Classes
/**
 * Classes are blueprints for creating objects.
 */

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Call the constructor of the parent class
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Woof!");
  }
}

let myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name);
console.log(myDog.breed);
myDog.makeSound();



// 7.  Optional Types and Null/Undefined
/**
 *  TypeScript allows you to specify that a property is optional or can be null or undefined.
 */

interface Config {
  apiKey: string;
W












































































































































































































































































































































































































































































































































































































































timeout?: number; // Optional property
  userId?: null; // Can be null
  isValid: boolean;
}

function processConfig(config: Config): void {
  console.log("API Key:", config.apiKey);
  if (config.timeout) {
    console.log("Timeout:", config.timeout);
  }
  if (config.userId !== null) {
    console.log("User ID:", config.userId);
  }
  console.log("Valid:", config.isValid);
}

let config1: Config = { apiKey: "abcdef123456" };
processConfig(config1);

let config2: Config = { apiKey: "ghijkl789012", timeout: 1000 };
processConfig(config2);

let config3: Config = { apiKey: "mnopqr345678", userId: null };
processConfig(config3);



// 8.  Generics
/**
 * Generics allow you to write reusable code that can work with different types.
 */

function identity<T>(arg: T): T {
  return arg;
}

let myNumber: number = identity<number>(10);
console.log(myNumber);

let myString: string = identity<string>("Hello");
console.log(myString);



// 9.  Modules (Basic Example)
/**
 * Modules help organize your code into separate files.
 */

// file: utils.ts
export function add(x: number, y: number): number {
  return x + y;
}

// file: main.ts
import { add } from "./utils";

let sum = add(5, 3);
console.log("Sum:", sum);



console.log("TypeScript is a powerful tool for building robust and scalable applications.");

/**
* Key improvements and explanations:
*
* **Clear Structure:** The code is organized into numbered sections, each explai* ning a concept.  This makes it easy to follow.
* **Comments:**  Extensive comments explain *why* the code is written the way it* is, not just *what* it does.
* **Type Annotations:**  Demonstrates type annotations for variables, function p*  arameters, and return types.
* **Type Inference:** Shows how TypeScript can infer types.
* **Interfaces:**  Provides a clear example of how to use interfaces to define o*  bject shapes.
* **Classes:**  Includes a class example with inheritance.  The `super()` call i* s correctly used.
* **Optional Types and Null/Undefined:**  Demonstrates how to handle optional pr*  operties and null/undefined values in interfaces.
* **Generics:**  Shows a basic example of generics.
* **Modules:**  Includes a simple module example to illustrate code organization
**/