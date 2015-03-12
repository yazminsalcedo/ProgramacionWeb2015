$(document).ready(
	function(){
		$('#gana').hide();

		var imagen;
     	var miArray = new Array(8);
      
    	for (var i=1 ;i<=8 ;i++)
      	{
        	miArray[i]=(Math.round(Math.random()*53+1));
	    }

	    for (var i=1 ;i<=8 ;i++)
    	{
        	for(var j=1 ;j<=8 ;j++)
        	{
                if(i !=j)
                {
        			if(miArray[i]==miArray [j])
           			{
              			miArray[i]=(Math.round(Math.random()*53+1));
            		}
          		}
          	}
      	}

    	for (var i=1 ;i<=8 ;i++)
      	{
        	imagen = 'img/loteria-'+ miArray[i]+'.jpg' ;
        	$('#cartaT'+i).attr('src',imagen);
      	}

		var cont2=1;
		var cont = 0;
		var valor;
		var nuevacarta;
		var contClick=0;

		var cartas = ["1","2","3","4","5","6","7","8","9","10",
				"11","12","13","14","15","16","17","18","19","20",	
				"21","22","23","24","25","26","27","28","29","30",
				"31","32","33","34","35","36","37","38","39","40",
				"41","42","43","44","45","46","47","48","49","50",
				"51","52","53","54"];
		setInterval(
		function baraja()
			{
				
				cont = Math.floor(Math.random()*(cartas.length));
				valor= cartas[cont];
				cartas.splice(cont, 1);
				//console.log(valor);
				//console.log(cont2);
				cont2=cont2+1;
				nuevacarta = 'img/loteria-'+valor+'.jpg';
				$('#cartaMaestra').attr('src',nuevacarta);
				//alert(cartas);
				
				if(cont2>54)
				{
					$('#panel').hide('slow');
				}
			},3000);

					
		$('.carta').click
		(
			function(){
				$(this).fadeOut(200);
				$(this).fadeIn(200);
				$(this).animate({opacity:0.25});
				contClick++;

				if (contClick==8) 
					{ 
						$('.carta').hide();
						$('.img').hide();
						$('#panel').hide('slow');
						$('#gana').show('fast');
					};
			}
			
		);

		$('.img').click
		(
			function(){
				$(this).fadeOut(200);
				$(this).fadeIn(200);
			}		
		);
	}
);

