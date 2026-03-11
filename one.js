//  prog to check the given number is valid or not
// let num=(prompt("enter the numvber"));
// if (isNaN(num)||(num.length)!=10){
//     alert("not a valid")
// }
// else{ 
//     console.log("this is valid");
// }



// prog to check currrent time is gm afternoon or evnin 5-12 gm,12-4,afternoon 4--- gn
let time=new Date()
let time1=time.getHours()
console.log((time1));
if(time1>16){
    console.log("good evning");
}
else if(time1>=12){
    console.log(" good afternoon");
}
else{
    console.log("good morning");
}




// 
// let date=new Date();
// let hrs=date.getHours();
// if (hrs>16){
//     console.log("good evning");
// }


// prog to check the user given inout or not

// let input=prompt("enter input");
// if ((input.length)>0){
//     console.log("its inpout",input);

// }else{
//     alert("no input")
// }



// // banking
// console.log("Welcome to bank");
// let option = prompt("Enter anyone of the following option to begin the transacition \n 1.Deposit,\n 2.withdrawal,\n 3.balance").toLowerCase()
// let balance = 12000;
// if (option === "1" || option === "d" || option === "deposit") {
//     // console.log("enter the amount:");
//     let amount = Number(prompt("enter the amount:"))
//     if (isNaN(amount) || amount < 0) {
//         alert("invalid input so deposition not possible")
//     }
//     else {

//         balance += amount
//         console.log("total amount is after deposition:- ", balance);
//     }
// }
// else if (option === "2" || option === "w" || option === "withdrawal") {
//     let amount = Number(prompt("enter amount to withdrawal"))
//     if (isNaN(amount)  || amount < 0) {
//         alert("WITHDRAWAL NOT POSIBLE")
//     }
//     else if(amount > balance){
//         console.log("invsufficient balance");
//     }
//     else {
//         balance -= amount
//         console.log("withdrawd is:-", amount);
//     }
// }
// else if (option === "3" || option === "b" || option === "balance") {
//     console.log("total balance is", balance);
// }
// else {
//     alert("invalid option")
// }




