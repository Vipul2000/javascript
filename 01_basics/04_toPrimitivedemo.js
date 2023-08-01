/*let obj = {
    toString(){
        //by default gives [object object]
        return"98";
    }

    valueOf(){
        //by default it returns the same object
    }

};*/

let obj = {};
console.log(10 - obj); // obj.valueOf -> object, toString -> [object object]

let obj1 = {x:9, y:8}
console.log(100-obj1); // Output is NaN

let obj2 = {x:7, valueOf() {return 99}};
console.log(100-obj2); // output is 1

let obj3 = { x: 8, toString() {return "88"}};
console.log(90 - obj3); //output is 2

let obj4 = {x:7, toString() {return {}}};
console.log(100 - obj4); //output is typeerror exception

