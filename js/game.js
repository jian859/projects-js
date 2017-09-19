var sim = document.getElementsByClassName('simplify');
/*跳转至玩家配比页面*/
function bn() {
	window.location.href = "matching.html";
};
var content = document.querySelector('.content-title');

var guess = document.querySelector('.guess');

var idiocy = document.querySelector('.idiocy');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var gues = guess.value;
var idioc = idiocy.value;
var flag=true;
function img() {
	flag=!flag;
	if(flag) {
		content.innerHTML = '杀人游戏';
		guess.value = '警版';
		idiocy.value = '3.0';
		two.style.background = '#f60';
		one.style.background = '';
	}else{
		content.innerHTML = '捉鬼游戏';
		guess.value = '猜词版';
		idiocy.value = '杀人版';
		one.style.background = '#f60';
		two.style.background = '';
	};
};