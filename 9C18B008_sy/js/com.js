(function($) {
$.extend({
urlGet:function()
{
  var aQuery = window.location.href.split("?");  //取得Get参数
  var aGET = new Array();
  if(aQuery.length > 1)
  {
    var aBuf = aQuery[1].split("&");
    for(var i=0, iLoop = aBuf.length; i<iLoop; i++)
    {
      var aTmp = aBuf[i].split("=");  //分离key与Value
      aGET[aTmp[0]] = aTmp[1];
    }
  }
  return aGET;
 }
})
})(jQuery);

//根据传参flag=value替换参数或追加到url
function makeUrl(flag,value){
    var str = window.location.search;
    str = str.replace("?","");
    var ret="?";
    var str_arr = str.split("&");
        $.each(str_arr,function(k,v){
            var v_arr = v.split("=");
            if(v_arr[0] != flag && v_arr[0] != ""){
                if(k == 0){
                    ret += v_arr[0] + "=" + v_arr[1];
                    ret +="&";
                }else{
                    ret += v_arr[0] + "=" + v_arr[1];
                    ret +="&";
                }
                
            }
            
        });
        ret += flag + "=" + value;

    ret = window.location.protocol + "//" + window.location.host + window.location.pathname + ret;
    return ret;
}

//条件筛选指向
function sortUrl(obj,sort){
    var c = $(obj).attr("class");
    if(c == "active"){
        var s = sort+"_r";
    }else{
        var s = sort;
    }
    window.location.href=makeUrl("sort",s);
    
}


//已登录则不显示注册哥哥看-PT
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
var loginStatus = getCookie('user_id');
if(loginStatus>0){
    $("#log_status").hide()
}else{

}

//导航和左侧菜单颜色变换
$(document).ready(function() {
    //顶部二级菜单选中
    if($("#hide_tab").length > 0){
        //$("#self_tabs").html($("#hide_tab").html());
    }
    if(typeof(pageid)!='undefined'){
        //底部菜单选中
        $("footer").find("a").removeClass("mdui-bottom-nav-active");
        $("footer").find("a[id="+pageid+"]").addClass("mdui-bottom-nav-active");
        //左侧菜单选中
        $("#left-drawer").find("a").removeClass("menu-active");

        $("#left-drawer").find("a").each(function(){
            $("#left-drawer").find("a").removeClass("menu-active");
        });
        if(typeof(cid) !='undefined' && $("#cid").length < 1){
            //列表二级菜单
            $("#left-drawer #m_video").addClass("mdui-collapse-item-open");
            $("#left-drawer").find("a[id=m_list_"+cid+"]").addClass("menu-active");
        }else{
            //一级菜单
            $("#left-drawer #m_video").removeClass("mdui-collapse-item-open");
            $("#left-drawer").find("a[id="+pageid+"]").addClass("menu-active");
        }
    }
});


