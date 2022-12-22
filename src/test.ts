// function Logger(logString: string) {
//   //target == constructor of function below
//   return function (target: Function) {
//     console.log(logString);
//     console.log(target);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     console.log("RENDERING TEMPLATE");

//     const hookEl = document.getElementById(hookId);

//     const pers = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("p")!.textContent = pers.name;
//     }
//   };
// }

// // Декоратор вызывается на этапе определения класса --- when the class constructor defined, not later
// @Logger("CUSTOM LOGGING STRING")
// @WithTemplate("<p>My Pers Obj</p>", "app")
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const person = new Person();
// console.log(person);

// // ---

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!");
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);

//   // return {enumerable}
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log // property decorator
//   title: string;
//   private _price: number;

//   @Log2 // accessor decorator
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3 //method decorator
//   getPriceWithTax(@Log4 tax: number) {
//     //parameter decorator
//     return this._price * (1 + tax);
//   }
// }

// const p1 = new Product("Book", 19);
// const p2 = new Product("Book 2", 29);

// // ---------
// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const originalMeth = descriptor.value; //
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMeth.bind(this);
//       return boundFn;
//     },
//   };
//   return adjDescriptor;
// }

// class Printer {
//   message = "this printer works";

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();

// const button = document.querySelector("button");
// button?.addEventListener("click", p.showMessage);
