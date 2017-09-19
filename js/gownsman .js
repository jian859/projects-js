/*跳转到上个页面*/
function but() {
	window.location.href = "draw.html";
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
/*滚动条*/
var documentHeight=document.documentElement.offsetHeight;
var viewportHeight=window.innerHeight;
window.scrollTo(0,documentHeight-viewportHeight);

/*使出现的盒子与玩家数量一致*/
var rows = document.getElementById('rows');
/*声明一个空数组*/
var rowsArry = [];
/*声明一个空对象*/
var rowsNewArry;
/*使之循环出现与玩家数量一致的盒子*/
for(var i = 0; i < roles.length; i++) {
	/*把父级元素 的子节点值赋予给空对象*/
	rowsNewArry = '<div class="rowss">'+'<div class="mizutami" >' +
		/*传参过来的i的数据*/
		'<p class="test">' + roles[i] + '</p>' +
		'<p class="num">' + (i + 1 + '号') + '</p>' +
		'</div>'+
		'</div>';
	/*添加新的数组元素
	 * push 拿到元素
	 */
	rowsArry.push(rowsNewArry);
};
/*改变子节点的HTML赋值给空数组
 * join在原有的对象基础上添加新的对象
 */
rows.innerHTML = rowsArry.join('');
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
/*跳转到下个页面*/
function btn() {
	window.location.href = "gownsman-books.html";
};