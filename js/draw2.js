/*跳转到上个页面*/
function back() {
	window.location.href = "draw.html";
};
/*跳转至下一页*/
function launch() {
	window.location.href = "draw.html";
};
/*返回首页*/
function closes() {
if(window.confirm('确定退出本轮游戏？')){
                 //alert("确定");
                 window.location.href = "gam.html";
                 return true;
              }else{
                 //alert("取消");
                 return false;
             };
	
};