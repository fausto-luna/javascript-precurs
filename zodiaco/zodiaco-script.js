function operacion(){
    var resultado;
    var dia = parseInt(document.getElementById("dia").value);
    var mes = document.getElementById("mes").value;
    switch(mes){
        case "enero": 
            if (dia >=20 && dia <32)
            {resultado = "<h2>Acuario<h2> <h3>(20 enero – 18 febrero)<h3>"
            }
            else if (dia <20)
            {resultado = "<h2>Capricornio<h2> <h3>(22 diciembre – 19 enero)<h3>"  
            }
            break;
        case "febrero": 
            if (dia >=19 && dia <32)
            {resultado = "<h2>Piscis<h2> <h3>(Febrero 19 – Marzo 20)<h3>"
            }
            else if (dia <=18)
            {resultado = "<h2>Aries<h2> <h3>(21 marzo - 19 abril)<h3>"  
            }
            break;
        case "marzo": 
            if (dia >=19 && dia <32)
            {resultado = "<h2>Piscis<h2> <h3>(febrero 19 – marzo 20)<h3>"
            }
            else if (dia <=18)
            {resultado = "<h2>Aries<h2> <h3>(21 marzo - 19 abril)<h3>"  
            }
            break;
        case "abril": 
            if (dia >=20 && dia <32)
            {resultado = "<h2>Tauro<h2> <h3>(20 abril – 20 mayo)<h3>"  
            }
            else if (dia <=19) 
            {resultado = "<h2>Aries<h2><h3>(21 marzo - 19 abril)<h3>"
            }
            break;
        case "mayo": 
            if (dia <=20)
                {resultado = "<h2>Tauro<h2> <h3>(20 abril – 20 mayo)<h3>"
            }
            else if (dia >=21 && dia <32) 
            {resultado = "<h2>Géminis<h2> <h3>(21 mayo – 20 junio)<h3>"
            }
            break;
        case "junio": 
            if (dia <=20) 
            {resultado = "<h2>Géminis<h2> <h3>(21 mayo – 20 junio)<h3>"
            }
            else if (dia >=21 && dia <32)
            {resultado = "<h2>Cáncer<h2> <h3>(21 junio – 22 julio)<h3>"
            }
            break;
        case "julio": 
            if (dia <=22) 
            {resultado = "<h2>Cáncer<h2> <h3>(21 junio – 22 julio)<h3>"
            }
            else if (dia >=23 && dia <32) {
                resultado = "<h2>Leo<h2> <h3>(23 julio – 22 de agosto)<h3>"
            }
            break;
        case "agosto": 
            if (dia <=22) 
            {resultado = "<h2>Leo<h2> <h3>(23 julio – 22 de agosto)<h3>"
            }
            else if (dia >=23 && dia <32) 
            {resultado = "<h2>Virgo<h2> <h3>(23 agosto – 22 setiembre)<h3>"
            }
            break;
        case "septiembre": 
            if (dia <=22) 
            {resultado = "<h2>Virgo<h2> <h3>(23 agosto – 22 setiembre)<h3>"
            }
            else if (dia >=23 && dia <32) 
            {resultado = "<h2>Libra<h2> <h3>(23 setiembre – 22 octubre)<h3>"
            }
            break;
        case "octubre": 
            if (dia <=22) 
            {resultado = "<h2>Libra<h2> <h3>(23 setiembre – 22 octubre)<h3>"
            }
            else if (dia >=23 && dia <32) 
            {resultado = "<h2>Escorpio<h2> <h3>(23 octubre – 21 noviembre)<h3>"
            }
            break;
        case "noviembre": 
            if (dia <=21) 
            {resultado = " <h2> Escorpio <h2> <h3>(23 octubre – 21 noviembre)<h3>"
            }
            else if (dia >=22 && dia <32) 
            {resultado = "<h2>Sagitario</h2><h3>(22 noviembre  - 21 diciembre)</h3><br>Mitad hombre, mitad caballo, sagitario es un arquero siempre listo para disparar sus flechas. En Grecia se asoció su figura con la del centauro Quirón, maestro de Aquiles. <br> Sagitario, signo de fuego, representa la lucidez. Simboliza al maestro, al intelectual, al filósofo, o incluso al sabio ermitaño alejado de las  pasiones humanas. <br> Justicia, independencia, libertad, sinceridad, cordialidad, y sentido del deber son algunas de sus características. Pero también testarudez, engreimiento, inconstancia, e incluso egolatría."
            }
            break;
        case "diciembre": 
            if (dia <=21) 
            {resultado = "Sagitario (22 noviembre  - 21 diciembre)"
            }
            else if (dia >=21 && dia <32) 
            {resultado = "Capricornio (22 diciembre – 19 enero)"
            }
            break;
        default:
            resultado = "WTF!!!";
            break;
    }
    document.getElementById("demo").innerHTML = resultado;
}
/* no pongo tildes porque tengo teclado ingles sorry :) */