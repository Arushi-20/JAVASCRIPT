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