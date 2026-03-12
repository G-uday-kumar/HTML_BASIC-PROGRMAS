// for (let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         console.log(j," ");
//         // console.log();
//     }
//     // console.log((i));
//     // console.log();
// }

// prog to print the numbers range from 1-10
// for (let i=1;i<=10;i++){
//     console.log(i);
// }

// // prog to print the numbers range from 1-100
// for (let i=1;i<=100;i++){
// //     console.log(i);
// }

// // pro to print the no. from 50 -75
// for (let i=50;i<=75;i++){
//     console.log(i);
// }



// for (let i=1;i<=10;i++){
//     console.log(i);
// }


// prog to print a no- multple of 2 range from 1 -100

// for (let i=0;i<=100;i=i+2){
//     console.log(i);
// }
// //  multi of 5 0-100
// for (let i=0;i<=100;i=i+5){
//     console.log(i);
// }
// // multiple of 10 from 0-1000
// for (let i=0;i<=1000;i=i+10){
//     console.log(i);
// }


//prog to num range from a and b  values given by the user
// let a=Number(prompt("enter the num"));
// let b=Number(prompt("enter the b num"));
// if (isNaN(a)||isNaN(b)||a>b){
//     alert("not posible")
// } 
// else{
//     for (let i=a;i<=b;i++){
//         console.log(i);
//     }
// }


// prog to print  multipplication table as pe user choice
// let num=Number(prompt("enter the num"));
// if(isNaN(num))
// {
//     alert("not posible")
// }
// else{

//     for(let i=1;i<=10;i++){
//         // console.log(num,"x",i,"=",num*i);
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }



//  prog to print multi table of range given by the user choice range from 
let num=Number(prompt("enter the multiple table value"))
let a=Number(prompt("enter the a num start range"));
let b=Number(prompt("enter the b num end range"));
if (isNaN(a)||isNaN(b)||isNaN(num)||a>b){
    alert("not posible")
} 
else{

    for(let i=a;i<=b;i++){
        // console.log(num,"x",i,"=",num*i);
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

