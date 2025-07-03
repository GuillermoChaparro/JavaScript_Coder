//alert("que onda");

//funciones que reciben funciones como argumentos 

function buenDia(){
    console.log("funcion como argumento/BUEN DIA")
}

function buenasTardes(){
    console.log("funcion como argumento/BUENas tardes")
}

function saludar(fn){
    console.log("Funcoin que recibe funciones");
    console.log(fn)
}

saludar(buenDia);




