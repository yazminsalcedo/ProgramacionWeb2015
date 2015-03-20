$(document).ready(
	
	function(){
		$('.main-container').hide();

		var c=document.getElementById("miCanvas");
                      var ctx=c.getContext("2d");
                      var img1 = new Image(); 
                      var img2 = new Image(); 
                     img1.onload = function(){
                        ctx.drawImage(img1,10,38);
                     } 
                     img2.onload = function(){
                        ctx.drawImage(img2, 100, 80);
                     } 
                     img1.src = 'img/ahorcado1.png';

                     img2.src='img/vaquerito2.png'
});

	var espacios= new Array();
	var palabras= ['PROGRAMACION', 
					 'YAZMIN', 
					 'GOOGLE', 
					 'AHORCADO', 
					 'COMPUTADORA', 
					 'CANVAS', 
					 'BOOTSTRAP', 
					 'MOCHILA', 
					 'DEDOS'];


		var aleatorio = (Math.round(Math.random()*palabras.length))
		var secreto = palabras[aleatorio];
		var letrasUsadas = new Array(27);
		alert(secreto);
		var caracteres="";
		bandera1=0;
		bandera2=0;
		var intentos=0;
		contador=0;
function inicia()
{

		//var espacios= new Array();

		$('.container').hide();
		$('.main-container').show('fast');
		
		$('palabra').empty();

		for (var i = 0; i < secreto.length; i++)
		{
			caracteres=caracteres+ " _ "
			//espacios[i]= ('<span> <img src="img/guion.jpg" class="img1" width="3%" > </span>');
			//espacios[i]=" _ "
			//caracteres= caracteres +espacios[i];
			//alert(espacios);
		};
		var x=document.createElement("h1");// este codigo me sirve para volver a escribir en mi div palabra
		x.innerHTML=caracteres;
		document.getElementById('palabra').appendChild(x); 


}

function presiona(letra){
		alert(letra);
		var valor;
		letrasUsadas[contador]=letra;
		contador++;

		for(var j=0; j< secreto.length; j++)
		{
			for(var k=0; k<letrasUsadas.length; k++)
			{
				if (letrasUsadas[k]==secreto[k]) 
					{
						caracteres=caracteres+letrasUsadas[k];
						bandera1=1;
					};
			};

			valor=secreto.charAt(j);

			if (letra===valor) 
			{
				bandera2=1;
				//intentos=intentos;
				//espacios.splice(j,1,letra);
				//caracteres=espacios[i];
				//alert(caracteres);
				//alert(espacios);
				//j=secreto.length;
				
				 //$('#palabra').html(espacios);
//				 alert(intentos);

			}
			else if(letra!=valor)
			{
				bandera2=0;
				//intentos=intentos+1;
				//j=secreto.length;
				
				//alert(intentos);
			};
			if(letra!=valor && bandera1==0)
			{
				caracteres=caracteres+" _ ";
			}
			

		}
		if (bandera2==0) {
			intentos=intentos+1;
		};
		alert(intentos);
		
	}


	

