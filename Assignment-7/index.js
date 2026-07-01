//1
function find_digits(N){
    let count=0;
    if(N==0){
        return 1;
    }
    while(N>0){
        count++;
        N=Math.floor(N/10);
    }
    return count;
}
console.log(find_digits(12345));


//2
function find_five(N){
    let count=0;
    while(N>0){
        let digit=N%10;
        if(digit===5){
            count++;
        }
        N=Math.floor(N/10);
    }
    return count;
}
console.log(find_five(12345));
//Math.floor(N/10) means remove the decimal part
//98 / 10 = 9.8
//Math.floor(9.8) = 9

// 3
function findSum(N){
    let sum=0;
    for(let i=12;i<=N;i++){
        if(i%2===0){
            sum+=i;
        }
    }
    return sum;
}
console.log(findSum(20));


// 4
function number_sum(N){
    let sum=0;
    while(N>0){
        sum+=N%10;
        N=Math.floor(N/10);
    }
    return sum;
}
console.log(number_sum(12345));


// 5
function print_odd(N){
    let result=[];
    for(let i=3;i<=N;i+=2){
        result.push(i);
    }
    return result.join(" ");
}
console.log(print_odd(10));


// 6
function Print_pattern(N) {
    let pattern = "";
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    return pattern;
}
console.log(Print_pattern(5));


// 7
function prime_check(N){
    if(N<=1){
        return "NO";
    }
    for(let i=2;i<=Math.sqrt(N);i++){
        if(N%i===0){
            return "NO";
        }
    }
    return "YES";
}
console.log(prime_check(7));


// 8
function printNumber(N){
    let result=" ";
    for(let i=1;i<=N;i++){
        result+=i+" ";
    }
    return result.trim();
}
console.log(printNumber(5));


//9
function print_table(N){
    let result=" ";
    for(let i=1;i<=10;i++){
        result+=N*i+" ";
    }
    return result.trim();
}
console.log(print_table(2));

