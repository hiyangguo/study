const H_LENGTH = 6;
/**
 * 打印的类型
 * @type {{js: string, p: string,h*:string}}
 */
let printType = {
    js: 'js',
    p: 'p'
};

for (let i = 1, l = 6; i <= l; i++) {
    let _name = 'h' + i;
    printType[_name] = _name;
}

/**
 * 打印和执行
 * @param {string} content
 * @param {string} [type=js] type - 类型
 */
module.exports.print = function print(content, type) {
    if (process.env.DEBUG === 'true') {
        return;
    }
    type = type === undefined ? 'js' : type;

    let tplMap = new Map([
        ['js', `
\`\`\`javascript
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

    let tpl = tplMap.get(type);
    if (tpl) {
        console.log(tpl);
        if (type === 'js') {
            console.log(`\`\`\`bash
输出结果:`);
            try {
                eval(content);
            } catch (e) {
                console.log(e.message);
            }
            console.log('```');
        }
        return;
    }
    console.log(type + ` ${content}`);
}

module.exports.printType = printType;
