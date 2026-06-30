//1
function min_angle(h,m){
    let hourAngle=30*h + 0.5*m;
    let minuteAngle=6*m;
    let diff=Math.abs(hourAngle-minuteAngle);
    return Math.min(diff,360-diff);
}
console.log(min_angle(5,30));


//2
function leap(year){
        if(year%400==0 || (year%4==0 && year%100!=0)){
            return "Leap Year";
        }else{
            return "Not a Leap Year";
        }   
}
console.log(leap(2026));


// 3
function perfect_number(num){
    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i===0){
            sum+=i;
        }
    }
    if(sum===num){
        return "YES";
    }else{
        return "NO"
    }  
}
console.log(perfect_number(96345));

//4
function Reverse_Number(N){
    let reverse=0;
    while(N>0){
        let digit=N%10;
        reverse=reverse*10+digit;
        N=Math.floor(N/10);
    }
    return reverse;
}
console.log(Reverse_Number(254));

//5
function Substring_Check(S1,S2){
    return S2.includes(S1);
}
console.log(Substring_Check("World","HelloWorld"));




