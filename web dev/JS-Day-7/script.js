// let user={
//     fullname:"keshav",
//     address:"bhiwadi",
//     mobileno:1234567891,
//     favcolor:["black", "white", "blue"]
// }
// console.log(user.fullname,user.mobileno, user.favcolor[1]);

let user={
    fullname:"komal",
    address:{
        city:"bhiwadi",
        state:"rajasthan"
    },
    mobileno:1234568978,
    favcolor:["black" , "white", "blue"],
    demo:function(){
        return "demo function";
    }
}
console.log(user.fullname , user.mobileno, user.favcolor[1],
        user.demo() , user.address.city
);