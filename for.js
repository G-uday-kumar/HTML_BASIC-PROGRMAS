// for(let i=10;i>=1;i--){
//     console.log(i);
// }

// // pro tomprijnt num ffrom 100-1
// for(let i=100;i>=1;i--){
//     console.log(i);
// }


// // 50-25
// for(let i=50;i>=25;i--){
//     console.log(i);
// }

// multiple of 5 range from 100 to 0 without if 
// for(let i=100;i>=1;i=i-5){
//     console.log(i);
// }


// //  prog to prin num multiple of ten range form 100-0 
// for(let i=100;i>=1;i=i-10){
//     console.log(i);
// }


// prog to print num range A-B given by person or user
// let a=Number(prompt("enter the num a"))
// let b=Number(prompt("enter the num b"))
// if(isNaN(a)||isNaN(b)||a<0||b<0||a<b){
//     alert("enter proper number")
// }
// else{
//     for(let i=a;i>=b;i--){
//     console.log(i);
//     }
// }

// prog to print numberwhich is divisibke by 3 range from 100 -0 and summ of these number
// // 
// let sum=0
// for(let i=100;i>=0;i--){
//         if(i%3===0){

//             console.log(i);
//             sum+=i
//         }
//     }
//     console.log("sum if :-",sum);

//  prog to print which is divisibleby ten number range from a and b given by the user and sum of these number

// let a=Number(prompt("enter the num a"))
// let b=Number(prompt("enter the num b"))
// let sum=0
// if(isNaN(a)||isNaN(b)||a<0||b<0||a<b){
//     alert("enter proper number")
// }
// else{
//     for(let i=a;i>=b;i--){
//         if(i%10===0){

//             console.log(i);
//             sum+=i
//         }
//     }
//     console.log("sum is:-",sum);
// }

// prog to find the factorial of given number using reversing order number
// let a=Number(prompt("enter the num a"))
// let b=Number(prompt("enter the num b"))
// let fact=1
// if(isNaN(a)||isNaN(b)||a<0||b<0||a<b){
//     alert("enter proper number")
// }
// else{
    
//     for(let i=a;i>=b;i--){
//         fact=fact*i;
//         // console.log(i);
//     }
//     console.log(fact);
// }


// prog to print the sum of the factorial of given number

// let a=Number(prompt("enter the num a"))
// let b=Number(prompt("enter the num b"))
// let fact=1
// let sum=0
// if(isNaN(a)||isNaN(b)||a<0||b<0||a<b){
//     alert("enter proper number")
// }
// else{
    
//     for(let i=a;i>=b;i--){
//         fact=fact*i;
//         sum+=i
//         // console.log(i);
//     }
//     console.log("factorial:-",fact);
//     console.log("sum:-",sum);
// }

// // prog to print a numbe rwhic is div by 3 range from 100-0 and find the sum of even numbers
// let sum=0
// for(let i=100;i>=0;i--){
//     // console.log(i);

//         if(i%3===0){
//             console.log(i);
//             if(i%2===0){
//                  sum+=i;
//     }
//         }
    
// }
// console.log(sum);



// prog to  print the sum of num given by the useer


let a=prompt("enter the num a");
// let b=Number(prompt("enter the num b"))
let sum=0;
if(a<0){
    alert("enter proper number")
}
else{
    for(let i=0;i<=a.length;i++){
        // let num=parseInt(a)
        // let rem=num%10
        // console.log(rem);
        sum=sum+(Number(a[i]))
    }
}
console.log(sum);