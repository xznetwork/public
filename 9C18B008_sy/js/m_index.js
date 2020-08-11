$(document).ready(function() {

 var refresh_open = true;
$("#pull-up-label").click(function(){
     if(refresh_open){
             refresh_open = false;
             $("botton[id='loading_icon']").css("display","");
             $("#pull-up-label").css("display","none");

             $.post('template/ahao04wap/html/more', {
                 page:page+1,
                 pagesize:pagesize
             },
            function (response) {
                $("botton[id='loading_icon']").css("display","none");
                $("#pull-up-label").css("display","");

                if(response.indexOf('id="nomore"')>-1){
                    $("#pull-up-label").html("无更多内容！");
                    $("#pull-up-label").attr("disabled","");
                }else{
                    $("#uiListfree").append(response);
                   page +=1;
                   setTimeout(function(){
                       refresh_open = true;
                   },2000);
                }
            }, 'html');

         }
});


});