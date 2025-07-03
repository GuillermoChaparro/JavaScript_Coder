const numero= [1,2,3,4,5];

function porCadaUno(array,fn){
    for (let i = 0; i < array.length; i++) {
        
        fn(array[i]);
    }
}

function porDos(x){
    console.log(x*2);
}


porCadaUno(numero,console.log);

porCadaUno(numero, porDos);

console.log("je")

