$('.sidebar1 li').attr('id', function(i) {
   return 'child'+(i+1);
});


$(document).ready(function(){
    $(".button-sidebar").on("click" function(){
        $(".sidebar1").toggle();
    });
}); 


/*$(document).ready(function(){
    $(".button-sidebar").click(function(){
        $(".sidebar1").toggle();
    });
}); */
