/*跳转至首页*/
function but() {
	window.location.href = "gam.html";
};
//window.alert=alert;
///*弹出框*/
//
//function alert(data) {
//	var a = document.createElement("div"),
//		p = document.createElement("p"),
//		btn = document.createElement("div"),
//		textNode = document.createTextNode(data ? data : ""),
//		btnText = document.createTextNode("确定");
//	// 控制样式
//	css(a, {
//		"position": "fixed",
//		"left": "0",
//		"right": "0",
//		"top": "20%",
//		"width": "40rem",
//		"margin": "0 auto",
//		"border-radius": "10px",
//		"border": "solid 0.2rem #6e6e6e",
//		
//		"background-color": "#fff",
//		
//		"text-align": "center"
//	});
//	css(p, {
//		"color": "#255073",
//		"font-size": "4rem",
//	});
//	css(btn, {
//		"color": "#96abb9",
//		"font-size": "4rem",
//	});
//	// 内部结构套入
//	p.appendChild(textNode);
//	btn.appendChild(btnText);
//	a.appendChild(p);
//	a.appendChild(btn);
//	// 整体显示到页面内
//	document.getElementsByTagName("body")[0].appendChild(a);
//
//	// 确定绑定点击事件删除标签
//	btn.onclick = function() {
//		a.parentNode.removeChild(a);
//	};
//};
//
//function css(targetObj, cssObj) {
//	var str = targetObj.getAttribute("style") ? targetObj.getAttribute("style") : "";
//	for(var i in cssObj) {
//		str += i + ":" + cssObj[i] + ";";
//	};
//	targetObj.style.cssText = str;
//};
/*玩家配比*/
//拿到元素3个
var quantity_input = document.getElementById("quantity-input");
var ghost = document.getElementById("num1");
var people = document.getElementById("num2");
//声明一个变量num把输入框的数字赋值与它
var numb = quantity_input.value;
//给数字输入框 添加一个onchange事件
function test() {
	numb = quantity_input.value;
	alert(numb);
	if(numb >= 4 && numb <= 5) {
		ghost.value = 1;
		people.value = numb - 1;
	} else if(numb >= 6 && numb <= 8) {
		ghost.value = 2;
		people.value = numb - 2;
	} else if(numb >= 9 && numb <= 11) {
		ghost.value = 3;
		people.value = numb - 3;
	} else if(numb >= 12 && numb <= 15) {
		ghost.value = 4;
		people.value = numb - 4;
	} else if(numb >= 15 && numb <= 18) {
		ghost.value = 5;
		people.value = numb - 5;
	}else if( numb < 4) {
		quantity_input.value = "null";
		ghost.value = 'null';
		people.value = 'null';
		confirm('请输入正确玩家数字');
	} else if(numb > 18) {
		quantity_input.value = "null";
		ghost.value = 'null';
		people.value = 'null';
		confirm('请输入正确玩家数字');
	}else {
		quantity_input.value = "null";
		ghost.value = 'null';
		people.value = 'null';
		confirm('请输入玩家数字');
	}
};
test();
quantity_input.oninput=test;
/*声明发牌*/
var laun = document.getElementById('button');
/*词组限制*/
var people_text = document.getElementById('people-text');
var spirit_text = document.getElementById('spirit-text');
laun.onclick = function() {
	/*数组乱序*/
	var res = [];
	for(var i = 0; i < ghost.value; i++) {
		res.push('杀手');
	}
	for(var i = 0; i < people.value; i++) {
		res.push('平民');
	}
	res.sort(function() {
		return 0.5 - Math.random();
	});
	/*词组限制*/
	var phrase_people = people_text.value;
	var phrase_spirit = spirit_text.value;
	if(phrase_people == '' || phrase_spirit == '') {
		confirm('请输入正确的词组');
	} else if(phrase_people == phrase_spirit) {
		confirm('亲，水民词组和幽灵词组不能相同');
	} else if(!window.localStorage) {
		/*本地储存*/
		alert("浏览器不支持localstorage");
		return false;
	} else {
		localStorage.setItem('roles', res);
		localStorage.setItem('num', numb);
		localStorage.setItem('peo', phrase_people);
		localStorage.setItem('spi', phrase_spirit);
		launch();
	}
};
/*跳转至下一页*/
function launch() {
	window.location.href = "draw.html";
};