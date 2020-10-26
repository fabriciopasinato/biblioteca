function verCurso(id_curso) {
    window.location.href = id_curso + "/index.html";
}

function verTrabajos(id_materia)
{
    window.scrollTo({ top: 140 });
    id = "trabajos" + id_materia;
    const v = document.getElementById(id);
    v.classList.add('trabajos_activo');
    v.classList.remove('trabajos_inactivo');
    document.querySelector("#encabezado").classList.add('blureado');
    document.querySelectorAll(".materia").forEach( function (e) {
        e.classList.add('blureado');
    });
    v.style.filter = "none";
    window.onclick = function(event) {
        var t = event.target;
        console.log(t)
        if (t == v) {
            cerrarTrabajos(id)
        }
    }
    /*
    const el = document.querySelector("#contenedor").childNodes;
    console.log(el);
    el.forEach(function(e) {
        if (!e.classList.contains("trabajos_activo")) {
            e.classList.add('blureado');
        }
    });
    */
    

}

function cerrarTrabajos(id_materia) {
    id = "trabajos" + id_materia;
    v = document.getElementById(id);
    v.classList.add('trabajos_inactivo');
    v.classList.remove('trabajos_activo');
    document.querySelector("#encabezado").classList.remove('blureado');
    document.querySelectorAll(".materia").forEach( function (e) {
        e.classList.remove('blureado');
    });
}

/*function sesion() {
    var form = document.form;
    var user = form.usuario.value;
    var pass = form.contrasena.value;
    var con=false;
    if (user=="isp" && pass == "1234"){
  	 window.local.href="prog/index.html";
    }else{
    	alert("usuario y Contraseña invalidos");
    }
}*/
/*function sesionn() {
    var form = document.form;
    var user = form.usuario.value;
    var pass = form.contrasena.value;
    if(user == "general" && pass == "general"){
        window.location="prog/index.html";
        //location.href="prog/index.html";
        alert("pulse ACEPTAR para la redireccion");       
    }else if(user == "publico" && pass == "publico"){
        location.href="prog/15/index.html";
        alert("pulse ACEPTAR para la redireccion a acceso publico");
    }else if(user == "privado" && pass == "privado"){
        location.href="prog/16/index.html";
         alert("pulse ACEPTAR para la redireccion a acceso privado");
    }else{
        location.href="index.html";
        alert("usuario y Contraseña invalidos");
    }
 }
*/
    

