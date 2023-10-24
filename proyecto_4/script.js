function calcularTiempo(){ /* Esta función se encarga de obtener la hora actual del sistema 
y mostrarla en formato de reloj digital en la página web. Aquí está lo que hace en detalle:*/

    let tiempo = new Date();/*Extrae la hora, los minutos y los segundos de ese objeto de fecha.*/ 

    let hora = tiempo.getHours();/* Estas líneas obtienen la hora, los minutos y los segundos actuales del objeto*/ 111
    let minuto = tiempo.getMinutes()
    let segundo = tiempo.getSeconds();
    let periodo = "AM"; // Por defecto, asumimos que es AM


    if (hora >= 12) {
        periodo = "PM";
        if (hora > 12) {
            hora -= 12;
        }
    }

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + periodo;
/*Esta línea crea una cadena llamada pantallaReloj que combina las variables formateadas */

    /*emento HTML en la página que tiene la clase ,Esto se supone que es el lugar donde deseas mostrar la hora.*/
    let relojdigital = document.querySelector(".reloj");
    relojdigital.innerHTML = pantallaReloj;
};/* Finalmente, esta línea actualiza el contenido de ese elemento HTML seleccionado (relojdigital) 
    con la cadena pantallaReloj, que contiene la hora actual en formato de reloj digital.*/ 

/*esta línea configura una llamada repetitiva a la función calcularTiempo con un intervalo de 1000 milisegundos, 
lo que significa que la función se ejecutará cada segundo.*/
setInterval(calcularTiempo, 1000);


const deg = 6;/*Esta constante se utiliza para calcular la rotación de las manecillas del reloj analógico*/ 

const horas = document.querySelector('.hora');/*Estos elementos se utilizarán posteriormente en el código para cambiar la rotación de
 las manecillas y, por lo tanto, mostrar la hora en el reloj analógico.*/ 

const minutos = document.querySelector('.minuto');

const segundos = document.querySelector('.segundo');

setInterval(()=>{
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;/*En esta línea, se obtiene la hora actual utilizando tiempo.getHours(), y luego se multiplica por 30. El valor 30 se utiliza como un factor de conversión para determinar el ángulo de rotación de la manecilla de las horas en un reloj analógico.
     En un reloj de 12 horas, cada hora se corresponde con un ángulo de 30 grados (360 grados / 12 horas).*/ 

    let min = tiempo.getMinutes() * deg;/*De manera similar, se obtienen los segundos actuales con tiempo.getSeconds() y se multiplican por la misma constante deg para calcular el ángulo de rotación de la manecilla de los segundos. 
    Cada segundo se corresponde con un ángulo de 6 grados (360 grados / 60 segundos).*/

    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;
})