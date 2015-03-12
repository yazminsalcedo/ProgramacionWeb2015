$(document).ready(
  function(){

    $('#frijol1').hide();
    $('#frijol2').hide();
    $('#frijol3').hide();
    $('#frijol4').hide();
    $('#frijol5').hide();
    $('#frijol6').hide();
    $('#frijol7').hide();
    $('#frijol8').hide();

     var c
     var n
     var miArray = new Array(8)
      
    for (var i=1 ;i<=8 ;i++)
      {
        miArray[i]=(Math.round(Math.random()*54+1));

      }


      for (var i=1 ;i<=8 ;i++)
      {
        for(var j=1 ;j<=8 ;j++)
        
        if(i !=j){
           if(miArray[i]==miArray [j])
           {
              miArray[i]=(Math.round(Math.random()*54+1));
            }
          }
      }

     for (var i=1 ;i<=8 ;i++)
      {
        
        n = 'img/loteria-'+ miArray[i]+'.jpg' ;
        $('#cartaT'+i).attr('src',n);
      }

    var nuevacarta;
    var cont = 0;
    setInterval(
      function(){
        //console.log('Hola');
        //console.log(Math.round(Math.random()*10));

        cont= (Math.round(Math.random()*54+1));

        nuevacarta = 'img/loteria-'+cont+'.jpg' ;
        $('#cartaMaestra').attr('src',nuevacarta);

        if (cont > 54) {
          cont = 0;
        };

      },2000
    );



  
    $('.carta').click(
      function(){
        
      }
    );


  }
);
 


     