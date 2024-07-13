function devolver (){
    var nombre = prompt("Por favor ingrese su nombre: ");
    return nombre;
}

function sumar (){
    var num1 = parseInt(prompt("Ingrese el primer numero: "));
    var num2 = parseInt(prompt("Ingrese el segundo número: "));
    suma = num1 + num2
    sum = toString(suma)
    return suma
}

function suiche (){
    var num1 = prompt("Ingrese el primer número ");
    var nom1 = parseInt(num1);
    var longitud =  nom1.toString().length;
    
    switch (longitud) {
        case 1:
            console.log("Número de una cifra");
        break

        case 2:
            console.log("Número de dos cifras");
        break

        default: 
            console.log("Número de más cifras");
        
    }
}

console.log(devolver());
console.log(sumar());
suiche();

// objetos

function objetos(){
    var nombre = prompt("Ingrese el nombre de la persona: ");
    var apellido = prompt("Ingrese el apellido de la persona: ");
    var edad = prompt("Ingrese la edad: ");

    var marlon = {
        "nombre1" : nombre,
        "apellido1" : apellido,
        "edad1" : edad,
    }
    
    var marlitonvalue = marlon.nombre1;
    var andresvalue = marlon.apellido1;
    var nicotevalue = marlon.edad1;
    
    console.log(marlitonvalue+" - "+andresvalue+" - "+nicotevalue);
}

function objetos2(){
    var persona = {
        nombre: "Marlon",
        apellido: "Román",
        edad: "18",
    }
    
    function checar_objeto(checar_prop){
        if (persona.hasOwnProperty(checar_prop)){
            return persona[checar_prop];
        } else {
            return "No encontrado";
        }
    }

    nom = prompt("Ingrese el nombre de la variable: ")
    console.log(checar_objeto(nom));
}

function objetos3(){
    function album (cancion){
        var spinetta = {
            artaud : "Cantata de puentes amarillos",
            jardin : "anillo",
            almendra : "muchacha",
        }

        result = spinetta[cancion];
        return result;
    }

    res = prompt("Ingrese el nombre del álbum: ");
    console.log(album(res));
}

objetos3();
objetos();
objetos2();

