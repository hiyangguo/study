/**
 * Created by yangguo on 2015/9/24 0024.
 */
function deleteRepeat(arr) {
    console.time("Test");
    var obj = {},
        _arr = [];

    if (!isArray(arr)) {
        return arr;
    }

    for (var i = 0, len = arr.length; i < len; i++) {
        if (!((arr[i] + "") in obj)) {
            _arr.push(arr[i]);
        }
        obj[arr[i]] = "";
    }
    console.timeEnd("Test");
    return _arr;
}

function deleteAQ(arr) {
    console.time("Test");
    var _arr = [],
        pre;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != pre) {
            _arr.push(arr[i])
        }
        pre = arr[i]
    }
    console.timeEnd("Test");
    return _arr;
}

function isArray(o) {
    return Object.prototype.toString.call(o) == "[object Array]";
}

var arr = [1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 231, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23];
console.log(deleteRepeat(arr));
var arr = [1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 231, 2, 2, 34, 123, 321312, 123, 312312, 12, 23, 1, 2, 2, 34, 123, 321312, 123, 312312, 12, 23];
console.log(deleteAQ(arr));
