

let textoInput;
let textoCopy;
let mensajeInfo;
let mensajeRemplazo;
let autorizarOperacion=0;
var validadorMinusculas;
var validadorCaracteres;


function tomarTexto(){

    textoInput = document.getElementById("textOp").value;
    
 
    validadorMinusculas= /^[a-z\s\!]+$/.test(textoInput);
    

        console.log(textoInput);

        if (textoInput=="") {alert("\u{1F648} ¡El campo de texto está vacio! \u{1F613}")}

        else if (validadorMinusculas==false) {alert("\u{1F64A}¡Todas las letras deben estar en minuscula, sin caracteres especiales! \u{1F61F}");}

        else {
                document.getElementById("miImagen").style.display="none";
                document.getElementById("botonCopy").style.display="inline";
                mensajeInfo= document.getElementById("negrito");
                mensajeRemplazo = document.getElementById("mensaje");
                autorizarOperacion=1;
        };
}


function Encript(){
    

    tomarTexto();

    if (autorizarOperacion==1){

    textoInput = textoInput.replaceAll("e","enter");
    textoInput = textoInput.replaceAll("i","imes");
    textoInput = textoInput.replaceAll("a","ai");
    textoInput = textoInput.replaceAll("o","ober");
    textoInput = textoInput.replaceAll("u","ufat");
    mensajeInfo.innerHTML = "Su texto encriptado es: " ;
    mensajeRemplazo.innerHTML = textoInput;
    mensajeRemplazo.style.textAlign="justify";
    textoCopy = textoInput;
    console.log(textoInput);
    textoInput = "";
    }
    return;

}


function Desencript(){

    tomarTexto();

    if (autorizarOperacion==1){
    textoInput = textoInput.replaceAll("enter","e");
    textoInput = textoInput.replaceAll("imes","i");
    textoInput = textoInput.replaceAll("ai","a");
    textoInput = textoInput.replaceAll("ober","o");
    textoInput = textoInput.replaceAll("ufat","u");
    console.log(textoInput);
    mensajeInfo.innerHTML = "Su texto desencriptado es: " ;
    mensajeRemplazo.innerHTML = textoInput;
    mensajeRemplazo.style.textAlign="justify";
    textoCopy = textoInput;
    textoInput = "";
    }
    return;
}

function CopiarT(){

    navigator.clipboard.writeText(textoCopy);

   
}
