function operacion(){
    var becados = new Array(); //declaro nueva array
    let i, edad, titulo, paro; //declaro variables
    var numBecas = document.getElementById("demo").value; //declaro var y asigno su valor mediante el numero de alumnos que recojo en la caja de texto
    
    for(i = 0; i < numBecas; i++){
        edad = prompt("usuario " + (i+1) + " edad del alumno");
        titulo = prompt("titulo universitario? si - no");
        paro = prompt("tiene paro? si - no");
        nombre = prompt("nombre del alumno");

    titulo = titulo.toLowerCase();
    paro = paro.toLowerCase();
    if((edad>17 && titulo == "si") || paro == "si"){
        // alert("se le concede beca");
        becados.push(nombre);
    }
    else {
        // alert("no se le concede beca");
    }
    }  
    for (i=0; i < becados.length; i++) {
        document.getElementById("resultado").innerHTML += becados[i] + " tiene derecho a beca <br>";
    }
   
}
    



// <!-- Una academia de idiomas quiere que al dar de alta a los nuevos estudiantes, 
//     la aplicación les indique quien recibe una beca para estudiar en su centro. 

// Crear un campo de texto para poner el número de alumnos que se pueden matricular 
// en la academia. 

// Una vez el usuario ha introducido el número de alumnos, se le 
// pedirá al usuario mediante diferentes prompts: 

// el nombre, la edad, si tiene un título universitario y si está en el paro. 

// Éstos datos se pedirán tantas veces 
// como número de alumnos haya puesto el usuario en la caja de texto.

// Los requisitos para recibir la beca son:

// que el alumno sea mayor de edad y
// esté en disposición de un título universitario o 
// que el alumno esté en el paro. 

//  Si se cumplen estas condiciones, la escuela ofrece la beca.
// Al final se debe mostrar todos los nombres de los alumnos que tienen beca. -->
