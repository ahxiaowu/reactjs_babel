/*
"use strict"
let a = [1,2],
    b = [...a,'3'];

document.body.innerHTML = b;
console.log(b);
*/

"use strict";

/*// let 作用域内的变量，在本作域内有效
if(true){
    let a = 10;
}

console.log(a);*/


// 数组解构
/*var [a,b,c] = [1,2,3];
console.log(a);
console.log(b);
console.log(c);*/

/*var [a,[b,c]] = [1,[2,3]];
console.log(a);
console.log(b);
console.log(c);*/

/*var [a,b,c] = new Set([4,5,6]);
console.log(a);
console.log(b);
console.log(c);*/

/*var [a=1,b=a] = [];
console.log(a);
console.log(b);*/

/*var [a=1,b=a] = [2,3];
console.log(a);
console.log(b);*/


// 对象的解析m赋值
/*var json = {
    a:1,
    b:2
};
console.log(json.a);
console.log(json.b);*/


/*var {a,b} = {a:3,b:4};
console.log(a);
console.log(b);*/

/*var {a:c,b} = {a:3,b:4};
console.log(c);
console.log(b);*/

/*var {a,b} = {a:1,b:[2,3]};
console.log(a);
console.log(b);
*/

/*
var json = {
    a:[
    'aaaaaa',
    {b:'双色球'}
    ]
};

var {a:[name,{b}]} = json;
console.log(name);
console.log(b);*/

// 函数参数的解构赋值

/*function fn(a,b){
    console.log([a,b]);
}
fn(1,2);*/

/*function fn([a,b]){
    console.log([a,b]);
}

fn([3,4]);*/

/*function fn({a,b}){
    console.log([a,b]);
}
fn({a:1,b:2});*/

/*
// 默认值
function fn({a=10,b=20} = {}){
    console.log([a,b]);
}
fn();
*/

/*function fn({a=10,b=20} = {}){
    console.log([a,b]);
}
fn({a:5});*/

/*function fn({a,b} = {a:1,b:2}){
    console.log([a,b]);
}
fn();
fn({a:10});
fn({a:10,b:20});
fn({});*/


// Class 类

/*function Preson(name,age){
    this.name = name;
    this.age = age;
}

var p = new Preson('小明',2);
console.log(p.name);
console.log(p.age);*/


/*class Preson{

    say(){
        console.log('我说话了');
    }
}

var p = new Preson();
p.say();*/


// 类的继承
/*
class Preson{

    constructor(name){
        this.name = name;
    }

    say(){
        console.log(this.name+' 说话了');
    }
}

var p = new Preson('小明');
p.say();


class Man extends Preson{
    constructor(name){
        super(name);
    }
    say(){
        console.log('这是被覆盖的方法 '+this.name);
    }
}

var man = new Man('男人');
man.say();


class Woman extends Preson{
    constructor(name){
        super(name);
    }
}

var w = new Woman('女人');
w.say();*/


// 类的 constructor

/*class Preson{

    // 构造方法
    constructor(name){
        this.name = name;
    }

    say(){
        console.log(this.name+' 说话了!');
    }
}
var p = new Preson('小明');
p.say();*/

// 静态方法

/*class Preson{

    static say(name){
        console.log('say:'+name);
    }
}
Preson.say('小明');*/


// 导入

/*//import {uname,age} from './preson';
//console.log(uname);
//console.log(age);
// 通配符
import * as data from './preson';
console.log(data.name);
console.log(data.age);*/

/*import fn from './preson';
fn();*/



// 函数参数的默认值
/*
function fn(a=10,b=20){
    console.log([a,b]);
}
fn();*/

// 函数的 rest ...

/*function fn(...data){
    data.forEach(d => {
        console.log(d);
    });
    // console.log(data);
}
fn(1,2,3);

var a = [1,2,3],
    b = [...a,4];
console.log(b);*/


// 箭头函数

/*function fn(name){
    return name;
}*/

/*var fn = name => name;
console.log(fn('小明'));*/

/*var fn = (name,age) => name+age;
console.log(fn('小明',2));*/

/*var fn = (name,age) => {
    return name + "++++++++++"+age;
};
console.log(fn('小明',2));*/


/*var fn = a => a == 0;
console.log(fn(0));*/


// Map
/*var data = new Map();
console.log(data);

// 添加 set(key , value);
data.set('a',1);
data.set('b',2);
data.set('c',3);
console.log(data);

// 获得 get(key);
console.log(data.get('a'));

// 成员的个数 Size
console.log(data.size);

// 删除delete
data.delete('a');
console.log(data);

// 查找 has
console.log(data.has('a'));

// 遍历 forEach
data.forEach((value,key) => {
    console.log(key+'==='+value);
});*/