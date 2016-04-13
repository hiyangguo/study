/**
 * Created by yangguo on 2015/8/20 0020.
 */
define(function (require, exports, module) {
    var $ = require('jquery');
    var Velocity = require("../../test-modules/velocity/velocity.js");
    require("../../test-modules/velocity/velocity.ui.js");

    var seq = [
        {
            e: $("#div1"),
            p: {
                width: "300px"
            },
            o: {
                duration: "1000"
            }
        },
        {
            e: $("#div2"),
            p: {
                width: "300px"
            },
            o: {
                duration: "1000"
            }
        }
    ];

    Velocity.RunSequence(seq);
});
