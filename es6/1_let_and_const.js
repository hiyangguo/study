#!/usr/bin/env node
//上面的内行代码 表示可以直接运行此代码
/**
 * Created by yangguo on 2016/6/30 0030.
 */

var print = require('./common').print;
var str = '';
{
    print('let和const命令', 'h1');
    print('let命令', 'h2');
    print('基本用法', 'h3');
    str = `
    let a = 10;
    var b = 1;
    console.log(a, b);`;
    print('js', str);

    print('for循环适用', 'h3');
    str = `
    let array = [1, 2, 3, 4, 5];
    for (let i = 0, len = array.length; i < len; i++) {
        console.log(array[i]);
    }`;
    print(str);
}

{
    print('var 和 let 的区别', 'h3');
    str = `
    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function() {
            console.log(i);
        };
    }
    a[6]();

    for (let i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    a[7]();`;
    print(str);
}

{
    print('不存在变量提升', 'h3');
    str = `
    console.log(foo); // 输出undefined
    console.log(bar); // 报错ReferenceError

    var foo = 2;
    let bar = 2;`;
    print(str);
}

{
    print('暂时性死区', 'h3');
    print('只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。', '>')
    str = `
    var tmp = 123;
    if (true) {
        tmp = 'abc'; // ReferenceError
        let tmp;
    }`;
    print(str);
    print(`上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。`, 'p');
}
