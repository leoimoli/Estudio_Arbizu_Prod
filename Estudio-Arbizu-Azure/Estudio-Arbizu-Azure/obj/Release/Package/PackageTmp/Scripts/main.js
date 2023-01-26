
//-------------------MENU FIXED--------------------

function RemoveActiveMenuItem() {
    var btn = document.getElementById('sistemas_menu');
    btn.classList.remove('active');
    var btn = document.getElementById('equipo_menu');
    btn.classList.remove('active');
    var btn = document.getElementById('contacto_menu');
    btn.classList.remove('active');

}


function btnMenu(id) {
    RemoveActiveMenuItem();

    document.getElementById(id).classList.add('active');
}

// $(window).scroll(function(){
// 	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
// });

// ------------- Iconos Sistemas ---------------------
function foreachOptions() {
    var elems2 = document.querySelectorAll(".options");
    [].forEach.call(elems2, function (el) {
        el.style.display = "none";
    });
}

function foreachIconmodal() {
    var elems = document.querySelectorAll(".iconModal");
    [].forEach.call(elems, function (el) {
        el.classList.remove("iconModal");
    });
}

let mybutton = document.getElementById("myBoton");


// ---------- Mostrar el modal --------------
function MostrarModal(titulo, descripcion) {
    //mostrar modal
    var myModal = new bootstrap.Modal(document.getElementById('ModalEnviar'), {
        keyboard: false
    })
    document.getElementById('exampleModalLabel').innerHTML = titulo;
    document.getElementById('modal-body').innerHTML = descripcion;
    myModal.show()
}

// ---------- Mostrar el modalPorSistema --------------
function MostrarModalPorSistema(titulo, descripcion, color) {
    //mostrar modal
    var myModal = new bootstrap.Modal(document.getElementById('ModalPorSistema'), {
        keyboard: false
    })
    document.getElementById('modal-head-sistema').innerHTML = titulo;
    document.getElementById('modal-body-sistema').innerHTML = descripcion;
    document.getElementById('modal-head').style.backgroundColor = color;
    myModal.show()
}

let sistemasArray = []
sistemasArray[0] = ['sivia', '#FBD15B', 'SISTEMA DE VIÁTICOS', 'sistema para cargar viáticos, es utilizado en la ANSV por las diferentes áreas que necesiten realizar viajes con estadía en las diferentes provincias del país. Para esto, dicho sistema permite gestionar los viáticos de los agentes para su posterior carga en el sistema GEDO que es de nivel nacional.'];
sistemasArray[1] = ['sinalic', '#37BBED', 'SISTEMA NACIONAL <br> DE LICENCIAS DE CONDUCIR', 'Su objetivo es gestionar la emisión de las licencias de conducir a nivel nacional, para esto el sistema permite la gestión de los tramites, insumos, las diferentes instancias de evaluación y la posterior emisión del plástico como comprobante físico sumado a su respaldo digital (licencia digital). Está conformado por un sistema web principal y varios servicios de soporte para las diferentes provincias.'];
sistemasArray[2] = ['sinai', '#606BF1', 'SISTEMA NACIONAL DE INFRACCIONES', 'Sistema nacional de infracciones y sistema nacional de antecedentes de tránsito. Este sistema trabaja con diversos juzgados del país y cumple con la función de procesar las infracciones hasta el punto de que estas se puedan convertir en antecedentes de tránsito inhabilitantes. Se cargan las infracciones y antecedentes'];
sistemasArray[3] = ['siniestros', '#FF8578', 'SISTEMA DE SINIESTROS VIALES', 'Sistema para carga de toda la información pertinente de los siniestros viales informados a la ANSV a través de diversas ONG con el objetivo de tener una estadística a nivel nacional y un seguimiento personalizado para los diferentes casos.'];
sistemasArray[4] = ['sisconact', '#78FF9E', 'SISTEMA DE CONSULLA TE ACTAS', 'Permite consultar las fotos capturadas por los banquineros, para que posteriormente sean utilizadas para generar el acta de infracción correspondiente.'];
sistemasArray[5] = ['sisrepo', '#EE60F1', 'SISTEMA DE REPORTES', 'Es un sistema satélite que cumple con la función de facilitar una herramienta para generar diversos reportes y análisis en un principio de las licencias de conducir y en un futuro de las infracciones, antecedentes y  siniestros viales.'];
sistemasArray[6] = ['lintiE', '#5BD5FB', 'LINTI EMPRESAS', 'Sistema que les permite a la empresas que registran choferes tener una vision global y administrar todos los choferes asociados, así como saber la situacion de cada uno de los choferes que ya estan registrados en linti.'];
sistemasArray[7] = ['siscore', '#71ED37', 'SISTEMA DE CONSULTA CON RENAPER', 'Herramienta de consulta que permite visualizar distinta información relacionada a los antecedentes y licencias de conducir.'];
sistemasArray[8] = ['linti', '#F4FF78', 'LICENCIA NACIONAL INTERJURISDICCIONAL', 'Es un sistema análogo al sistema nacional de licencias pero enfocado en las licencias profesionales para los conductores de camiones y transportes que recorren las diferentes provincias del país. Esto incluye las habilitaciones médicas y cursos especiales para ese tipo de licencias.'];
sistemasArray[9] = ['motos', '#7886FF', 'REGISTRO DE MOTOS', 'Entorno que permite gestionar un trámite para el patentamiento de las motocicletas, para garantizar que salga del consecionario correctamente asegurada.'];
sistemasArray[10] = ['sicervs', '#b574e7', 'SISTEMA DE CERTIFICADO <br> DE SEGURIDAD VINCULAR', 'Dirigido a autos importados, trailers y motos.'];
sistemasArray[11] = ['sim', '#5BFBD5', 'SISTEMA DE INFRACCIONES MÓVILES', 'Aplicación para móviles, permite labrar actas en la calle.'];
sistemasArray[12] = ['renatedu', '#F16083', 'REGISTRO NACIONAL <br> DE IDENTIDAD DE EDUCACIÓN', 'Permite registrarse, previo a un pago de un canon, para poder dictar cursos de capacitación de seguridad vial o conducción.'];
sistemasArray[13] = ['sicam', '#4CCC60', 'SISTEMA DE CÁMARAS', 'Permite a traves de una filmacion capturar fotos relacionadas con infracciones de mal estacionamiento. Es utilizado en C.A.B.A.'];
sistemasArray[14] = ['denuncias', '#E77536', 'SISTEMA DE DENUNCIAS', 'APP que le permite a un ciudadano realizar una denuncia a la ANSV sobre algun incumplimiento a una norma de transito, en base a una foto o filmacion.'];



function mostrarModalPorSistema(sist) {
    sistemasArray.forEach(sistema => {
        if (sistema[0] == sist) {
            MostrarModalPorSistema(sistema[2], sistema[3], sistema[1]);
        }
    });
}

function contactanos(sistSelecto) {
    console.log(sistSelecto);
    sistemasArray.forEach(sistema => {
        if (sistema[2] == sistSelecto) {
            $('#ModalPorSistema').modal('hide');
            document.getElementById("menu_contac").scrollIntoView();
            document.getElementById("sistema").value = sistema[0];
            document.getElementById('sistema').classList.add('select-focus');
        }
    });
}


// --------------------- metodos scroll ------------------------
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("bg-nav");
    } else {
        document.getElementById("navbar").classList.remove("bg-nav");
    }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

    var elems = document.querySelectorAll(".iconModal");
    [].forEach.call(elems, function (el) {
        el.classList.remove("iconModal");
        // document.getElementById('options-' + el).style.display = "none";
    });

    foreachOptions();
}

/*asdasd*/
$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('section').each(function (i) {
            // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - 0) {
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });

    } else {

        $('nav li.active').removeClass('active');
        $('nav li:first').addClass('active');
    }

}).scroll();
/*asdasd*/



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function modalIcon(id) {
//   foreachIconmodal();
//   foreachOptions();

//   document.getElementById(id).classList.add('iconModal');
//   document.getElementById('options-' + id).style.display = "block";

// }


// ---------- Btn ENVIAR --------------------
function Enviar(nomApe, direccion, sistema, mensaje) {

    if (nomApe == '' || direccion == 0 || sistema == 0 || mensaje == '') {
        // document.getElementById('btnEnviar').preventDefault();
        // document.getElementById('btnEnviar').stopPropagation();
        //mostrar modal
        MostrarModal("Error",
            "Completá todos los campos antes de enviar tu consulta");
    }
    else if (!isNaN(nomApe)) {
        MostrarModal("Error",
            "El campo Nombre y apellido no puede ser un número.");
    }
    else if (!isNaN(mensaje)) {
        MostrarModal("Error",
            "El campo mensaje debe tener con una consulta o mensaje.");
    }
    else {
        $.ajax({
            type: 'post',
            // --------------Url desarrollo --------------------------------------------
            // url: 'https://localhost:58396/api/v1/Reportes/EnvioMail',
            // --------------Url testing / prod ----------------------------------------
            url: urlAPI,

            data: JSON.stringify({ 'message': 'string', 'nombreApellido': nomApe, 'direccion': direccion, 'sistema': sistema, 'mensaje': mensaje }),
            // {a:1,b:2,c:{d:1,e:[1,2]}}
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) {
                // alert(data);
                // alert(SendInfo);
                //mostrar modal
                MostrarModal("¡Gracias! :D",
                    "Tu consulta ya fue enviada, en breve te responderemos");
            }
        });
    }
}

function EnviarDos(nomApe, email, asunto, mensaje) {

    if (nomApe == '' || email == 0 || asunto == 0 || mensaje == '') {
        MostrarModal("Error",
            "Completá todos los campos antes de enviar tu consulta");
    }
    else if (!isNaN(nomApe)) {
        MostrarModal("Error",
            "El campo Nombre y apellido no puede ser un número.");
    }
    else if (!isNaN(mensaje)) {
        MostrarModal("Error",
            "El campo mensaje debe tener con una consulta o mensaje.");
    }
    else {
        $.ajax({
            type: 'post',
            // --------------Url desarrollo --------------------------------------------
            // url: 'https://localhost:58396/api/v1/Reportes/EnvioMail',
            // --------------Url testing / prod ----------------------------------------
            url: "EnvioEmailWF.aspx/getPlanta",
            //url: EnviarEmail,

            data: JSON.stringify({ 'message': 'string', 'nombreApellido': nomApe, 'direccion': email, 'sistema': asunto, 'mensaje': mensaje }),
            // {a:1,b:2,c:{d:1,e:[1,2]}}
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) {
                // alert(data);
                // alert(SendInfo);
                //mostrar modal
                MostrarModal("¡Gracias! :D",
                    "Tu consulta ya fue enviada, en breve te responderemos");
            }
        });
    }
}

//---------- cambiar color select -------------
function changeColorDireccion(event) {
        if(event.value != 0) {
        document.getElementById('direccion').classList.add('select-focus');
    }
};

function changeColorSistema(event) {
    if (event.value != 0) {
        document.getElementById('sistema').classList.add('select-focus');
    }
};
