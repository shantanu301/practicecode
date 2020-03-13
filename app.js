//// using var ///////

/* 
function myVar(){
    var a = 40;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a)
}
*/
// myVar();


///// using let /////

// function myLet(){
//     let b = 20;
//     if(true){
//         let b = 21;
//         console.log(b);
//     }
//     console.log(b)
// }

// myLet();

//// for loop ////

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }


// array ///

// const colors = [];

// colors.push("red");
// colors.push("blue");
// console.log(colors)


/// class ///
/*
class User{
    constructor(fname,lname,email,mobile){
        this.fname = fname,
        this.lname = lname,
        this.email = email,
        this.mobile = mobile
    }

   static registredCount(){
        console.log("50+ user has been registred");
    }

    registred(){
        console.log(this.fname +" "+ this.lname + " has been registred");
    }

}

let user1 = new User("shantanu","dabhole","example@gmail.com",96048493848);
user1.registred();
User.registredCount();

//inheritance
class member extends User{
    constructor(fname,lname,email,mobile,memberPackages){
        super(fname,lname,email,mobile)
        this.memberPackages = memberPackages
    }

   static message(){
        console.log("member has been suscribed");
    }

    msg(){
        console.log(this.fname + " has been suscribed" + this.memberPackages);
    }
}

let mike = new member("rohan","patil","patil@gmail.com",94858585,"platinum");
mike.msg();
member.message();
*/

// template literals

/* 

let name = "shantnau";
function upper(txt){
    return txt.toUpperCase();
}
let b = `
        <h1>${upper('hello')} ${name}</h1>
        <p>this is tempalte literals</p>
        `;

document.getElementById("intx").innerHTML = b;

*/


//string method (startsWith(),endsWith(),include());

let someTxt = "hello, my name is shantannu and i love javascript";

//console.log(someTxt.startsWith("hellso"))
//console.log(someTxt.endsWith("javascript"))
//console.log(someTxt.includes("first"))
//console.log(Number.isInteger(Infinity))


// let num1 = [1,2,3];
// let num2 = [4,5,6];

// function sum(a,b,c){
//     return a+b+c;
// }

// console.log(sum(...num2))

// let num = num1.concat(num2);

// console.log(num)



//set method
let numbers = [22,33,44,55];

let final = new Set(numbers);
final.add(88)
console.log(final)

//map method

let mp = new Map([["a","hello"],["b","goodby"]]);
mp.set("c","by")
console.log(mp)

//weakSet method

let carSet = new WeakSet();

let car1 = {
    carName:"maruti",
    price:40193
}

let car2 = {
    carName:"honda",
    price:234234
}

carSet.add(car1);
carSet.add(car2);
console.log(carSet)

//weakMap method

let weak = new WeakMap();

let per1 = {
    id:1
}

let perDetail = {
    name:"shantanu",
    location:"pune"
}
weak.set(per1,perDetail);
console.log(weak)