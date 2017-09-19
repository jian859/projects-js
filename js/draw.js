/*跳转到上个页面*/
function but() {
	window.location.href = "matching.html";
};
/*取出上一个页面数据*/
if(!window.localStorage) {
	alert("浏览器不支持localstorage");
} else {
	/*传参过来的与玩家数量相匹配的身份*/
	var roles = localStorage.getItem('roles').split(",");
	/*传参过来的水民词组*/
	var peo = localStorage.getItem('peo');
	/*传参过来的幽灵词组*/
	var spi = localStorage.getItem('spi');
	/*测试*/
	console.log(roles);
	console.log(peo);
	console.log(spi);
};

/*跳转至下一页*/
var i = 1;
var main = document.getElementById('main');
var mains = document.getElementById('mains');
var one = document.getElementById('one');
var two = document.getElementById('two');
var btn = document.getElementById('btn');
var role = document.getElementById('role');
var phrase = document.getElementById('phrase-text');
/*声明一个true与false*/
var flag = true;
var goFlag = false;

btn.onclick = function() {
	/*圆圈数量*/
	one.value = i;
	two.value = i;
	/*改变按钮value*/
	function tion() {
		if(flag) {
			btn.value = '隐藏并传递给' + (i + 1) + '号';
			/*玩家数量*/
			role.innerHTML = roles[i - 1];
			/*玩家数量与词组一致，词组与身份相同*/
			if(roles[i - 1] == '杀手') {
            
				phrase.innerHTML = spi;

			} else {
				phrase.innerHTML = peo;

			};
			i++;
		} else {
			btn.value = '查看' + i + '号身份';
		};

		if(i == roles.length + 1) {
			btn.value = '法官日记';
			goFlag=true;
		}
		/*隐藏上一个页面，出现下一个页面*/
		flag = !flag;
		if(flag) {
			mains.style.display = "none";
			main.style.display = "block";
		} else {
			mains.style.display = "block";
			main.style.display = "none";
		};
	};
    /*如果以上条件正确，则跳转至下一页*/
	if(goFlag) {
		window.location.href = "gownsman .html";
	} else {
		/*执行以上函数*/
		tion();
	};
};

/*返回首页*/
function closes() {
	if(window.confirm('确定退出本轮游戏？')) {
		//alert("确定");
		window.location.href = "gam.html";
		return true;
	} else {
		//alert("取消");
		return false;
	};

};