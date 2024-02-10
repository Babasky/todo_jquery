$(document).ready(function () {
    $('#task').change(function(){
        var task = $(this).val();
        $('ul').append('<li>' + task +  '<i class="fa-solid fa-check"></i> <i class="fa-solid fa-trash"></i> </li>');
        $(this).val('');
    })

    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(500)
    });

    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass('checked')
    })
});