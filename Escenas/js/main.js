        // JavaScript Document


        /*-----------------------------------------
Menu
------------------------------------------>*/
$('#menu').click(function() {
    $('#overlay').addClass('open');
});
$('#close-menu').click(function() {
    $('#overlay').removeClass('open');
});


        /*-----------------------------------------
Expanding card
------------------------------------------>*/
var $cell =  $('.card');

        //open and close card when clicked on card
$cell.find('.js-expander').click(function() {

    var $thisCell =  $(this).closest('.card');

    if ($thisCell.hasClass('is-collapsed')) {
        $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
        $thisCell.removeClass('is-collapsed').addClass('is-expanded');

        if ($cell.not($thisCell).hasClass('is-inactive')) {
                    //do nothing
        } else {
            $cell.not($thisCell).addClass('is-inactive');
        }

    } else {
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        $cell.not($thisCell).removeClass('is-inactive');
    }
});

        //close card when click on cross
$cell.find('.js-collapser').click(function() {

    var $thisCell =  $(this).closest('.card');

    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');

});
        /*-----------------------------------------
Tooltip
------------------------------------------>*/
$(function() {
    var targets =  $('[rel~=tooltip]'),
        target  =  false,
        tooltip =  false,
        title   =  false;

    targets.bind('mouseenter', function() {
        target  =  $(this);
        tip     =  target.attr('title');
        tooltip =  $('<div id="tooltip"></div>');

        if (!tip || tip == '')
            return false;

        target.removeAttr('title');
        tooltip.css('opacity', 0)
            .html(tip)
            .appendTo('body');

        var init_tooltip = function() {
            if ($(window).width() < tooltip.outerWidth() * 1.5)
                tooltip.css('max-width', $(window).width() / 2);
            else
                tooltip.css('max-width', 340);

            var pos_left =  target.offset().left + (target.outerWidth() / 2) - (tooltip.outerWidth() / 2),
                pos_top  =  target.offset().top - tooltip.outerHeight() - 20;

            if (pos_left < 0) {
                pos_left =  target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass('left');
            } else
                tooltip.removeClass('left');

            if (pos_left + tooltip.outerWidth() > $(window).width()) {
                pos_left =  target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass('right');
            } else
                tooltip.removeClass('right');

            if (pos_top < 0) {
                var pos_top =  target.offset().top + target.outerHeight();
                tooltip.addClass('top');
            } else
                tooltip.removeClass('top');

            tooltip.css({ left: pos_left, top: pos_top })
                .animate({ top: '+=10', opacity: 1 }, 50);
        };

        init_tooltip();
        $(window).resize(init_tooltip);

        var remove_tooltip = function() {
            tooltip.animate({ top: '-=10', opacity: 0 }, 50, function() {
                $(this).remove();
            });

            target.attr('title', tip);
        };

        target.bind('mouseleave', remove_tooltip);
        tooltip.bind('click', remove_tooltip);
    });
});


        /*-----------------------------------------
Wow library
------------------------------------------>*/
new WOW().init();

let sonido1 =  document.getElementById("sound_avanzar_plan1");
let sonido2 =  document.getElementById("sound_avanzar_plan2");
let sonido3 =  document.getElementById("sound_avanzar_plan3");
let sonido4 =  document.getElementById("sound_avanzar_plan4");
let sonido5 =  document.getElementById("sound_avanzar_plan5");
let pausa   =  document.getElementById("playPauseBtn");
let count   =  0;

function playPause1() {
    if (count == 0) {
        count =  1;
        sonido1.play();

    } else {
        count =  0;
        sonido1.pause();

    }
}

function playPause2() {
    if (count == 0) {
        count =  1;
        sonido2.play();

    } else {
        count =  0;
        sonido2.pause();

    }
}

function playPause3() {
    if (count == 0) {
        count =  1;
        sonido3.play();

    } else {
        count =  0;
        sonido3.pause();

    }
}

function playPause4() {
    if (count == 0) {
        count =  1;
        sonido4.play();

    } else {
        count =  0;
        sonido4.pause();

    }
}

function playPause5() {
    if (count == 0) {
        count =  1;
        sonido5.play();

    } else {
        count =  0;
        sonido5.pause();

    }
}

function playPause6() {
    if (count == 0) {
        count =  1;
        sonido6.play();

    } else {
        count =  0;
        sonido6.pause();

    }
}

function playPause7() {
    if (count == 0) {
        count =  1;
        sonido7.play();

    } else {
        count =  0;
        sonido7.pause();

    }
}

function playPause8() {
    if (count == 0) {
        count =  1;
        sonido8.play();

    } else {
        count =  0;
        sonido8.pause();

    }
}

function playPause9() {
    if (count == 0) {
        count =  1;
        sonido9.play();

    } else {
        count =  0;
        sonido9.pause();

    }
}