/* let  arreglo = [1,2,3,4,5,6,7,8,9,10,11,12]

console.log(arreglo[11])
 */

/* ____________________________________________________________ */

/* function medallaSeguPuesto(puesto){

    if (puesto===1){
        console.log("primer puesto");
    }
    else if (puesto === 2 ){
        console.log("segundo puesto");
    }

    else {
        console.log ("ultimo puesto")
    }
}

medallaSeguPuesto(1); */

/* ________________________________________________ */

/* function sumaDeLosParesDelCeroAlX(Numero){

    const acumulador = [];
    let  sumatoria = 0;
    

    for (let i = 0  ; i<Numero; i++){

        if(i%2 === 0){
        acumulador.push(i);

        
        }
        sumatoria +=acumulador[i];
    }

    console.log("I have all pairs numbers",acumulador);
    console.log("Soy la sumatoria",sumatoria)

}


sumaDeLosParesDelCeroAlX(30); */

/* function sumaDeLosParesDel0Al (unNumero){
    let acumulador = 0;
    for (let i = 0; i <= unNumero ; i ++ ){
        if (i % 2 == 0)
            acumulador = acumulador + i
    }
    return acumulador;
}

console.log(sumaDeLosParesDel0Al(5)); */

/* function caloriasDeTrote(vueltas){

    let acumulador = 0;
   for (let i =0 ; i<= vueltas ; i++){

    console.log(acumulador)
    acumulador = acumulador + 5 *i;
   }
   return acumulador;
}
console.log(caloriasDeTrote(3)); */

function asientosDisponibles(total, querido){

    let disponibilidad = 0;

    for (let i = 0; i<= total.length; i++){

        if (total[i]=== querido){

           disponibilidad= total[i];
        }
    }

    if (disponibilidad != 0){
        console.log("hay puesto");
    }
    else{
        console.log("no hay puesto")
    }

}

asientosDisponibles([3,5,10,50], 20)