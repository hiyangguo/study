/**
 * Created by yangguo on 2015/9/9 0009.
 */
var React = require('react');

module.exports = React.createClass({
    render:function(){
        return (
            <button onClick={this.props.onToggleForm} id="add-question-btn" className="btn btn-success">添加问题</button>
        )
    }
});
