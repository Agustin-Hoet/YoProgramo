// NOMBRE
function cambiar_parrafo01() {
    
    document.getElementById('editar-nombre').style.display='block';
    let texto01 = document.getElementById('texto-nombre').innerText;
    console.log(texto01);
};

function myFunction01(valor01) {
    document.getElementById('texto-nombre').innerText = valor01;
};

function logMessage(message01) {
    console.log(message01 + "<br>");
}

let textarea01=document.getElementById('editar-nombre')
textarea01.addEventListener('keyup', (e) => {
    logMessage('Key "${e.key}" released [event: keyup]');
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

function logMessage(message02) {
    console.log(message02 + "<br>");
}

let textarea02=document.getElementById('editar-acercade')
textarea02.addEventListener('keyup', (e) => {
    logMessage('Key "${e.key}" released [event: keyup]');
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

function logMessage(message03) {
    console.log(message03 + "<br>");
}

let textarea03=document.getElementById('editar-secundaria')
textarea03.addEventListener('keyup', (e) => {
    logMessage('Key "${e.key}" released [event: keyup]');
    if (e.key=='Enter') {
        document.getElementById('editar-secundaria').style.display='none'
    }
});
// FIN SECUNDARIA


 
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




// AGREGAR TEXTO

function agregartexto01() {
    
    document.getElementById('agregar').style.display='block';
    let texto06 = document.getElementById('textoagregar').innerText;
    console.log(texto06);
};

function myFunction06(valor06) {
    document.getElementById('textoagregar').innerText = valor06;
};

function logMessage(message06) {
    console.log(message06 + "<br>");
}

let textarea06=document.getElementById('agregar')
textarea06.addEventListener('keyup', (e) => {
    logMessage('Key "${e.key}" released [event: keyup]');
    if (e.key=='Enter') {
        document.getElementById('agregar').style.display='none'
    }
});


// FIN AGREGAR TEXTO