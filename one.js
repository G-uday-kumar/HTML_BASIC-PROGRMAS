// let a=null;
// console.log(a);
// console.log(typeof(a));

// let a="uday"
// console.log(Boolean(a));//true

// console.log(Number(a));//NaN
// console.log(Boolean(Number(a)));//false
// console.log(typeof(Boolean(Number(a))));//boolean

// let aa=Boolean(120);
// console.log(aa);//true
// 
// let a=Number(Boolean(true));
// console.log(a);//1
// // console.log(String(a));//1(but as a string)
// let a=Number(Boolean(false));
// console.log(a);
// console.log(String(a));//0(but as a string)

// let a=Boolean("");
// console.log(a);//false

// let a=Boolean(" ");
// console.log(a);//true


// let a=Boolean("false");
// console.log(a);//true


// let a=Number(Boolean("false"));
// // console.log(a);//1

// let me="udkjnksnddnaaskanslkay";
// console.log((me.length));
// let a=console.log((me.length/2));
// console.log(me.charAt(3));
// console.log(me.charAt(a));//loading

 let aa="uday kumar";
 let ab="kumar";
 let ac="Godder";
// console.log(aa.concat(" ").concat(ab).concat(" ").concat(ac));

// console.log(aa.endsWith("ay"));//true
// console.log(ac.endsWith("odder"));//true
// console.log(ac.endsWith("od"));//false

// // includes
// console.log(aa.includes("uda"));//true
// console.log(aa.includes("da"));//true
// console.log(aa.includes("ua"));//false

// //indexof
// console.log(aa.indexOf("y"));
// console.log(aa.lastIndexOf("u"));

//padend and padstart
// console.log("udya".padEnd(16,"x"));//ex we areusing in the bank and all for number for privacy
// console.log("9353".padEnd(10,"x"));
// console.log("5831".padStart(10,"x"));
// console.log("4296".padStart(12,"0"));
// console.log("kumar".padStart(10,"-"));

console.log(aa.repeat(3));//multiple times printing

console.log(aa.split(""));//(10) ['u', 'd', 'a', 'y', ' ', 'k', 'u', 'm', 'a', 'r']
console.log(aa.split("").join("/"));