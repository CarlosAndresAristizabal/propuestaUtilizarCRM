//Editar//-------------------------------------------------------------------------------------------------------------------------------
var CantidadEscenas = 28
var CantidadEnlacesMenu = 7
var CantidadAdicional = 2
var AnchoEscena = 1920
var AltoEscena = 1080
var TieneIndicador = true
var UsarPrecarga = false
var tiemposesion
var segundos = '00'
var minutos = '00'
var horas = '00'

var ActivarScorm = true
var TieneBarraPorcentaje = false
var UtilizaFondos = false

var BtnContinuar =
    '<img src="recursos/boton_inicio.png" width="251" style="cursor: pointer; position: absolute; right: 320px; bottom: 20px;" id="BotonIntro">'
var ImgCargando =
    '<img src="recursos/cargandodatos.gif" width="240" style="padding-top:270px;">'
var ImgFondoInicio = '<img src="recursos/fondo_inicio.jpg" >'

var NombreModulo =
    'Conoce cómo utilizar CRM para retener y fidelizar clientes'

var URLModulo = 'http://www.4evirtual.com/course/view.php?id=9'
var URLInicio = 'http://www.4evirtual.com/'

var ArrayAudios = [
    { src: 'Vacio.mp3', id: 'Vacio' },
    { src: 'E01.mp3', id: 'E01' },
    { src: 'E02.mp3', id: 'E02' },
    { src: 'E03.mp3', id: 'E03' },
    { src: 'E04.mp3', id: 'E04' },
    { src: 'E05.mp3', id: 'E05' },
    { src: 'E06.mp3', id: 'E06' },
    { src: 'E07.mp3', id: 'E07' },
    { src: 'E08.mp3', id: 'E08' },
    { src: 'E08-B.mp3', id: 'E08-B' },
    { src: 'E09.mp3', id: 'E09' },
    { src: 'E10.mp3', id: 'E10' },
    { src: 'E11.mp3', id: 'E11' },
    { src: 'E11-A.mp3', id: 'E11-A' },
    { src: 'E11-B.mp3', id: 'E11-B' },
    { src: 'E12.mp3', id: 'E12' },
    { src: 'E13.mp3', id: 'E13' },
]

//Datos Escena//-------------------------------------------------------------------------------------------------------------------------------
var InfoEscena = new Array(CantidadEscenas)
var TitulosMenu = new Array(CantidadEnlacesMenu)
var TitulosAdicional = new Array(CantidadAdicional)

InfoEscena[0] = ['1', 'Bienvenido(a)', 'fondo0', 1]
InfoEscena[1] = ['2', 'Contenido', 'fondo0', 1]
InfoEscena[2] = ['3', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[3] = ['4', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[4] = ['5', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[5] = ['6', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[6] = ['7', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[7] = ['8', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[8] = ['9', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[9] = ['10', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[10] = ['11', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[11] = ['12', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[12] = ['13', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[13] = ['14', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[14] = ['15', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[15] = ['16', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[16] = ['17', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[17] = ['18', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[18] = ['19', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[19] = ['20', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[20] = ['21', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[21] = ['22', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[22] = ['23', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[23] = ['24', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[24] = ['25', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[25] = ['26', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[26] = ['27', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[27] = ['28', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[28] = ['29', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[29] = ['30', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[30] = ['31', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[31] = ['32', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[32] = ['33', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[33] = ['34', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[34] = ['35', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[35] = ['36', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[36] = ['37', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[37] = ['38', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[38] = ['39', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[39] = ['40', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[40] = ['41', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[41] = ['42', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[42] = ['43', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[43] = ['44', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[44] = ['45', 'Tratamiento del cáncer de próstata', 'fondo0', 1]
InfoEscena[45] = ['46', 'Tratamiento del cáncer de próstata', 'fondo0', 1]




//Datos Menu//-------------------------------------------------------------------------------------------------------------------------------
//TitulosMenu[0] = ["\t\t   Inicio",1];//
//TitulosMenu[1] = ["\t\t   Conceptos de valoración de empresas.",3];//
//TitulosMenu[2] = ["\t\t   Diligenciar la herramienta de valoración de empresas.",10];//
//TitulosMenu[3] = ["\t\t   Análisis y explicación de las fuentes de los capitales de riesgo.",16];//
//TitulosMenu[4] = ["\t\t   Establecer las diferencias entre crédito, crowdfunding, crowdlending, crowdsourcing e inversión.",23];//
//TitulosMenu[5] = ["\t\t   Dar a conocer los programas de inversión que ofrece la CCB y cómo acceder a estos.",29];//
//TitulosMenu[6] = ["\t\t   Validación de conocimientos",33];//

//TitulosAdicional[0]= ["     Legal",1];//
//TitulosAdicional[1]= ["     Ayuda",1];//
//Inicio//-------------------------------------------------------------------------------------------------------------------------------

var EscenaActual = 1
var pasoAct
var pasoTot = 1
var HabilitarBotonSiguiente = false
var CambiarEscena = false
var Sonido = 1
var CaptionOn = true
var Inicio = false

var MostrandoAyuda = false
var MostrandoMenu = false

var CompositionEdge

$('#carga').hide()
$('.ocultos').hide()
$('#Elemento-Indicador').hide()
$('#BotonAtras').hide()

//MENUS
$('#Menu_1').show() //AG
$('#Menu_3').show() //AG
$('#Menu_10').show() //AG
$('#Menu_16').show() //AG
$('#Menu_23').show() //AG
$('#Menu_29').show() //AG
$('#Menu_33').show() //AG

$('#VentanaMenu').hide()
$('#EnlacesMenu').hide()

$('.BotonAyuda').css('cursor', 'pointer')
$('.BotonLega').css('cursor', 'pointer')

var maxWidth = $('#content').width()
var maxHeight = $('#content').height()

var iframeWidth = $('#frame').width()
var iframeHeight = $('#frame').height()

var windowWidth = $(window).width()
var windowHeight = $(window).height()

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
        return (
            navigator.userAgent.match(/IEMobile/i) ||
            navigator.userAgent.match(/WPDesktop/i)
        )
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    },
}
$('#frame').hide()

$('#content').css({
    'transform-origin': '0 0',
    '-ms-transform-origin': '0 0',
    '-webkit-transform-origin': '0 0',
    '-moz-transform-origin': '0 0',
    '-o-transform-origin': '0 0',
})

$('#Intro').hide()
$('#carga').hide()
$('#carga').append(ImgCargando)
$('#carga').show()

$(window).load(function() {
    $('#Intro').show()
    $('#carga').hide()

    if (UsarPrecarga == true) {
        Precarga()
    } else {
        IniciarEscena()
    }
})

function EscalarIframe() {
    // alert();
    var stage = $('#content') // Set a reusable variable to reference the stage
    var parent = $('#content').parent() // Set a reusable variable to reference the parent container of the stage

    var parentWidth = $(window).width() // Tamaño del ancho del navegador(width)
    var parentHeight = $(window).height() // tamaño del alto del navegador(height)

    var stageWidth = stage.width() // tamaño del div content en ancho(width)
    var stageHeight = stage.height() // tamaño del div content en alto(height)

    var desiredWidth = Math.round(parentWidth * 1) // Dejamos el with como numero entero
    var desiredHeight = Math.round(parentHeight * 1) // Dejamos el height como numero entero

    var rescaleWidth = desiredWidth / stageWidth // Dividimos: tamaño actual de la pantalla/ por tamaño del content (width)
    var rescaleHeight = desiredHeight / stageHeight // Dividimos: tamaño actual de la pantalla/ por tamaño del content (height)

    //var rescale = rescaleWidth;
    //alert(rescaleWidth+"  "+rescaleHeight);

    if (rescaleWidth > 1 && rescaleHeight > 1) {
        rescale = 1
    } else if (rescaleWidth > rescaleHeight) {
        rescale = rescaleHeight
    } else {
        rescale = rescaleWidth
    }

    stage.css('transform', 'scale(' + rescale + ')')
    stage.css('-o-transform', 'scale(' + rescale + ')')
    stage.css('-ms-transform', 'scale(' + rescale + ')')
    stage.css('-webkit-transform', 'scale(' + rescale + ')')
    stage.css('-moz-transform', 'scale(' + rescale + ')')
    stage.css('-o-transform', 'scale(' + rescale + ')')

    parent.width(stageWidth * rescale)
    parent.height(stageHeight * rescale)
    parent.css('margin', '0px auto') //autoajustamos la pantalla
}

$(window).resize(function(evt) {
    if (Inicio) EscalarIframe()
})

var $_GET = {}

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
    function decode(s) {
        return decodeURIComponent(s.split('+').join(' '))
    }
    $_GET[decode(arguments[1])] = decode(arguments[2])
})

//SCORM
var scorm = pipwerks.SCORM //Shortcut
var lmsConnected = false

function initCourse() {
    lmsConnected = scorm.init()
    if (lmsConnected) {
        var completionstatus = scorm.get('cmi.core.lesson_status')
        var escenaScorm = scorm.get('cmi.core.lesson_location') + ''

        var tiemposesion = scorm.get('cmi.core.total_time')
        console.log(' tiempo de sesion ===' + tiemposesion)

        if (
            tiemposesion == '' ||
            tiemposesion == 'null' ||
            tiemposesion == undefined
        ) {
            tiemposesion = '0000:00:01'
            iniciartiempo()
        } else {
            iniciartiempo()
        }
        if (escenaScorm == '' || escenaScorm == 'null') {
            EscenaActual = 1
        } else {
            EscenaActual = parseInt(escenaScorm)
        }
        if (completionstatus === 'completed' || completionstatus === 'passed') {
            handleError('Ya finalizo el curso')
        } else {
            var success = scorm.set('cmi.core.lesson_status', 'incomplete')
            scorm.save()
        }
    } else {
        handleError('Error: no se pudo conectar al LMS')
    }
}

function setPorcentajeAvance(porcentaje) {
    if (lmsConnected) {
        success = scorm.set('cmi.core.score.raw', '' + porcentaje)
        scorm.save()
        if (!success) {
            handleError('Error: No se pudo guardar el avance del curso!')
        }
    }
}

function iniciartiempo() {
    setInterval(function() {
        relog()
    }, 1000)
}

function relog() {
    segundos++
    if (segundos < 10) {
        segundos = '0' + segundos
    }

    if (segundos == 60) {
        minutos++
        if (minutos < 10) minutos = '0' + minutos
        segundos = '00'

        if (minutos == 60) {
            horas++
            if (horas < 10) {
                horas = '0' + horas
            }
            minutos = '00'
        }
    }
    console.log(
        'horas = ' + horas + ' minutos= ' + minutos + '   segundos=  ' + segundos
    )
    tiemposesion = horas + ':' + minutos + ':' + segundos
}

function setComplete() {
    if (lmsConnected) {
        var success = scorm.set('cmi.core.lesson_status', 'completed')
        scorm.save()
        if (!success) {
            handleError('Error: No se pudo guardar el estado del curso!')
        }
    } else {
        handleError('Error: El curso no esta conectado al LMS')
    }
}

function setEscena(escenaGuardar) {
    if (lmsConnected) {
        var success = scorm.set('cmi.core.lesson_location', '' + escenaGuardar)
        scorm.save()
        if (!success) {
            handleError('Error: No se pudo guardar la escena del curso!')
        }
    } else {
        handleError('Error: El curso no esta conectado al LMS')
    }
}

function cerrarSCORM() {
    scorm.set('cmi.core.session_time', tiemposesion)
    scorm.save()
    scorm.quit()
}

function handleError(msg) {
    //   alert(msg);
}
//SCORM

function buscarEscena(nombreEscena) {
    for (var i = 0; i < InfoEscena.length; i++) {
        if (InfoEscena[i][0] == nombreEscena) {
            return i + 1
        }
    }
    return 1
}

function Iniciarmenu() {
    var menuprin =
        '<br>' +
        "<div id='Menu_1' class='menu1'><img src='Escenas/img/home-menu.png' width='20' height='20'> Inicio</div>" +
        "<div id='Menu_3' class='menu1'><img src='Escenas/img/flecha-menu.png' width='20' height='20'> Conceptos de valoración de empresas.</div>" +
        "<div id='Menu_10' class='menu1'><img src='Escenas/img/flecha-menu.png' width='20' height='20'> Diligenciar la herramienta de valoración de empresas.</div>" +
        "<div id='Menu_16' class='menu1'><img src='Escenas/img/flecha-menu.png' width='20' height='20'> Análisis y explicación de las fuentes de los capitales de riesgo.</div>" +
        "<div id='Menu_23' class='menu1'><img src='Escenas/img/flecha-menu.png' width='20' height='20'> Establecer las diferencias entre crédito, crowdfunding, crowdlending, crowdsourcing e inversión.</div>" +
        "<div id='Menu_29' class='menu1'><img src='Escenas/img/flecha-menu.png' width='20' height='20'> Dar a conocer los programas de inversión que ofrece la CCB y cómo acceder a estos.</div>" +
        "<div id='Menu_33' class='menu1'><img src='Escenas/img/flecha-menu.png' width='20' height='20'> Validación de conocimientos</div>" +
        '<br>'

    $('#modulos').append(menuprin)
}

function legalAbrir() {
    $('#BotonMenu').hide('drop', { direction: 'up' }, 300)
    $('#ModalLegal').modal('show')
}

function IniciarEscena() {
    var Temp = 1

    $(document).prop('title', NombreModulo)

    if ($_GET['EscenaActual']) Temp = $_GET['EscenaActual']

    EscenaActual = buscarEscena(Temp)

    if (ActivarScorm) initCourse() //SCORM

    Iniciarmenu()

    $('#Intro').hide()
    $('#carga').hide()

    /*if(isMobile.any())
	{
		$("#BotonAdelante").hide();

		$("#Intro").show();

		$("#Intro").append(BtnContinuar)
		$("#Intro").append(ImgFondoInicio);

		setTimeout (function()
		{
			EscalarIframe();
		},500);

		$("#BotonIntro").on("click", function()
		{
			$("#carga").show();
			$("#Intro").hide();

			AgregarAudios();
			initAudio();

			setTimeout (function()
			{
				Cargar_Escena();
			},500);
		});
	}
	else
	{*/
    $('#carga').show()
        //AgregarAudios();

    //initAudio();

    setTimeout(function() {
        Cargar_Escena()
    }, 500)

    setTimeout(function() {
        EscalarIframe()
    }, 750)

    //}

    $('#BotonAdelante').click(Siguiente_Escena)

    $('#BotonAtras').click(Anterior_Escena)

    //Llamar escenas
    $('#Menu_1').click(Escena1) //AG
    $('#Menu_3').click(Escena3) //AG
    $('#Menu_10').click(Escena10) //AG
    $('#Menu_16').click(Escena16) //AG
    $('#Menu_23').click(Escena23) //AG
    $('#Menu_29').click(Escena29) //AG
    $('#Menu_33').click(Escena33) //AG

    //Funciones escenas
    function Escena1() {
        //AG
        EscenaActual = 1
        Cargar_Escena()
    }

    function Escena3() {
        //AG
        EscenaActual = 3
        Cargar_Escena()
    }

    function Escena10() {
        //AG
        EscenaActual = 10
        Cargar_Escena()
    }

    function Escena16() {
        //AG
        EscenaActual = 16
        Cargar_Escena()
    }

    function Escena23() {
        //AG
        EscenaActual = 23
        Cargar_Escena()
    }

    function Escena29() {
        //AG
        EscenaActual = 29
        Cargar_Escena()
    }

    function Escena33() {
        //AG
        EscenaActual = 33
        Cargar_Escena()
    }

    $('.BotonSub').click(Alerta_prueba)

    function Alerta_prueba() {
        if (CaptionOn == true) {
            CaptionOn = false
            OnOffCaption()
        } else {
            CaptionOn = true
            OnOffCaption()
        }
    }
    //----------------------------------------INICIO LEGAL---------------------------------------------------
    $('.BotonLega').click(function() {
            $('.VentanaAyuda').html('')
            $('#BotonMenu').hide('drop', { direction: 'up' }, 1000)
            $('#BotonMenu2').hide()
            MostrandoMenu = false
            if (!MostrandoAyuda) {
                MostrandoAyuda = true
                $('.VentanaAyuda').prepend(
                    '<div id="BotonCerrar"><img src="recursos/boton_cerrar.png"></div>'
                )
                $('.VentanaAyuda').append('<img src="recursos/pagina_legal_m0.png">')
                $('.VentanaAyuda').css({ 'z-index': '2000' })
            } else {
                MostrandoAyuda = false
                $('.VentanaAyuda').html('')
            }
        })
        //----------------------------------------FIN LEGAL---------------------------------------------------

    //----------------------------------------INICIO AYUDA---------------------------------------------------

    $('.BotonAyuda').click(function() {
        $('.VentanaAyuda').html('')
        $('#BotonMenu').hide('drop', { direction: 'up' }, 1000)
        $('#BotonMenu2').hide()
        MostrandoMenu = false
        if (!MostrandoAyuda) {
            MostrandoAyuda = true
            $('.VentanaAyuda').prepend(
                '<div id="BotonCerrar"><img src="recursos/boton_cerrar.png"></div>'
            )
            $('.VentanaAyuda').append('<img src="recursos/ventana_ayuda.png">')
            $('.VentanaAyuda').css({ 'z-index': '2000' })
        } else {
            MostrandoAyuda = false
            $('.VentanaAyuda').html('')
        }
    })
    $('.VentanaAyuda').on('click', '#BotonCerrar', function() {
        MostrandoAyuda = false
        $('.VentanaAyuda').html('')
    })

    //----------------------------------------FIN AYUDA----------------------------------------------------------
    //----------------------------------INICIO TRANSPARENCIA MENU------------------------------------------------

    //----------------------------------FIN TRANSPARENCIA MENU------------------------------------------------

    //----------------------------------INICIO MENU FUNCIONES------------------------------------------------
    $('.BotonMenu')
        .unbind()
        .click(function() {
            $('.VentanaAyuda').html('')
            if (!MostrandoMenu) {
                $('#BotonMenu').show('drop', { direction: 'up' }, 500)
                $('.VentanaAyuda').append('<img src="recursos/transparencia_menu.png">')
                $('.VentanaAyuda').css({ 'z-index': '2000' })
                    //,'margin-left':'-1px','margin-top': '-1px'
                MostrandoMenu = true
            } else {
                $('#BotonMenu').hide('drop', { direction: 'up' }, 300)
                $('.VentanaAyuda').html('')
                MostrandoMenu = false
            }
        })

    //----------------------------------FIN MENU FUNCIONES------------------------------------------------
    $('.BotonLegal')
        .unbind()
        .click(function() {
            $('#ModalLegal').modal('show')
        })

    $('.BotonHome')
        .unbind()
        .click(function() {
            Ir_Escena(1)
        })

    $('#BotonModulo').click(function() {
        abrirURL(URLModulo)
    })
    $('#BotonInicio').click(function() {
        abrirURL(URLInicio)
    })

    $('.request-fullscreen').each(function() {
        var target = $($(this).attr('rel')).addClass('target-fullscreen')

        $(this).click(function() {
            target.requestFullScreen()
                //	  OnOffFullscreen();
        })
    })

    $('#BotonFullscreen').click(function() {})
}

var tiempopar

function Elemento_Indicador_Titilar() {
    $('#Elemento-Indicador img')
        .animate({ width: 60, height: 60 }, 50)
        .animate({ width: 50, height: 50 }, 50)

    tiempopar = setTimeout('Elemento_Indicador_Titilar()', 1500)
}

function Elemento_Indicador_Quitar_Titilar() {
    $('#Elemento-Indicador img').stop()
    clearTimeout(tiempopar)
}

function abrirURL(paramURL, VentanaNueva) {
    if (VentanaNueva == undefined || VentanaNueva == '' || VentanaNueva == null)
        parent.window.location.href = paramURL
    else window.open(paramURL, '_blank')
}

function Siguiente_Escena() {
    //DetenerAudio();

    if (pasoAct == pasoTot) {
        if (EscenaActual < CantidadEscenas) {
            EscenaActual++
            Cargar_Escena()
        }
    } else {
        pasoAct++
        cambiarPaso()
    }
}

function Anterior_Escena() {
    //DetenerAudio();
    if (pasoAct == 1) {
        if (EscenaActual > 1) {
            EscenaActual--
            Cargar_Escena()
        }
    } else {
        pasoAct--
        cambiarPaso()
    }
}

function Cargar_Escena() {
    Inicio = false
        //DetenerAudio();

    pasoAct = 1

    DefinirBotones()

    if (UtilizaFondos) DefinirFondo()

    var Porcentaje = 100 / CantidadEscenas
    var Total = Porcentaje * EscenaActual

    if (ActivarScorm) setPorcentajeAvance(Math.round(Total)) //SCORM

    if (TieneBarraPorcentaje) {
        $('.barra-progreso')
            .css('width', Total + '%')
            .attr('aria-valuenow', Total)
        $('.texto-barra-progreso').text(Math.round(Total) + '%')
    }

    $('#TextoEscenas').html(InfoEscena[EscenaActual - 1][1])

    $('#NumeroEscena').html(EscenaActual + ' / ' + CantidadEscenas)

    Ocultar_Elemento_Indicador()

    if (EscenaActual > CantidadEscenas - 1) {
        $('#BotonAdelante').hide()
    }

    $('#frame').hide()
    $('#frame').attr(
        'src',
        'Escenas/' + InfoEscena[EscenaActual - 1][0] + '.html'
    )
    $('#carga').show()

    $('#frame').load(function() {
        $('#carga').hide()
        $('#frame').show()
    })

    if (ActivarScorm) {
        setEscena(EscenaActual) //SCORM
        if (EscenaActual == CantidadEscenas) {
            setComplete() //SCORM
        }
    }

    Inicio = true
}

function cambiarPaso() {
    DefinirBotones()
    document
        .getElementById('frame')
        .contentWindow.AdobeEdge.getComposition(CompositionEdge.getCompId())
        .getStage()
        .play('paso' + pasoAct)
    Ocultar_Elemento_Indicador()
}

function DefinirBotones() {
    if (EscenaActual == 1) {
        $('#BotonAtras').hide()

        //Mostrar menú
        $('#Menu_1').show() //AG
        $('#Menu_3').show() //AG
        $('#Menu_10').show() //AG
        $('#Menu_16').show() //AG
        $('#Menu_23').show() //AG
        $('#Menu_29').show() //AG
        $('#Menu_33').show() //AG

        $('#BotonAdelante').show()
    } else if (EscenaActual == CantidadEscenas) {
        $('#BotonAtras').show()

        //Mostrar menú
        $('#Menu_1').show() //AG
        $('#Menu_3').show() //AG
        $('#Menu_10').show() //AG
        $('#Menu_16').show() //AG
        $('#Menu_23').show() //AG
        $('#Menu_29').show() //AG
        $('#Menu_33').show() //AG
    } else {
        $('#BotonAtras').show()

        //Mostrar menú
        $('#Menu_1').show() //AG
        $('#Menu_3').show() //AG
        $('#Menu_10').show() //AG
        $('#Menu_16').show() //AG
        $('#Menu_23').show() //AG
        $('#Menu_29').show() //AG
        $('#Menu_33').show() //AG
        $('#Modulos').show() //AG
        $('#BotonAdelante').show()
    }
}

function OcultarBotonNavegacion(Boton) {
    $('#' + Boton).hide()
}

function AparecerBotonNavegacion(Boton) {
    $('#' + Boton).show()
}

function DefinirFondo() {
    document.getElementById('frame').style.backgroundImage =
        "url('recursos/" + InfoEscena[EscenaActual - 1][2] + ".jpg')"
}

function OnOffCaption() {
    if (CaptionOn) {
        document
            .getElementById('frame')
            .contentWindow.AdobeEdge.getComposition(CompositionEdge.getCompId())
            .getStage()
            .Caption_On()
        $('.BotonSub img').attr('src', 'recursos/boton_subtitulos_on.png')
    } else {
        document
            .getElementById('frame')
            .contentWindow.AdobeEdge.getComposition(CompositionEdge.getCompId())
            .getStage()
            .Caption_Off()
        $('.BotonSub img').attr('src', 'recursos/boton_subtitulos_off.jpg')
    }
}

function OnOffFullscreen() {
    if (window.fullScreenApi.EnFullscreen() == false) {
        $('#BotonFullscreen img').attr('src', 'recursos/boton_fullscreen_on.png')
    } else {
        $('#BotonFullscreen img').attr('src', 'recursos/boton_fullscreen_off.png')
    }
}

function Habilitar_Boton_Siguiente() {
    $('#BotonAdelante').show()

    if (TieneIndicador) Mostrar_Elemento_Indicador('der', '1185px', '305px')
}

function Mostrar_Elemento_Indicador(Apuntando, MarginLeft, MarginTop) {
    if (TieneIndicador) {
        Ocultar_Elemento_Indicador()
        $('#Elemento-Indicador img').attr(
            'src',
            'recursos/indicador_' + Apuntando + '.png'
        )
        $('#Elemento-Indicador').show()
        $('#Elemento-Indicador img').animate({ marginTop: MarginTop, marginLeft: MarginLeft },
            0
        )
    }
}

function Ocultar_Elemento_Indicador() {
    //DetenerAudio();
    if (TieneIndicador) {
        $('#Elemento-Indicador').hide()
        $('#Elemento-Indicador').animate({ marginTop: '0px', marginLeft: '0px' }, 0)
    }
}

function Ir_Escena(Pagina) {
    EscenaActual = Pagina
    Cargar_Escena()

    MostrandoMenu = false
    $('#BotonAtras').show()

    //Mostrar menú
    $('#Menu_1').show() //AG
    $('#Menu_3').show() //AG
    $('#Menu_10').show() //AG
    $('#Menu_16').show() //AG
    $('#Menu_23').show() //AG
    $('#Menu_29').show() //AG
    $('#Menu_33').show() //AG

    $('#carga').show()
    $('#frame').hide()
    $('#frame').load(function() {
        $('#carga').hide()
        $('#frame').show()
    })
    $('#BotonMenu').hide('drop', { direction: 'up' }, 300)
}

function EnviarEscenaMenu(Pagina) {
    $('.VentanaAyuda').html('')
    Ir_Escena(Pagina)
}

function Cambiar_Escena_Cualquier_Boton() {
    Siguiente_Escena()
    HabilitarBotonSiguiente = false
    Ocultar_Elemento_Indicador()
}

function Cambiar_Paso_Cualquier_Boton() {
    document.getElementById('frame').contentWindow.Siguiente_Paso()
    HabilitarBotonSiguiente = false
    Ocultar_Elemento_Indicador()
}

function setComposition(comp) {
    CompositionEdge = comp
}

//Audios//-------------------------------------------------------------------------------------------------------------------------------
//Agrega el listado de audios junto su ID

/*function AgregarAudios()
{
 var assetsPath = "Escenas/audios/";

 createjs.Sound.registerSounds(ArrayAudios, assetsPath);
}*/

//Hace sonar el audio por medio del ID, la Funcion es la que se ejecutara al final del audio
/*function PlayAudio(ID, Funcion)
{
//var loadProxy = createjs.proxy(this.handleLoad, this);

 var InstanciaAudio = createjs.Sound.play(ID);

 InstanciaAudio.addEventListener("complete", MensajeTerminoAudio);

 if(Funcion != "")
  InstanciaAudio.addEventListener("complete", Funcion);
}*/

//Le avisa a la escena que detenga la boca del actor, la funcion TerminoAudio debe estar en el primer fotograma de la escena
function MensajeTerminoAudio() {
    document
        .getElementById('frame')
        .contentWindow.AdobeEdge.getComposition(CompositionEdge.getCompId())
        .getStage()
        .TerminoAudio()
}

/*function DetenerAudio()
{
	createjs.Sound.stop();
}*/

/*function initAudio()
{
 if (!createjs.Sound.initializeDefaultPlugins())
 {
  return;
 }

 createjs.Sound.play("Vacio");
}*/

//Precarga//-------------------------------------------------------------------------------------------------------------------------------

var manifest = ''
var preload
var IniciarCargaEscenas = 0

function detectIE() {
    var ua = window.navigator.userAgent
    var msie = ua.indexOf('MSIE ')
    var trident = ua.indexOf('Trident/')

    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
    }

    if (trident > 0) {
        // IE 11 (or newer) => return version number
        var rv = ua.indexOf('rv:')
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
    }

    // other browser
    return false
}

function handleFileLoad(event) {}

function handleOverallProgress(event) {}

function handleFileProgress(event) {
    var Progreso = (preload.progress * 100) | 0
    if (Progreso >= 2 && IniciarCargaEscenas == 0) {
        IniciarCargaEscenas = 1
        IniciarEscena()
    }
}

function loadComplete(event) {}

function handleFileError(event) {}

function Precarga() {
    var VersionIE = detectIE()

    if ($_GET['EscenaActual']) IniciarEscena()
    else {
        if (VersionIE == 8) {
            IniciarEscena()
        } else {
            if ($_GET['Precarga'] == 1) {
                RealizarPrecarga('images')

                document.location =
                    'data:Application/octet-stream,' + encodeURIComponent(manifest)
            }

            var URLActual = window.location.href.toString()
            URLActual = URLActual.replace('/index.html', '')

            if (URLActual.substr(URLActual.length - 1) == '/') {
                URLActual = URLActual.substring(0, URLActual.length - 1)
            }

            console.log(URLActual)

            BuscarPrecarga(URLActual + '/precarga.txt')
            PrecargarArchivos()
        }
    }
}

function RealizarPrecarga(Carpeta) {
    var RutaActual = window.location.href
    var RutaEscena

    RutaActual = RutaActual.replace('index.html', '')
    RutaActual = RutaActual.replace('?Precarga=1', '')

    RutaEscena = RutaActual + 'Escenas/'
    IniciarPrecarga(RutaEscena, Carpeta)
}

function IniciarPrecarga(Ruta, Carpeta) {
    var RutaArchivos = Ruta + Carpeta + '/'
    BuscarArchivos(RutaArchivos, CrearManifest)
}

function PrecargarArchivos() {
    // Create a preloader. There is no manifest added to it up-front, we will add items on-demand.
    preload = new createjs.LoadQueue(true)

    // Use this instead to use tag loading
    //preload = new createjs.LoadQueue(false);

    preload.on('fileload', handleFileLoad)
    preload.on('progress', handleOverallProgress)
    preload.on('fileprogress', handleFileProgress)
    preload.on('error', handleFileError)
    preload.on('complete', loadComplete)
    preload.setMaxConnections(3)

    manifest = manifest.split(',')
    var CantArchivos = manifest.length

    var Porcentaje = (CantArchivos * 10) / 100
    var URLActual = window.location.href.toString()
    URLActual = URLActual.replace('/index.html', '')

    if (URLActual.substr(URLActual.length - 1) == '/') {
        URLActual = URLActual.substring(0, URLActual.length - 1)
    }

    console.log(URLActual)

    while (manifest.length > 0) {
        var item = manifest.shift()
        preload.loadFile(URLActual + item)
    }
}

function BuscarArchivos(URL, funcion) {
    var Cont = 0
    var Temp = ''

    var n = URL.indexOf('/Escenas/')
    var res = URL.substring(n, URL.length - 1)

    $.ajax({
        url: URL,
        async: false,
        success: function(data) {
            $(data)
                .find('a')
                .each(function() {
                    if (Cont > 0) {
                        Temp = Temp + res + '/' + $(this).attr('href') + ','
                    }
                    Cont++
                })
            funcion(Temp)
        },
    })
}

function BuscarPrecarga(URL) {
    $.ajax({
        url: URL,
        async: false,
        success: function(data) {
            CrearManifest(data)
        },
    })
}

function CrearManifest(TEXTO) {
    manifest = manifest + TEXTO
}