const meses=["enero","fe4b","mar","abril","mayo"];

for (let x = 0; x < meses.length; x++) {
    console.log(meses[x]);
}
console.log("----------");

for (let mes of meses) {
    console.log(mes);
    
}
console.log("----------");

meses.forEach(function (m) {
    console.log(m)
});



console.log("------con flecha----");


meses.forEach( (m)=> {
    console.log(m)
});

console.log("------con flecha y sumado con if----");

meses.forEach( (m)=> {
    if (m==="mayo") {
        console.log("llegaste al mes de"+ m)
    }else{
        console.log("falta para abril, estas en el mes de"+ m)
    }
    
});


console.log("------con maps y flecha- y un length---");

meses.map((m)=>{
    console.log(m.length)
})




