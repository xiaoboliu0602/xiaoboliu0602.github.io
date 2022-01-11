/* jQuery.js */

// document.write("测试 JavaScript 外部脚本！<br>");

$(document).ready(function(){

    // 编写jQuery方法...
 
 });

 // page3 倒计时时钟页面触发（只触发一次）
 $(document).on("pagecreate","#page3", function(){
    // 1000ms 调用一次
    timeVar = window.setInterval("countDown()",1000);
    
});

// page3 倒计时函数
function countDown(){
    var time = document.getElementById("time-num"); // 获取初始时间

    if(time.innerHTML == 0){          // 等于 0 时清除计时，并跳转该指定页面
        clearInterval(timeVar);        // 停止计数
        window.location.href="#page4"; // 跳转页面
    }else{
        time.innerHTML = time.innerHTML-1;
    }
}
