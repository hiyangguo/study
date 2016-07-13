#!/usr/bin/env node
/**
 * Created by yangguo on 2016/7/13 0013.
 */
// process.env.DEBUG = true;
var common = require('./common');
var print = common.print;
var printType = common.printType;
{
    print('变量的解构赋值', printType.h1);
    print('数组的解构赋值', printType.js);
    print('基本用法', printType.h3);

    print(`本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。`, printType.p);
    print(`let [a,b,c] =[1, 2, 3];
console.log(a, b, c);

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz);

let [head, ...tail] = [1, 2, 3, 4];
console.log("head", head);
console.log("tail", tail);

let [x, y, ...z] = ['a'];
console.log("x:", x);
console.log("y:", y);
console.log("z:", z);`);

    print('如果解构不成功，变量的值就等于undefined。', printType.p);
    print(`var [foo] = [];
console.log(foo);
var [bar, foo] = [1];
console.log(bar, foo);`);
    print('以上两种情况都属于解构不成功，foo的值都会等于undefined。', printType.p);

    print('另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。', printType.p);

    print(`let [x, y] = [1, 2, 3];
    console.log(x, y);

    let [a, [b], d] = [1, [2, 3], 4];
    console.log(a, b, d);
`);
    print('如果等号的右边不是数组（或者严格地说，不是可遍历的结构），那么将会报错。', printType.p);
    print(`{
    let [foo] = 1;
    console.log(foo);
}`);
    print(`{
        let [foo] = false;
        console.log(foo);
    }`);

    print(`{
        let [foo] = NaN;
        console.log(foo);
    }`);

    print(`{
        let [foo] = undefined;
        console.log(foo);
    }`);

    print(`{
        let [foo] = null;
        console.log(foo);
    }`);

    print(`{
        let [foo] = {};
        console.log(foo);
    }`);

    print('对于Set结构，也可以使用数组的解构赋值。', printType.p);

    print('默认值', printType.h2);
    print('解构赋值允许指定默认值。', printType.p);
    print(`var [foo = true] = [];
console.log(foo);
[x, y = 'b'] = ['a']; // x='a', y='b'
console.log(x, y);
[x, y = 'b'] = ['a', undefined]; // x='a', y='b'
console.log(x, y);`);
    print(`注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。`, printType.p);

    print(`如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。`, printType.p);
    print(`function f() {
    console.log('aaa');
}
let [x = f()] = [1];`);
    print(`上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。`, printType.p);
    print(`let x;
if ([1][0] === undefined) {
  x = f();
} else {
  x = [1][0];
}`);

    print(`默认值可以引用解构赋值的其他变量，但该变量必须已经声明。`, printType.p);
    print(`let [x = 1, y = x] = [];
console.log(x,y);`);

    print(`let [x = 1, y = x] = [2];    // x=2; y=2
console.log(x, y);`);

    print(`let [x = 1, y = x] = [1, 2]; // x=1; y=2
console.log(x, y);`);

    print(`let [x = y, y = 1] = [];  // ReferenceError
console.log(x, y);`);
    print(`上面最后一个表达式之所以会报错，是因为x用到默认值y时，y还没有声明。`, printType.p);

    print(`对象的解构`, printType.h2);
    print(`解构不仅可以用于数组，还可以用于对象。`, printType.p);
}
