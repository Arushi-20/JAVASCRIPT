//1
function Find_Prod(arr){
    let product=1;
    for(let i=0;i<arr.length;i++){
        product*=arr[i];
    }
    return product;
}
console.log(Find_Prod([1,2,3,4,5]));


// 2
function Find_Sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(Find_Sum([1,2,3,4,5]));


//3
function Find_Count(N,K,arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===K){
            count++;
        }
    }
    return count;
}
let arr=[1,2,3,2,3,4,2]
let K=2;
console.log(Find_Count(arr.length,K,arr));


//4
function findEvenOdd(A, N) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] % 2 === 0) {
            evenSum += A[i];
        } else {
            oddSum += A[i];
        }
    }
    return [evenSum, oddSum];
}
let A = [1, 2, 3, 4, 5];
console.log(findEvenOdd(A, A.length));



//5
function Find_Num(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            return "YES";
        }
    }
    return "NO";
}
console.log(Find_Num([1,2,3],3));


//6
function highAge(n, arr){
    let result=[];
    for(let i=0;i<n;i++){
        if(arr[i]>=18){
            result.push(arr[i]);
        }
    }
    return result;
}
let arr=[15,29,32,42]
console.log(highAge(arr.length,arr));


//7
function inc_Arr(n,arr){
    for(let i=0;i<n;i++){
        arr[i]+=1;
    }
    return arr;
}
let arr=[1,2,3,4,5]
console.log(inc_Arr(arr.length, arr));


//8
function isAllPass(n, arr){
    for(let i=0;i<n;i++){
        if(arr[i]<32){
            return "NO";
        }
    }
    return "YES";
}
let arr=43;
console.log(isAllPass(5,[32,43,54,65,76]));


//9
function uniqueShirts(N, Arr) {
    let count = {};
    for (let color of Arr) {
        count[color] = (count[color] || 0) + 1;
    }
    let unique = 0;
    for (let color in count) {
        if (count[color] === 1) {
            unique++;
        }
    }
    return unique;
}
console.log(uniqueShirts(6,[3,2,4,1,2,3]));


//10
function MinMax(arr, N) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < N; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}
let arr = [3, 5, 1, 8, 2];
console.log(MinMax(arr, arr.length));


