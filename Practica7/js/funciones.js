
$(document).ready(
	function(){

		var nuevacarta;
		var cont = 1;
		setInterval(
			function(){

				nuevacarta = 'img/loteria-'+cont+'.jpg';
				$('#cartaMaestra').attr('src',nuevacarta);
				cont ++;

				if (cont > 3) {
					cont = 1;
				};

			},2000
		);

		$('.carta').click(
			function(){
				$(this).hide();
			}
		);

	}
);