
console.log("Welcome to bank");
let balance = 12000;

let again=true
while(again){
    
    
    let option = prompt("Enter anyone of the following option to begin the transacition \n 1.Deposit,\n 2.withdrawal,\n 3.balance").toLowerCase()
    if (option === "1" || option === "d" || option === "deposit") {
    // console.log("enter the amount:");
    let amount = Number(prompt("enter the amount:"))
    if (isNaN(amount) || amount < 0) {
        alert("invalid input so deposition not possible")
    }
    else {
        
        balance += amount
        console.log("total amount is after deposition:- ", balance);
    }
}
else if (option === "2" || option === "w" || option === "withdrawal") {
    let amount = Number(prompt("enter amount to withdrawal"))
    if (isNaN(amount)  || amount < 0) {
        alert("WITHDRAWAL NOT POSIBLE")
    }
    else if(amount > balance){
        console.log("invsufficient balance");
    }
    else {
        balance -= amount
        console.log("withdrawd is:-", amount);
    }
}
else if (option === "3" || option === "b" || option === "balance") {
    console.log("total balance is", balance);
}
else {
    alert("invalid option")
}
    again=confirm("do you want to continue")
}
console.log("Thanks for Banking");


// now re built it using the function