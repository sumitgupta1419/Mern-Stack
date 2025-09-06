// let obj ={
//     a:1,
//     b:"harry"

// }
// console.log(obj)

// let animal ={
//     eats:true
// };

// let rabbit ={
//     jumps:true
// };

// rabbit.__proto__=animal; 

class animal{
    constructor(name){
        this.name=name
        console.log("object is created...")
    }
    eats(){
        console.log("kha rha hu ")
    }
    jumps(){
        console.log("kud rha hu")  
    }


}

class lion extends animal{
    constructor(name) {
        super(name)
        this.name=name
        console.log("object is created and he is a lion")
        
    }
    eats(){
        super.eats()
       console.log("kha rha hu roaarrr")
    }

}

let a = new animal("bunny");
console.log(a)

let l = new lion("shera")
console.log(l)