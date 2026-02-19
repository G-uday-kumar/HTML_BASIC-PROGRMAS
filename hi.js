console.log("Hello World");
alert("Welcome to my first js project");
document.write("Hello here the  JS project is running ");
let name1="Uday";
let age=21;
// here the age variable value is used for the radius and calculated the area of the circle
const pi=3.14;
let area=pi*age*age;
console.log("area of a circle",area);

let isStudent=true;
let x=null
let y;
console.log(typeof(y));
console.log(typeof(x));
console.log(typeof(isStudent));

// now see the operators
console.log("lets dive into the operators");
let a=10;
let b=15;
console.log("addition: ",a+b);
console.log("substraction: ",a-b);
console.log("multi: ",a*b);
console.log("div",a/b);

// user input
console.log("user input taking");
let name=prompt("enter your name");
console.log(name);


// simple condtions to the voting eligible or not
console.log("simple condtions to the voting eligible or not");
if(age>=18){
    console.log(name,":-you are eligible to vote");

}else{
    console.log("sorry you are not eligible still you have to wait. you are too young");
}

// lets dive into the loops also
console.log("lets dive into the loops also");
for(let i=1;i<=5;i++){
    console.log("number:-",i);
}

function showMsg(){
    alert("JavaScript Started 🔥");
}

function darkMode(){
    document.body.style.background="black";
    document.body.style.color="white";
}
