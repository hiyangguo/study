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

/**
 * 方法一
 * @param tasks
 * @param cb
 */
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

/**
 * 方法二
 * @param tasks
 * @param cb
 */
function seq2(tasks, cb) {
    tasks.reduceRight(function(cb, task) {
        return function() {
            return task(cb);
        };
    }, cb)();
}

seq2(tasks, function() {
    console.log('all Done');
});
