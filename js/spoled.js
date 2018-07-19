$('.sidebar1 li').attr('id', function(i) {
   return 'child'+(i+1);
});


$(document).ready(function(){
    $(".button-sidebar").on("click", function(){
        $(this).children(".sidebar1").toggle("slow");
    });
}); 


