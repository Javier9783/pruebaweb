

/****************************PRESUPUESTO*****************************************/

var miBoton = document.querySelector("#enviar");
var miForm = document.querySelector("#presupuesto");


miBoton.addEventListener("click",(evento)=>{
    evento.preventDefault();

    valido = validar();

    if(valido==true){
        miForm.submit();
    }
})


function validar(){
    var nombre = document.getElementById("nombre").value; 
    var direccion = document.getElementById("direccion").value;
    var privacidad = document.getElementById("privacidad");
    var telefono = document.getElementById("telefono").value;    
    var correo = document.getElementById("correo").value
    var mensaje ="";
    var correcto = true;

    if(nombre == null || nombre == ""){
        mensaje = "El campo Nombre no puede estar en blanco.\n";
        correcto = false;
    }else{
        let name_re = /^[a-zA-Z ]{2,30}$/
    if(!name_re.exec(nombre)){
        mensaje += "El nombre no puede contener números.\n";
        correcto = false;
    }
    
    }

    /***************************direccion************************/

    if(direccion == null || direccion == ""){
        mensaje += "El campo Direccion no puede estar en blanco.\n";
        correct = false;
    }

    /********************Telefono*************/

    if(telefono == null || telefono == ""){
        mensaje += "El campo telefono no puede estar en blanco.\n";
        correct = false;
    }else{
        let telefono_re = /^[0-9]{9}$/
    if(!telefono_re.exec(telefono)){
        mensaje += "El campo Teléfono no es correcto.\n";
        correcto = false;
    }
    
    }

    

    /********EMAIL*********************/

    if(correo == null || correo == ""){
        mensaje += "El campo Email no puede estar en blanco.\n";
        correcto = false;
    }

    if(!privacidad.checked){
        mensaje += "Tiene que aceptar la política de Privacidad.\n";
        correcto = false;
    }

    if(correcto == true){
        return true;
    }else{
        alert(mensaje);
        return false;
    }
    

}

$(function(){
    $("input[type=radio]").click(function(){
        importe();
    })
});

function importe(){
    $radios = $("input[type=radio]:checked");
    var coste_total = 0;
    $radios.each(function(){
        coste_total = coste_total + parseInt($(this).val());
        })
        document.getElementById('totalsindescuento').value=coste_total
        console.log(coste_total)
}

let radios = document.querySelectorAll("[type='radio']");
   radios.forEach((x)=>{
     x.dataset.val = x.checked;
     x.addEventListener('click',(e)=>{
       let element = e.target;
       if(element.dataset.val == 'false'){
         element.dataset.val = 'true';
         element.checked = true;
       }else{
         element.dataset.val = 'false';
         element.checked = false;
       }
     },true);
   });

   /****************DESCUENTO***************************/
var descuento = document.getElementById('plazos');
   descuento.addEventListener('change',calcular);
   function calcular(){
	//creacion de variabloes en donde se van a almacenar los datos capturados en las cajas de texto
var total_ini =0;
var desc = 0; 
var imp_desc = 0;
var total =0;



//Asignacion del valor capturado en la caja del texto enla variable
total_ini = parseFloat(document.getElementById('totalsindescuento').value);
desc = parseFloat(document.getElementById('plazos').value);
console.log(total_ini)
console.log(desc)
//cálculo del descuento 
imp_desc = (total_ini * desc)/100;
//Asignacion del resultado en la caja de importe descontado
document.getElementById('importe_descontado').value=imp_desc;

total = total_ini - imp_desc
//Asignación del valor de la variable total a la caja de texto total
document.getElementById('total').value=total;
console.log(total);
}

