/**
 * Created by yangguo on 2015/9/9 0009.
 */
var React = require('react');
var QuestionItem = require('./QuestionItem.js')

module.exports = React.createClass({
    render: function () {
        var questions = this.props.questions;
        var o = this;
        if (!Array.isArray(questions)) {
            throw new Error('this.prop.questions必须是数组');
        }

        var questionComps = questions.map(function (qst) {
            return <QuestionItem key={qst.key}
                                 questionsKey={qst.key}
                                 title={qst.title}
                                 description={qst.description}
                                 voteCount={qst.voteCount}
                                 onVote={o.props.onVote}/>;
        });
        return (
            <div id="questions" className="">
                {questionComps}
            </div>
        )
    }
})
