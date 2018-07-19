$('.sidebar1 li').attr('id', function(i) {
   return 'child'+(i+1);
});

$('.sidebar1').hide(); 

/*$(document).ready(function(){ */
    $('.module-name').children().on('click', function(){
        $(this).children('.sidebar1').toggle('slow');
    });
/*}); */


/* $('.module-name').children().click(function(){
    $(this).children('.sidebar1').toggle('slow');     
}).children('.sidebar1').click(function (event) {
    event.stopPropagation();
}); */

/*$('.module-name').children().click(function(){

    $(this).children('.sidebar1').slideToggle('slow');     
});*/ 


