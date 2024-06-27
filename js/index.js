//cuando la pagina se cargue, comienza a ejecutar el script
window.onload = function () {
    let contador=5;
    let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; //cadena de caracteres, la posicion comienza en 0
    console.log(abecedario.length);
    let letraAleatoria = parseInt(Math.random() * 27); //nos da una letra aleatoria de la cadena de caracteres
    //el método charAt nos devuelve el caracter de la posicion indicada 
    console.log(abecedario.charAt(letraAleatoria));
    let correcta = abecedario.charAt(letraAleatoria);

    document.querySelector("#boton").addEventListener("click", () => {
        let letraUser = document.querySelector("#letra").value; //insertamos el valor que el usuario ha escrito en la variable letraUser
        let = salida = document.querySelector("#salida");
        salida.innerHTML = "";

        //con operador ternario
        // letraUser.toUpperCase() == correcta ? salida.innerHTML = "¡Correcto" : salida.innerHTML = "No es correcto";

        // con if
        if(letraUser.toUpperCase()==correcta){
            salida.innerHTML="¡Correcto!"
        }else{
            salida.innerHTML="No es correcto"
            contador--;
        }
        document.querySelector("#contador").innerHTML="Intentos - "+ contador;
        if(contador==0){
            salida.innerHTML="Has perdido";
            document.querySelector("#letra").setAttribute("disabled","true"); //deshabilita la caja para escribir la letra
            document.querySelector("#boton").setAttribute("disabled","disabled");
        }
    })

    // // indexOf devuelve la posicion del caracter buscado 
    // console.log(abecedario.indexOf("F")); 
    // // lastIndexOf devuelve la posicion buscando de derecha a izquierda (solo un elemento)
    // console.log(abecedario.lastIndexOf("F"));

    // // termina con endswith()-> devuelve true si el parametro pasado es igual al ultimo o ultimos caracteres
    // console.log(abecedario.endsWith("XYZ"));
    // let telefonos=["926123456","9267891011","623456789","678912345"];
    // for (let tel = 0; tel < telefonos.length; tel++) {
    //     if (telefonos[tel].startsWith("926")){
    //         console.log("El telefono " + telefonos[tel] + " es de Ciudad Real");
    //     }
    //     else if(telefonos[tel].startsWith(6)){
    //         console.log("El telefono " + telefonos[tel] + " es un movil");
    //     }  
    // }

    // // reemplazar un texto por otro replace
    // let apellido="Marina Mendez";
    // apellido=apellido.replace("Mendez","Torres")
    // console.log(apellido);


    // // trim -> solo reemplaza los espacios del principio y del final
    // let nombre=" Maria ";
    // let nuevoNombre=nombre.trim();
    // console.log(nombre);
    // console.log(nuevoNombre);

    // // slice -> extrae de una cadena desde la posicion que le indique hasta la posicion
    // // que le indiques, pero la ultima no se incluye
    // console.log(apellido.slice(0,6)); 

    // // substr -> extrae n caracteres desde la posicion inicio
    // apellido=apellido.toLowerCase();
    // console.log(apellido);
    // console.log(apellido.substring(0,1).toUpperCase()+apellido.substring(1));

    // // slipt -> convierte una cadena de caracteres en un array a partir del delimitador indicado
    // let paises="España-Francia-Italia-Portugal-Alemania";
    // let todosPaises=paises.split("-");
    // console.log(todosPaises);
    // console.log(apellido.split(" "));




}