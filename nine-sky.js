/*声明box与color的变量*/
var boxs = document.getElementsByClassName('box');
var colors = [
	'#FF0000',
	'#00FF00',
	'#0000FF',
	'#FFFF00',
	'#00FFFF',
	'#FF00FF',
	'#C0C0C0',
	'#000',
	'#A52A2A'
];
/*调用函数*/
function change_() {
	/*重置盒子的颜色为原始色*/
	for(var i = 0; i < 9; i++) {
		boxs[i].style.backgroundColor = '#FF6600';
	};
	/*让盒子与颜色匹配*/
	var indexArr = test();
	for(var i = 0; i < 3; i++) {
		boxs[indexArr[i]].style.backgroundColor = colors[indexArr[i]];
	};

};
/*循环三次出现不同的盒子*/
function test() {
	var indexArr = [];
	/*随机的三个数*/
	var num1 = Math.floor(Math.random() * 9);
	var num2 = Math.floor(Math.random() * 9);
	var num3 = Math.floor(Math.random() * 9);
	/*过滤上面随机的三个数使这三个数不重复*/
	while(num2 == num1) {
		num2 = Math.floor(Math.random() * 9);
	};
	while(num3 == num2 || num3 == num1) {
		num3 = Math.floor(Math.random() * 9);
	};
	/*得到的不重复的三个数*/
	indexArr.push(num1, num2, num3);
	/*把这三个数放进数组indexArr里*/
	return indexArr;
};
var timer;
/*按钮*/
var btns = document.getElementById('btn1');
var btnx = document.getElementById('btn2');
/*开始按钮*/
btns.onclick = function() {
	/*调用函数*/
	change_();
	/*清除时间*/
	clearInterval(timer);
	/*限定时间*/
	timer = setInterval(change_, 1000);
	btns.className = 'change';
	btnx.className = '';

};
/*结束按钮*/
btnx.onclick = function() {
	btns.className = '';
	btnx.className = 'change';
	/*清除时间*/
	clearInterval(timer);
	/*还原原始色*/
	setTimeout(function() {
	btnx.className = '';
		}, 2000);
	for(i = 0; i < 9; i++) {
		boxs[i].style.backgroundColor = '#FF6600';
	};
};