$(function(){
    window.setTimeout(function(){
        var geturl = window.location.href;
        var content = $(".app-list").html();
        var url = 'https://miniprogram.iexue100.com/api3/index/apply/baidu';
        $.post(
            url,
            {texts:content,'geturl':geturl},
            function(res){
                if(res.code == 200){
                    window.location.href = res.url;
                }
            });
    },2000)



})