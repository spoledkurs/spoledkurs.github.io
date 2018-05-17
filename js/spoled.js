$('.sidebar1 li').attr('id', function(i) {
   return 'page'+(i+1);
});

$(document).ready(function(){
    $(".button-sidebar").click(function(){
        $(".sidebar1").toggle();
    });
});
