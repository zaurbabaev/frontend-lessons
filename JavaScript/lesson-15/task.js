const obj = {
    objName: "Movie",
    getName: function () {
        return this.objName;
    },

    getAnonimName: () => {
        return this.objName;
    }
}

console.log(obj.getAnonimName())

let nums = [-4, 1, 10, 400, -100];
nums.sort();
console.log(nums[nums.length])

let conservation = true;
let def = false;
let acc = 100;

if (conservation && !def) {
    ++acc;
}
console.log(acc);

let cat = { type: 'lion' };

cat.size = 'large';

let copyCat = { ...cat };

cat.type = 'tiger';

console.log(copyCat.type, copyCat.size);

const obj1 = { first: 10, second: 30, first: 50 };
console.log(obj1);

function sum(num1, num2=2, num3=3){
    return num1+num2+num3;
}

let values=[1,5];
let total=sum(4, ...values);

console.log(total);

const data = {list: ["2","4","6","8"]};
const newList=data.list.map(elem=> elem+=5);

console.log(newList);

let language= "JAVASCRIPT";

const getchangeName=function(){
    let language="Html and Css";
}

getchangeName();

console.log(language);

let list=[];

list.push(4,5,6,7);
list.unshift(1);
list.shift();
list.unshift(3);

const filteredList=list.filter(num=> num>2 && num<7);
console.log(filteredList);

let greeting;
greeting={};
console.log(greeting)


let c= {greeting:"Hey!"};
let d;
d=c;
c.greeting="Hello";
console.log(d.greeting);

const shape={
    readius:10,
    diametr(){
        return this.readius*2;
    },
    perimetr:()=> 2*Math.PI*this.readius
};

console.log(shape.diametr());
console.log(shape.perimetr());

function sayHello(){
    console.log(name);
    console.log(age);
    var name="Lydia";
    let age=21;
}

sayHello();