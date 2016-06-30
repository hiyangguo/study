/**
 * Created by yangguo on 2016/6/30 0030.
 */
module.exports.print = function print(content, type) {
    var type = type === undefined ? 'js' : type;
    var tplMap = new Map([
        ['js', `\`\`\`javascript
${content}
\`\`\`
        `],
        ['p', `
${content}
`]
    ]);
    for (let i = 1, l = 6; i <= l; i++) {
        tplMap.set('h' + i, new Array(i + 1).join('#') + ` ${content}`);
    }

    var tpl = tplMap.get(type);
    if (tpl) {
        console.log(tpl);
        if (type === 'js') {
            console.log('输出结果:');
            try {
                eval(content);
            } catch (e) {
                console.log(e.message);
            }
        }
        return;
    }
    console.log(type + ` ${content}`);
}
