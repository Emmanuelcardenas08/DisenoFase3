
<!--
alert("Bienvenido al primer cuestionario de Modelado de datos. El tema es ......... \n\nSeleccione las respuestas que crea correctas, teniendo en "+
      "\ncuenta las siguientes consideraciones \n\n1. Los aciertos tienen el valor de un punto"+
	  " \n\n2. Las respuestas no contestadas ni suman ni restan puntos.") 
//-->

var resp = new Array;
var faite = new Array;
var score = 0;

resp[1] = "a";
resp[2] = "b";
resp[3] = "c";
resp[4] = "b";
resp[5] = "c";


function Engine(question, repose) 
{
   if (repose != resp[question])
	 {
             if (!faite[question])
			        {faite[question] = -1;}
                }
        else {

                if (!faite[question]) {
                        faite[question] = -1;
                        score++;
                        
                        }

                }
}

function Nivel () {
      
        if (score >= 4 && score <= 5) {
                alert(score + "/5 " + "Muy bien, prueba superada");
                }
        if (score >= 3 && score < 4) {
                alert(score + "/5 " + "Bien, pero puedes hacerlo mejor");
                }
        if (score >= 2 && score < 3) {
                alert(score + "/5 " + "Estan en nivel medio. Analiza mejor el tema");
                }
        if (score >= 1 && score < 2) {
                alert(score + "/5 " + "Insuficiente. Vuelve a estudiar el tema");
                }
        if (score < 1) {
                alert("Su puntuación es: "+ score 
				+"\nLa puntuación máxima que podía obtener es 5" 
				+"\nTiene que reviazar nuevamente sus lecciones" 
				+"\nSu porcentaje de aciertos es menos del 0%");
                }
}
