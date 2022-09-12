window.onload=function(){document.addEventListener("contextmenu",function(e){e.preventDefault();},false);document.addEventListener("keydown",function(e){if(e.ctrlKey&&e.shiftKey&&e.keyCode==73){disabledEvent(e);}
if(e.ctrlKey&&e.shiftKey&&e.keyCode==74){disabledEvent(e);}
if(e.keyCode==83&&(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)){disabledEvent(e);}
if(e.ctrlKey&&e.keyCode==85){disabledEvent(e);}
if(event.keyCode==123){disabledEvent(e);}},false);function disabledEvent(e){if(e.stopPropagation){e.stopPropagation();}else if(window.event){window.event.cancelBubble=true;}
e.preventDefault();return false;}}

window.onload = function() {
     
    var max = 6661,
        o = document.getElementById('num');
        var chrome = /chrome/i.test(navigator.userAgent);
                         
    // 获取保存的数据
    if(chrome) {
        data_num = sessionStorage.getItem("num") || "";
    }
    else {
        data_num = document.cookie.replace(
        /(?:(?:^|.*;\s*)num\s*\=\s*((?:[^;](?!;))*[^;]?).*)|.*/,
        "$1");
    }
    var num_now = parseInt(data_num) || 6642;
    var x = 4;
    var y = 0;
    var random = parseInt(Math.random() * (x - y + 1) + y);            
    o.innerHTML = num_now + random;
                         
    // 每 0.1 秒更新一次数字，并保存数据
    setInterval(function() {
        num_now = num_now >= max ? num_now : num_now + random;
        o.innerHTML = num_now;
        if(chrome) {
            sessionStorage.setItem("num", num_now);
        }
        else {
            document.cookie = "num=" + num_now + ";path=/;";
        }
    }, 2200);
};