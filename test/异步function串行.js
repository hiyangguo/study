/**
 * Created by yangguo on 2016/5/24 0024.
 */
/**
 *
 * [题目及参考答案]{@link https://git.hypers.com/F2E/exam/blob/master/samples/seq.js}
 */


var tasks = [1, 2, 3, 4, 5];
tasks = tasks.map(function(i) {
    return function(cb) {
        setTimeout(function() {
            console.log(i);
            cb();
        }, Math.random() * 500 | 0);
    }
});
function seq(tasks, cb) {
    var i = 0;
    runTask();

    function runTask() {
        var task = tasks[i];
        task(function() {
            i++;
            if (i !== tasks.length) {
                runTask();
            } else {
                cb();
            }
        });
    }
}

seq(tasks, function() {
    console.log('all Done');
});


// function seq(tasks, cb) {
//     /* 请实现这个 seq 方法 */
//
//     // 下面是样例答案一
//     tasks.reduceRight((cb, task) => () => task(cb), cb)();
//
//     tasks.reduceRight(function(cb, task) {
//        task(cb);
//     }, cb);
//     return;
//
//     // 下面是样例答案二
//     tasks = tasks.slice();
//     (function next() {
//         var t = tasks.shift();
//         if (t) t(next);
//         else cb();
//     })();
// }

// function seq(tasks, cb) {
//     // 下面是样例答案一
//     tasks.reduceRight(function(cb, task) {
//         task(cb);
//     }, cb);
// }
