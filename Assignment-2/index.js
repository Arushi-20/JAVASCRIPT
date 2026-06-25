//1
// let M = parseInt(prompt("Enter the marks of student"));
// switch (true) {
//     case (M >= 0 && M <= 10):
//         console.log("E");
//         break;

//     case (M >= 11 && M <= 20):
//         console.log("D");
//         break;

//     case (M >= 21 && M <= 30):
//         console.log("C");
//         break;

//     case (M >= 31 && M <= 40):
//         console.log("B");
//         break;

//     case (M >= 41 && M <= 50):
//         console.log("A");
//         break;

//     default:
//         console.log("Invalid Marks");
// }

//2
// let ch = prompt("Enter the Alphabet"); // Input character

// switch (ch.toLowerCase()) {
//     case 'p':
//         console.log("PrepBytes");
//         break;

//     case 'z':
//         console.log("Zenith");
//         break;

//     case 'e':
//         console.log("Expert Coder");
//         break;

//     case 'd':
//         console.log("Data Structure");
//         break;

//     default:
//         console.log("Invalid Character");
// }

//3
// let a=4
// let b=5
// let c=7
// if(a==b && b==c){
//     console.log(-1-1);
// }
// else{
//     console.log(Math.max(a,b,c));
    
// }

//4
let arr=[32,54,11]
arr.sort();
console.log(arr[1]);


//5
let a=60
let b=60
let c=60
sum = a+b+c;
if(sum>=120 && sum<=180){
    console.log("Obtuse");
    
}else if(sum>=0 && sum<120){
    console.log("Acute");
}
else{
    console.log("Invalid");
}
