let names = [];
names =["Anna","Peter","Nica","Kate"];
let age = [23,32,40,20];
let attendance = [true,true,false,true];
let any = ["Example", 25, false];

let namesModified = names.shift();
names.forEach((name, index) => {
    console.log(index, name);
  });
console.log(namesModified);

any.push({ a: 1, b: 2 });
console.log(any);

names.unshift("William");
console.log(names);

let uppercase = names.map(name => name.toUpperCase());
console.log(uppercase);