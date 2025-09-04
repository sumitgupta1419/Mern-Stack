function nice(name){
console.log("Hey " + name + " you are nice");
console.log("Hey " + name + "  you are good");
console.log("Hey " + name + " your tshirt is nice");
console.log("Hey " + name + " your course is also good");

}
nice("rohan")
nice("shivam")



// console.log("Hey Harry you are nice");
// console.log("Hey Harry you are good");
// console.log("Hey Harry your tshirt is nice");
// console.log("Hey Harry your course is also good");



function sum(a,b,c=3){
    // console.log(a+b);
    return a + b + c
}
result1 = sum(3,5)
result2= sum(7,5)
result3= sum(13,5,1 )

console.log("the sum of this number is",result1)
console.log("the sum of this number is",result2)
console.log("the sum of this number is",result3)

// ARROW Function

const func1 = (x)=>{
    console.log(" I am an arrow function",x)

}
func1(34);
func1(33);
func1(46);