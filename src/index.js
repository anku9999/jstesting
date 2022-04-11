import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
//symbol
const person = {
  firstName: "John",
  lastName: "Doe"
};
let id = Symbol("id");
let age = Symbol("age");
person[id] = 15;
person[age] = 25;
document.getElementById("demo").innerHTML =
  person[id] + " " + person.id + " " + person[age];
//default parameter
function add(x, y = 10) {
  return x + y;
}
document.getElementById("demo1").innerHTML = add(4);
//string includes
let str = "Welcome to the world...!";
document.getElementById("demo2").innerHTML =
  str.includes("the") + " " + str.includes("The");
//string startsWith
document.getElementById("demo3").innerHTML =
  str.startsWith("Welcome") +
  " " +
  str.startsWith("welcome") +
  " " +
  str.startsWith("the");
//string endsWith
document.getElementById("demo4").innerHTML =
  str.endsWith("world") + " " + str.endsWith("...!");
//Array.from
const myarr = Array.from("ABCDEFGHIJKLM");
document.getElementById("demo5").innerHTML = myarr;
//Array.keys
const color = ["Red", "Green", "Blue", "Violet"];
const key = color.keys();
let text = "";
for (let x of key) {
  text += x + "<br>";
}
document.getElementById("demo6").innerHTML = text;
//Array.find
const fruits = [5, 30, 2, 18];
const first = fruits.find(myfunction);
function myfunction(value, index, array) {
  return value > 18;
}
document.getElementById("demo7").innerHTML = first;
//array.findIndex
const Age = [5, 42, 5, 23, 12, 11, 6];
let second = Age.findIndex(myindexfunction);
function myindexfunction(value, index, array) {
  return value > 18;
}
document.getElementById("demo8").innerHTML = second;
//math method
//1.Math.trunc
document.getElementById("demo9").innerHTML =
  Math.trunc(4.5) + " " + Math.trunc(5.6) + " " + Math.trunc(-6.67);
//2.Math.sign
let sign = Math.sign(-10);
let signnull = Math.sign(0);
let signpositive = Math.sign(34);
document.getElementById(
  "demo10"
).innerHTML = `${sign}  ${signnull} ${signpositive}`;
//3.Math.cbrt
let cuberoot = Math.cbrt(8);
let cuberoot1 = Math.cbrt(64);
document.getElementById("demo11").innerHTML = `${cuberoot} ${cuberoot1}`;
//4.Math.log2
let log = Math.log2(2);
let log10 = Math.log10(10);
document.getElementById("demo12").innerHTML = `${log}  ${log10} `;
//Number.EPSILON
let x = Number.EPSILON;
document.getElementById("demo13").innerHTML = `${x}`;
//Number.MIN_SAFE_INTEGER
let y = Number.MIN_SAFE_INTEGER;
document.getElementById("demo14").innerHTML = `${y}`;
//Number.MAX_SAFE_INTEGER
let z = Number.MAX_SAFE_INTEGER;
document.getElementById("demo15").innerHTML = `${z}`;
//Number.isInteger()
let j = Number.isInteger(10);
let k = Number.isInteger(10.5);
let l = Number.isInteger(-20);
document.getElementById("demo16").innerHTML = `${j}  ${k} ${l}`;
//Number.isSafeInteger()
let a = Number.isSafeInteger(25);
let b = Number.isSafeInteger(125648965745682856468);
let c = Number.isSafeInteger(-10.25);
document.getElementById("demo17").innerHTML = `${a}  ${b} ${c}`;
//isFinite
let d = isFinite(10 / 0);
let e = isFinite(10 / 1);
let f = isFinite(10 / 2);
document.getElementById("demo18").innerHTML = `${d} ${e} ${f}`;
//isNaN
let g = isNaN("Hello");
let h = isNaN("");
document.getElementById("demo19").innerHTML = `${g} ${h}`;
//entries
let name = ["Amita", "Anila", "Amina", "Arya", "Anisha", "Ahisha"];
let i = name.entries();
for (let n of i) {
  document.getElementById("demo20").innerHTML += ` '<br>' ${n}`;
}
const std = [2, 4, 6, 9, 3, 10, 2];
let std1 = std.entries();
for (let m of std1) {
  document.getElementById("demo21").innerHTML += `'<br>' ${m} `;
}
//set
const letter = new Set();
letter.add("a");
letter.add("b");
letter.add("c");
document.getElementById("demo22").innerHTML = letter.size;
let Name = new Set(["Amita", "Arya", "manisha", "minaxi"]);
console.log(Name);
Name.add("Hirva");
console.log(Name);
Name.delete("minaxi");
console.log(Name);
let hasamita = Name.has("Amita");
console.log(hasamita);
let hasminaxi = Name.has("minaxi");
console.log(hasminaxi);
console.log("Set Size : " + Name.size);
//map
let map = new Map();
map.set(1, "Arya");
map.set(2, "Priya");
map.set(3, "Anila");
console.log("Map size : " + map.size);
//delete map
map.delete(1);
console.log(map);
//document.write(map.has(2));
//has map
console.log(map.has(2));
console.log(map.has(1));
console.log(map);
//map entries
let val = map.entries();
let val1 = val.next().value;
console.log(val1);
let val2 = val.next().value;
console.log(val2);
//map set key/value pairs
map.set(4, "Anamika");
console.log(map);
//map foreach
function displaymap(values, key) {
  console.log(`key : ${key}  values : ${values}`);
}
map.forEach(displaymap);
function displaymapvalue(values) {
  console.log(`value is : ${values}`);
}
map.forEach(displaymapvalue);
//map keys
let mapkey = map.keys();
console.log("Map keys : " + mapkey.next().value);
console.log("Map keys : " + mapkey.next().value);
//map values
let mapvalues = map.values();
console.log("Map value : " + mapvalues.next().value);
console.log("Map value : " + mapvalues.next().value);
map.clear();
console.log(map);
//spread operator
let arr = ["red", "green", "blue", "pink"];
let newarr = [...arr, "violet", "white"];
console.log(newarr);
let str12 = ["a", "b", "c", ..."defghijkl", "m", "n"];
console.log(str12);
//rest parameter
function sum(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  console.log(`Sum is : ${sum}`);
}
sum(10, 20, 30);
sum(5, 10);
sum(24, 23);
//rest parameter  and distructing...
let c1 = ["red", "green", "blue", "pink", "violet"];
let [a1, b1, ...args] = c1;
console.log(a1);
console.log(b1);
console.log(args);
let [...args1] = c1;
console.log(args1);
//array distructing...
let book = ["java", "php", "css", "c++"];
let [first1, second1, thired, forth] = book;
console.log(first1);
console.log(second1);
console.log(thired);
console.log(forth);
//distructing assignment...
let Arr = [25, 23, 45, 78, 12, 21, 65, 55];
let [value1, value2, value3, value4] = Arr;
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
//object
let department = "dept_name";
let user = {
  name: "Amita",
  city: "Amreli",
  [department]: "Production"
};
console.log(user);
console.log(user.name, user.city, user.dept_name);
//object assign()
let b3 = {
  1: "java",
  2: "php",
  3: "c++"
};
let b2 = {
  4: "javascript",
  5: "Asp.net"
};
let b4 = {
  6: "Oracle",
  7: "C"
};
let newobj = Object.assign(b3, b2, b4);
console.log(newobj);
console.log(b4);
//class
class stud {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`Name is : ${name}  , age is : ${age}`);
  }
  data() {
    console.log(`Student name : ${this.name} and Age is : ${this.age}`);
  }
}
let s1 = new stud("Amita", 25);
let s2 = new stud("Anita", 30);
s1.data();
s2.data();
//class inheritance
class emp {
  constructor(name) {
    this.name = name;
  }
}
class manager extends emp {
  displayname() {
    console.log(`Emp name is : ${this.name}`);
  }
  displaymname(name) {
    this.name = name;
    console.log(`Manager name is : ${this.name}`);
  }
}
let m = new manager("Jiyanshi");
m.displayname();
m.displaymname("Maya");
//static keyword
class example {
  static show() {
    console.log("Static method...");
  }
}
example.show();
//multi-level inheritance
class A {
  displayhello() {
    console.log("Hello...!");
  }
}
class B extends A {
  displayhi() {
    console.log("Hiii...!");
  }
}
class C extends B {
  displayby() {
    console.log("Byyy...!");
  }
}
let c2 = new C();
c2.displayhello();
c2.displayhi();
c2.displayby();
//method overriding
class parent {
  show() {
    console.log("Base class");
  }
}
class child extends parent {
  show() {
    console.log("Child class");
  }
}
let ch = new child();
ch.show();
//super keyword
class ex {
  datadis() {
    console.log("Parent class...");
  }
}
class ex1 extends ex {
  datadis() {
    super.datadis();
    console.log("Child class...");
  }
}
let e1 = new ex1();
e1.datadis();
//String constructor
let str1 = new String("Hello World");
console.log("Value of str.constructor is: " + str1.constructor);
console.log(str1.length);
console.log(str1.repeat(5));
console.log(str1.charAt(3))
console.log(str1.charCodeAt(e));
console.log(str1.charCodeAt(12));
let str2 = "html";
let str3 = "java";
let str4 = "javascript";
console.log(str2.concat(str3));
console.log(str2.concat(str3, str4));
console.log(str4.match("java"));
console.log(str2.toString());
console.log(str1.lastIndexOf("l"));
console.log(str1.lastIndexOf("World"));
let str5 = "javatpoint";
console.log(str5.replace("tpoint", "script"));
console.log(str5.search("point"));
