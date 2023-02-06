// let x = [1, 7, -3, 9];

// let max = x[2];

// for (let val of x){
//     console.log(max);// -3 // 1 // 7  // 7

//     if (val > max )  { // false // true
//         // where is the yes or no outcome defined?
//         max=val;// 1 // 7 // 9
//         console.log(max);// 1 // 7 // 9
//     }
//     // where is the else part?
// }
// console.log(max);

// let numbers = [1, 7, 20, 18,20,44,5,90];

// let sum = numbers[0] +numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6];

// // index  ==   for in   standard for loop
// // value  ==  for in   for of   standard for loop
// let avg = sum/4;
// console.log(avg);

// let box = 0;

// for(let d of numbers){
//     box = box + d;
//     // box = 0 + 1 = 1
//     // box = 1 + 7 = 8
//     // box = 8 + 20 = 28

// }
// console.log(box/numbers.length);




let smallNum = [-1, 7, 20, 18,-20,44,-5,90];

let tiny = smallNum[0];
console.log(tiny)

for (let val of smallNum){
    if (tiny > val){
        tiny = val;
    }
   
    
}

console.log(tiny)

