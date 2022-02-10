$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclik($win, $navbar, width);

    $win.resize(function(){
        toggle_onclik($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass('toggle-left')
    });
});

function toggle_onclik($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`})
    }else{
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed', {
strings:[
    'Chef Profesional',
    'En Latinoamerica'
],
typeSpeed: 50,
backSpped: 50,
loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings:[
        'Chef Profesional',
        'Colombiana y Ganadora de 5 estellas'
    ],
    typeSpeed: 50,
    backSpped: 50,
    loop: true
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
        anchor.addEventListener('click',function(e){
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollintoView({
                behavior: 'smooth'
            });
        });
    });