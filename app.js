$(document).ready(function(){

   var url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
   var key = '67be3c918dc1481d4f70cce406af7bb4'
   var coords = {
     scl:'-33.4377968,-70.6504451',
     valpo: '-33.024503,-71.5518119',
     qta: '-32.879997,-71.2473555'

    $('#select').on('change',function() {
    $.ajax({
      url: url + key + '/' + coords[$(this).val()],
      method: 'GET'
    }).then(function(data) {
      console.log(data);
    });
  })
});

$(document).ready(function(){


   }


//leafletjs.com > descargar libreria librería ultima versión estable 1.3.4 > El archivo zip descomprimir y agregar carpeta en ruta del proyecto (utilizaremos el js y eñl css) > agregarlo al html con la etiqueta script al final del body y con la eqtiqueta link antes de mi css en head
//mapbox.com > registrarse > entrar para obtener API KEY
//>Sección Acces tokens > genera automaticamente un tokens para obtener los datos
// Tener un contenedor donde irá el mapa (div id=map) que tiene que tener un alto para indicar cuanto medirá
//En la página de leaflet > tutoriales > guía de inicio (explica lo mismo anterior) > en js indicamos como utilizaremos el mapa Y CON QUE ACCIONES
// SCRIPT> function generarMapa(){ var mymap = L.map ('iddelmapa').setView([numeros]);}
//Luego se llama en documnt ready, cuando esté listo el documento inicializar el mapa: generarmapa();
//siguiente paso: agregar el mapa: L.tileLayer (en el guía de leaflet), se copia el código y se pega dentro de la función generar mapa. Se copia luego el token de mapbox y se pega en accesToken (que está en lo que pegamos anteriormente). al guardar se debería ver el generarMapa
//centrar el mapa al buscar una ubicación: var mymap =... es mi ubicación en ella se pegan las coordenadas y aparecerá el lugar en el centro
//agregar marcador: var marker... (en leaflet) dice add to (mymap) ahí va la variable del mapa y la coordenada correspondiente para que  se agregue en nuestro mapa
//paso siguiente que cambie el marcador y la ubicación al momento que selecciono otro lugar. >ajax>function changeMarkerPosition(coords) { var latitud=coords.split('','')[0] var longitud=coords.split('','')[1]}} (cortar las coordenadas que estan como string en dos elementos (lat y long); var latitu)
// >buscar en la liberia como mover el mapa > leaflet > mymap.panTo(new L.latlng(Latitud, Longitud))

//buscar como hacer para que se elimine el marcador anterior porque si se hace zoom out se verán los 3 juntos

//Cada accion en una función y cada dato en una variable
