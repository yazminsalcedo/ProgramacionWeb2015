$(document).ready(function(){

	$('h1').hide('slow');
	$('h1').show('fast');

	$('h2').hide('slow');
	$('h2').show('fast');
	
		$('#img3').click(function(){
		$(this).hide('slow');//oculta imagen
		
		$(this).show('fast');//vuelve a mostrarla.
	});

});

	function calcula(){
		var monto = parseFloat(document.interes.monto.value);
		var meses = parseFloat(document.interes.meses.value);//tengo especificar variables float o int para que cuando 
															//haga sume no me las concatene sino que me las sume. 
		if(meses>=1 && meses<=3)
		{
			var vTotal = eval((monto*0.01)+monto);
			var pago = eval(vTotal/meses);
			

			document.interes.valor.value= vTotal;
			document.interes.m.value=monto;	
			document.interes.p.value=pago;
		}
		else 
		if(meses>=4 && meses<=7)
		{
			var vTotal = eval((monto*0.02)+monto);
			var pago = eval(vTotal/meses);
			

			document.interes.valor.value= vTotal;
			document.interes.m.value=monto;	
			document.interes.p.value=pago;
		}
		else
		if(meses>=8)
		{
			var vTotal = eval((monto*0.03)+monto);
			var pago = eval(vTotal/meses);
			

			document.interes.valor.value= vTotal;
			document.interes.m.value=monto;	
			document.interes.p.value=pago;
		}

	}

