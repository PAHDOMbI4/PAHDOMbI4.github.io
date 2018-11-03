var arr_menu = ["Стрижки", "Массаж", "Макияж", "Маникюр", "Эпиляция"]
resize_bg();
window.addEventListener('resize', function(event){
    resize_bg();  
})

function resize_bg(){
    let width_logo = window.innerWidth/6;
    let height_logo = window.innerHeight/4
    if(width_logo>height_logo){
        $('.logo').css('font-size', height_logo )
    }else{
        $('.logo').css('font-size', width_logo )
    }
}

function scale_sale(element_name){
    $('.big_size').css({
        width: '100%',
        height: '100%'
    });
    let url_img = '"../img/sale-'+element_name+'.jpg"'
    $('.sale-image').addClass(element_name)
}

function scale_big_size(){
    $('.big_size').css({
        width: 0,
        height: 0
    });
    
}

function menu_click(open_element_menu){
    $('.'+open_element_menu).fadeIn();
    
}

function click_btnBack(close_element_menu){
    $('.'+close_element_menu).fadeOut();
}