function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function setCookie(name,value,time)
{
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getsec(str)
{
    var str1=str.substring(1,str.length)*1;
    var str2=str.substring(0,1);
    if (str2=="s")
    {
        return str1*1000;
    }
    else if (str2=="h")
    {
        return str1*60*60*1000;
    }
    else if (str2=="d")
    {
        return str1*24*60*60*1000;
    }
}
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
$(document).ready(function(){

    if(getCookie("1769_css_change")=="close"){
        $("body").addClass("mdui-theme-layout-dark");
    }else{
        $("body").removeClass("mdui-theme-layout-dark");
    }

    //开光灯触发
    var css_bt_status = 1;
    $("#css_change_bt").click(function(){
        if(css_bt_status == 1){
            css_bt_status = 2;
            var css_status = "open";
            if($("body").hasClass("mdui-theme-layout-dark")){
                css_status = "open";
            }else{
                css_status = "close";
            }
            setCookie("1769_css_change",css_status,"d10");
        }else{
            css_bt_status == 1;
        }

    });


});