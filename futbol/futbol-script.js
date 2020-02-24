
    function operacion(){
        var resultado;
        var posicion = document.getElementById("posicion").value;
        switch(posicion){
            case "portero" : 
                let paradas = parseInt(prompt("introduce número de paradas"));
                if (paradas > 150){
                    resultado = "+1M€"
                }
                else if (paradas > 100 && paradas < 150){
                    resultado = "+0,5M€"
                }
                else if (paradas > 50 && paradas < 99){
                    resultado = "="
                }
                else if (paradas < 50){
                    resultado = "-1M€"
                }
                break;
            case "defensa" :     
                let pelotasRobadas = parseInt(prompt("introduce número de pelotas robadas"));
                let tarjetas = parseInt(prompt("Introduce número de tarjetas amarillas"));
                if (tarjetas > 14){
                    resultado = "-1M€"
                }
                else if (tarjetas < 15 && pelotasRobadas > 300){
                    resultado = "+1M€"
                }
                else if (tarjetas < 15 && pelotasRobadas >= 200 && pelotasRobadas <= 300){
                    resultado = "+0,5M€"
                }
                else if (tarjetas < 15 && pelotasRobadas >= 100 && pelotasRobadas <= 199){
                    resultado = "="
                }
                else if (tarjetas < 15 && pelotasRobadas < 100){
                    resultado = "-1M€"
                }
                break;
            case "mediocampista" :
                let pelotasRobadasMedioCampista = parseInt(prompt("introduce número de pelotas robadas"));
                let asistencias = parseInt(prompt("introduce número de asistencias"));
                if (pelotasRobadasMedioCampista > 100 && asistencias >10){
                    resultado = "+ 1M €"
                }
                else if (pelotasRobadasMedioCampista >= 50 && pelotasRobadasMedioCampista <= 99 && asistencias >= 5 && asistencias <= 9){
                    resultado = "+0,5M€"
                }
                else if (pelotasRobadasMedioCampista >= 25 &&pelotasRobadasMedioCampista <= 49 && asistencias >= 1 && asistencias <= 4){
                    resultado = "="
                }
                else if (pelotasRobadasMedioCampista < 25 && asistencias == 0){
                    resultado = "-1M€"
                }
                break;
            case "delantero" : 
                let goles = parseInt(prompt("introduce número de goles"));
                let asistenciasDelantero = parseInt(prompt("introduce número de asistencias"));
                if (goles > 15 && asistenciasDelantero > 10){
                    resultado = "+5M€"
                }
                else if (goles >= 10 && goles <= 14 && asistenciasDelantero >= 5 && asistenciasDelantero <= 9){
                    resultado = "+3M€"
                }
                else if (goles >= 5 && goles <= 9 && asistenciasDelantero >= 5 && asistenciasDelantero <= 9){
                    resultado = "+1M€"
                }
                else if (goles < 5 && asistenciasDelantero < 5){
                    resultado = "-3M€"
                }
                break;
            default :
                resultado = "WTF!!!"
            }
        document.getElementById("demo").innerHTML = resultado;
    }
