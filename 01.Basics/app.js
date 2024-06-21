// console.log("hello ");
// console.table({ name: "Arjun", age: 34 });

let firstName = "Arjun";
let lastName = "K";

let fullName = firstName.concat(" ", lastName);

console.clear();
console.log(fullName);

console.log(fullName.slice(0, 2));

console.log(fullName.slice());

console.log(fullName.slice(1));

console.log(fullName.split());

console.log(fullName.split(" "));

console.log(fullName.split("r"));

console.log(fullName.split(" ").join("***"));

console.log(fullName.includes("K"));

console.log(fullName.includes("k"));

console.log(fullName.includes("r"));

text = " This istesting the trim  ";
console.log(text);
console.log(text.trim());

let str = `This is    
      multi   AudioListener
      txt`;

console.log(str);

fullName = `${firstName}     ${lastName}`;
console.log(fullName);
