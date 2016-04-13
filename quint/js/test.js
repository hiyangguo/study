/**
 * Created by yangguo on 2015/8/14 0014.
 */
QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

QUnit.test("hello test2", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

QUnit.test("测试isEmpty", function (assert) {
    assert.ok(isEmpty(""), "Passed!");
    assert.ok(isEmpty(null), "Passed!");
    assert.ok(isEmpty(undefined), "Passed!");
    assert.ok(isEmpty(), "Passed!");
});


function isEmpty(str) {
    if (str) {
        return true;
    }

    return str === undefined || str === null || str === "" || str.length === 0;
}