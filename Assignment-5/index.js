//1
function editor(member){
    member.setter=function(){
        console.log(this.name);
    };
    return member;
}
let person={
    "name":"Arushi",
}
editor(person);
person.setter();


// 2
function editor(member){
    delete member.rollno;
    return member;
}
let person={
    "name":"Arushi",
    "rollno":51
}
console.log(editor(person));


//3
function editor(detail){
    if(detail.salary>500000){
        return "Dream";
    }else{
        return "NotDream";
    }
}
let person={
    "name":"Arushi",
    "age":22,
    "salary":1500000
}
console.log(editor(person));


// 4
function CheckObj(obj) {
    if (Object.keys(obj).length === 0) {
        return "false";
    } else {
        return "true";
    }
}
console.log(CheckObj({}));
console.log(CheckObj({"name":"Arushi"}));


// 5
function editor(obj1,obj2){
    return {...obj1,...obj2};
}
let obj1={
    "name":"Arushi"
};
let obj2={
    "last_name":"Sharma"
};
console.log(editor(obj1,obj2));


// 6
function editor(obj,n){
    // return (obj.id*n),(obj.houseno*n);
    obj.id=obj.id*n;
    obj.houseno=obj.houseno*n;
    return obj;
    
}
let obj={
    "id":3,
    "houseno":2
}
console.log(editor(obj,3));


//7
function func(p1,p2,p3){
    return obj.p1 + obj.p2 + obj.p3;
}
let obj={
    "p1":1,
    "p2":2,
    "p3":3
};
console.log(func(obj));


//8
function func(obj1,obj2){
    if(obj1.name==obj2.name && obj1.id===obj2.id){
        return "true";
    }else{
        return "false";
    }
}
let obj1={
    "name":"Arushi",
    "id":1
};
let obj2={
    "name":"Arushi",
    "id":2
};
console.log(func(obj1,obj2));