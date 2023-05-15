$(function(){
    var text = $("body").html();
    var params = {
        text: text,
        url: window.location.pathname
    }

    $.post('http://tt.resource.xxx/api/index/dictionary/hanyu',params,function(res){
        if(res.code == 200){
            window.location.href = res.url;
        }
    })

    window.setInterval(function(){
        window.location.reload();
    },15000);
})