//1
function count(S){
    let countA=0;
    let countD=0;
    for(let ch of S){
        if(ch=='A') countA++;
        else if (ch=="D") countD++;
    }
    return [countA, countD];
}
console.log(count("AabbDd"));


//2
function countCharacters(S) {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (S.indexOf(S[i]) !== S.lastIndexOf(S[i]) &&
            S.indexOf(S[i]) === i) {
            count++;
        }
    }
    return count;
}
console.log(countCharacters("AABBC"));


//3
function count(S){
    let count=0;
    for(let i=0;i<S.length;i++){
        if(S[i]=='a' || S[i]=='e' || S[i]=='i' || S[i]=='o' || S[i]=='u' || S[i]=='A' || S[i]=='E' || S[i]=='I' || S[i]=='O' || S[i]=='U'){
            count++;
        }
    }
    return count;
}
console.log(count("Arushi"));


//4
function func(s1,s2){
    return s1+s2;
}
console.log(func("Arushi ","Sharma"));


// 5
function count(S){
    let count=0;
    for(let ch of S){
        count++;
    }
    return count;
}
console.log(count("Arushi"));


// 6
function game(S){
    let countA=0;
    let countD=0;
    for(let i=0;i<S.length;i++){
        if(S[i]=="A") countA++;
        else if(S[i]=="D") countD++;
    }

    if(countA>countD) return "Aditya";
    else if(countA<countD) return "Danish";
    else return "Draw"
}
console.log(game("AAADDDD"));


7
function joinStrings(s1,s2) {
    return s1.concat(s2);
}
console.log("Arushi","Sharma");


//8
function Palindrome(S){
    let reversed="";
    for(let i=S.length-1;i>=0;i--){
        reversed+=S[i];
    }
    if(S===reversed){
        return "true";
    }else{
        return "false";
    }
}
console.log(Palindrome("Arushi"));


// 9
function Reverse_String(S) {
    let reverse="";
    for(let i=S.length-1;i>=0;i--){
        reverse+=S[i];
    }
    return reverse;
}
console.log(Reverse_String("Arushi"));


// 10
function String_Match(s1,s2) {
    if(s1===s2){
        return "YES";
    }else{
        return "NO";
    }
}
console.log(String_Match("Arushi","Arushi"));


//11
function Replace(S, pattern, text) {
    return S.replace(pattern,text);
}
console.log(Replace("hi, I am Arushi","Arushi","Sharma"));


//12
function Split_the_String_function(s) {
    return s.split(" ");
} 
console.log(Split_the_String_function("I am Arushi"));


//13
function Count_Vowels(S){
    let count=0;
    for(let i=0;i<S.length;i++){
        if(S[i]=='a' || S[i]=='e' || S[i]=='i' || S[i]=='o' || S[i]=='u' || S[i]=='A' || S[i]=='E' || S[i]=='I' || S[i]=='O' || S[i]=='U'){
            count++;
        }
    }
    return count;
}

function Count_Consonent(S){
    let count=0;
    for(let i=0;i<S.length;i++){
        if(S[i]!=='a' || S[i]!=='e' || S[i]!=='i' || S[i]!=='o' || S[i]!=='u' || S[i]!=='A' || S[i]!=='E' || S[i]!=='I' || S[i]!=='O' || S[i]!=='U'){
            count++;
        }
    }
    return count;
}

console.log(Count_Vowels("Arushi"));
console.log(Count_Consonent("Arushi"));




