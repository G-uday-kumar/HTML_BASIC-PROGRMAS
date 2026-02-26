let array=["uday","kumar","ganga","uday","yamuna"];
let ab=[1,[2,3,4,5],6,7,5];
// let a=[[[[[[[[[[[[[[1],2],3],4],5],6],5],4],5],6],5],4],3],0]
// // console.log(array.concat(ab));
// console.log(a.flat());//it use when array inside array it converts to flat array or a single array,(this is for only one array inside)
// console.log(a.flat(Infinity));//it use when array inside array it converts to flat array or a single array,(this is for only one array inside)
// console.log(array.includes("uday"));//it return true or false(checks only 1st elemnt if it has two element only it checks for the 1st one)
// console.log(array.includes("uday","ramachari"));//(//true)it return true or false(checks only 1st elemnt if it has two element only it checks for the 1st one)
// console.log(array.includes("uda"));//(//false)it return true or false(checks only 1st elemnt if it has two element only it checks for the 1st one)
// // console.log(a);
// console.log(array.indexOf("uday"));//()it give index, if things or elemnts not there means it result as a -1
// let x= "hello my name is uday kumar";
// let y=x.split("")
// let z=x.split(" ")
// console.log((y));
// console.log(z);
// console.log(z.join(""));
// console.log(z.join(" "));
// console.log(z.join("/"));


//last_index
// console.log(array.lastIndexOf("uday"));//it give the index value from last side


//pop..... extract last element
// console.log(array.pop());
// console.log(array.pop());
// // console.log(array.length);
// console.log(array.pop());
// // console.log(array.length);
// // console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.pop());
// console.log(array.pop());
// console.log(array);



//push......add element at the last


// console.log(array.push("kiccha sudeep"));//it returns the output in the form of a number 
// console.log(array);
// console.log(array.push("virat kohli"));
// console.log(array);


//reverse
// console.log(array.reverse());//it changes the order of an elemnts inside the array in order from first to last
// console.log(array.reverse());//it changes the order of an elemnts inside the array in order from first to last

//shift
// console.log(array.shift());//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(array.shift());
// console.log(array.shift());
// console.log(array.shift());
// console.log(array.shift());
// console.log(array.shift());


//unshift

// console.log(array.unshift("devilliers"));
// console.log(array);


//slice
let x=(array.slice(0,3).reverse());
let x1=(array.slice(3,).reverse());
console.log(x.concat(x1));