//alert("Hola Mundo");
//function hola(){sdf}


$(document).ready(function(){

	//alert("Hola desde JQuery");
	//$('h1').hide('slow');	//estoy seleccionando todos los elementos h1, el titulo.
							//con la funcion hide la voy a ocultar
	//$('h1').show('slow');	//mostramos de nuevo el titulo

	$('h1').hide('slow');
	$('h1').show('fast');// lo oculto cuando le doy click
	$('h1').click(function(){
		$(this).hide('slow');//oculta
		$('#consola').html($(this).css('fontSize'));

		if($(this).css('fontSize')=='50px')
		{
			$(this).css('fontSize','32px')
		}
		else
		{
			$(this).css('fontSize','50px')
		}
		//$(this).css('fontSize','50px');//cambiar tamanio de letra, primer parametro para elegir propiedad a cambiar,
										//el segundo parametro es el valor que se le asignara al primero. 
		$(this).show('fast');			//vuelve a mostrar.
	});

	$('#btn1').click(function(){
		$('#img1').attr('src','img/1.jpg');
		$('#img1').animate({
			opacity:0.25,
			width:"25",
			left:"50",
			height:"30"
			}, 5000, function(){
				
			});
	});

	$('#btn2').click(function(){
		$('#img1').attr('src','img/2.jpg');
	});

	$('#btn3').click(function(){
		$('#img1').attr('src','img/4.jpg');
	});

});


/*function calcula(operacion)
{
    var operador1 = document.calc.operador1.value;
    var operador2 = document.getElementById("operador2").value;
    //alert(operador1);
    //alert(operador2);
    var result = eval(operador1 + operacion +operador2  );
    document.calc.resultado.value = result;
}

//otros convertidores
    	function convierte()
    	{
    		var km = document.conv.Kilometros.value;
    		//alert(km);
    		var result2 = eval(km*1000);
    		document.conv.resultado2.value=result2;
    	}

    	function cambia()
    	{
    		var dolares = document.camb.Dolares.value;
    		//alert(dolares);
    		var result3 = eval(dolares*15.002);
    		document.camb.resultado3.value=result3;
    	}

    	function encuentra()
    	{
    		var grados = document.conversion.centigrados.value;
    		//alert(grados);
    		var result4 = eval((grados*1.8)+32);
    		document.conversion.resultado4.value=result4;
    	}

*/