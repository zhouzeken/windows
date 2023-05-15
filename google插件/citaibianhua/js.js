$(function(){
    $("form").attr('id','submitForm');
    // $("head").append('<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">');
    var title = $(".cyh").text();
    var pinyin = $(".cyp").text();
    var text = $(".cynr").html();
    var params = {
        title: title,
        pinyin: pinyin,
        text: text,
    }
    $("input").addClass('formClassInput');
    $(".submit").removeClass('formClassInput');
    $.post('http://tt.resource.xxx/api/index/ceshi6/getChengyuInfo',params,function(res){
        if(res.status == 200){
            $('.formClassInput').val(res.title);
            window.setTimeout(function(){
                $("#submitForm").submit();
            },2000)

        }
    })
})