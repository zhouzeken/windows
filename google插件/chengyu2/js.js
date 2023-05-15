$(function(){
    $("head").append('<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">');
    var text = $(".entry-content").html();
    var params = {
        text: text
    }
    $.post('http://tt.resource.xxx/api/index/ceshi6/chengyu2',params,function(res){
        if(res.status == 200){
            window.setTimeout(function(){
                //window.location.href = "http://www.iciba.com/word?w="+res.title;
            },1000)

        }
    })
})