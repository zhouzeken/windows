$(function(){
    var title = $(".Mean_word__1kJFQ").text();
    var text = $(".Morphology_morphology__11qUm").text();
    var params = {
        title: title,
        text: text
    }
    $.post('http://tt.resource.xxx/api/index/ceshi6/getCitaibianhuaInfo',params,function(res){
        if(res.status == 200){
            window.setTimeout(function(){
                //window.location.href = "http://www.iciba.com/word?w="+res.title;
            },2000)

        }
    })
})