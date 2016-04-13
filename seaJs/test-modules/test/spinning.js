/**
 * Created by hypers-godfery on 2015/6/15.
 */
define(function (require, exports, module) {
	var $ = require('jquery');

	function Spinning(container) {
		this.container = $(container);
		this.icons = this.container.children();
		this.spinnings = [];
	}

	module.exports = Spinning; //暴露的接口

	Spinning.prototype.render = function () {
		this._init();
		this.container.css('background', 'none');
		this.icons.show();
		this._spin();
	}

	Spinning.prototype._init = function () { //初始化图片
		var spinnings = this.spinnings;

		$(this.icons).each(function (n) {
			var startDeg = random(360);
			var node = $(this);
			var timer;

			node.css({
				top: random(40),
				left: n * 50 + random(10),
				zIndex: 1000
			}).hover(function () {
				node.fadeTo(250, 1).
					css('zIndex', 1001).
					css('transform', 'rotate(0deg)');
			}, function () {
				node.fadeTo(250, .6).css('zIndex', 1000);
				timer && clearTimeout(timer);
				timer = setTimeout(spin, Math.ceil(random(10000)));
			});

			function spin() {
				node.css('transform', 'rotate(' + startDeg + 'deg)');
			}

			spinnings[n] = spin;
		});

		return this;
	}

	Spinning.prototype._spin = function(){ //为所有图片执行旋转事件
		$(this.spinnings).each(function(i, fn) {
			setTimeout(fn, Math.ceil(random(3000)));
		});

		return this;
	}

	$("1").hover();

	function random(x) { //返回一个随机数
		return Math.random() * x;
	};
});
