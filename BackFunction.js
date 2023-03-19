// NOMBRE
function cambiar_parrafo01() {
    
    document.getElementById('editar-nombre').style.display='block';
    let texto01 = document.getElementById('texto-nombre').innerText;
    console.log(texto01);
};
function myFunction01(valor01) {
    document.getElementById('texto-nombre').innerText = valor01;
};
function logMessage01(message01) {
    console.log(message01 + "<br>");
}
let textarea01=document.getElementById('editar-nombre')
textarea01.addEventListener('keyup', (e) => {
    logMessage01('Key "${e.key}" released [event: keyup]');
    if (e.key=='Enter') {
        document.getElementById('editar-nombre').style.display='none'
    }
});
// FIN NOMBRE

// ACERCA DE
function cambiar_parrafo02() {
    
    document.getElementById('editar-acercade').style.display='block';
    let texto02 = document.getElementById('texto-acercade').innerText;
    console.log(texto02);
};
function myFunction02(valor02) {
    document.getElementById('texto-acercade').innerText = valor02;
};
function logMessage02(message02) {
    console.log(message02 + "<br>");
}
let textarea02=document.getElementById('editar-acercade')
textarea02.addEventListener('keyup', (e) => {
    logMessage02('Key "${e.key}" released [event: keyup]');
    if (e.key=='Enter') {
        document.getElementById('editar-acercade').style.display='none'
    }
});
// FIN ACERCA DE

// SECUNDARIA
function cambiar_parrafo03() {
    
    document.getElementById('editar-secundaria').style.display='block';
    let texto03 = document.getElementById('texto-secundaria').innerText;
    console.log(texto03);
};
function myFunction03(valor03) {
    document.getElementById('texto-secundaria').innerText = valor03;
};
function logMessage03(message03) {
    console.log(message03 + "<br>");
}
let textarea03=document.getElementById('editar-secundaria')
textarea03.addEventListener('keyup', (e) => {
    logMessage03('Key "${e.key}" released [event: keyup]');
    if (e.key=='Enter') {
        document.getElementById('editar-secundaria').style.display='none'
    }
});
// FIN SECUNDARIA

// ELIMINAR
function eliminar01() {
    nparrafo=document.getElementById('parrafo01');

    nparrafo.removeChild(nparrafo.lastChild);

    document.getElementById('borrar01').style.display='none'
}
function eliminar02() {
    nparrafo=document.getElementById('parrafo02');

    nparrafo.removeChild(nparrafo.lastChild);

    document.getElementById('borrar02').style.display='none'
}
function eliminar03() {
    nparrafo=document.getElementById('parrafo03');

    nparrafo.removeChild(nparrafo.lastChild);

    document.getElementById('borrar03').style.display='none'
}
function eliminar04() {
    nparrafo=document.getElementById('parrafo04');

    nparrafo.removeChild(nparrafo.lastChild);

    document.getElementById('borrar04').style.display='none'
}
function eliminar05() {
    nparrafo=document.getElementById('parrafo05');

    nparrafo.removeChild(nparrafo.lastChild);

    document.getElementById('borrar05').style.display='none'
}
// FIN ELIMINAR

// AGREGAR TEXTO
function agregartexto01() {
    
    document.getElementById('agregar01').style.display='block';
    let texto06 = document.getElementById('textoagregar01').innerText;
    console.log(texto06);
};
function myFunction06(valor06) {
    document.getElementById('textoagregar01').innerText = valor06;
};
function logMessage04(message06) {
    console.log(message06 + "<br>");
}
let textarea06=document.getElementById('agregar01')
textarea06.addEventListener('keyup', (e) => {
    logMessage04('Key "${e.key}" released [event: keyup]');
    if (e.key=='Enter') {
        document.getElementById('agregar01').style.display='none'
    }
});

function agregartexto02() {
    
    document.getElementById('agregar02').style.display='block';
    let texto07 = document.getElementById('textoagregar02').innerText;
    console.log(texto07);
};
function myFunction07(valor07) {
    document.getElementById('textoagregar02').innerText = valor07;
};
function logMessage05(message07) {
    console.log(message07 + "<br>");
}
let textarea07=document.getElementById('agregar02')
textarea07.addEventListener('keyup', (e) => {
    logMessage05('Key "${e.key}" released [event: keyup]');
    if (e.key=='Enter') {
        document.getElementById('agregar02').style.display='none'
    }
});

function agregartexto03() {
    
    document.getElementById('agregar03').style.display='block';
    let texto08 = document.getElementById('textoagregar03').innerText;
    console.log(texto08);
};
function myFunction08(valor08) {
    document.getElementById('textoagregar03').innerText = valor08;
};
function logMessage06(message08) {
    console.log(message08 + "<br>");
}
let textarea08=document.getElementById('agregar03')
textarea08.addEventListener('keyup', (e) => {
    logMessage06('Key "${e.key}" released [event: keyup]');
    if (e.key=='Enter') {
        document.getElementById('agregar03').style.display='none'
    }
});

function agregartexto04() {
    
    document.getElementById('agregar04').style.display='block';
    let texto09 = document.getElementById('textoagregar04').innerText;
    console.log(texto09);
};
function myFunction09(valor09) {
    document.getElementById('textoagregar04').innerText = valor09;
};
function logMessage07(message09) {
    console.log(message09 + "<br>");
}
let textarea09=document.getElementById('agregar04')
textarea09.addEventListener('keyup', (e) => {
    logMessage07('Key "${e.key}" released [event: keyup]');
    if (e.key=='Enter') {
        document.getElementById('agregar04').style.display='none'
    }
});
// FIN AGREGAR TEXTO

// HABILIDADES
let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.95,
    fill: {gradient: ['#a445b2', '#fa4299']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".01 .bar").circleProgress({
    value: 0.90
});
$(".02 .bar").circleProgress({
    value: 0.90
});
$(".03 .bar").circleProgress({
    value: 0.85
});
$(".04 .bar").circleProgress({
    value: 0.80
});
$(".05 .bar").circleProgress({
    value: 0.90
});
// FIN HABILIDADES