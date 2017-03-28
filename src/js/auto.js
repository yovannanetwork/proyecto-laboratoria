$(document).ready(init);

function init(){
	$('.boton').hide();
	$('.opciones').on('click', validateOpcion);
}
function validateOpcion(){
	var containerOpcion = $('.cuadro');
	var opcion = $('.opciones').val();
	if(opcion == null || opcion == 0 ){
		$('.boton').show();
		return false;
	}else{
		//$('.boton').hide();
	}
	$()
	localStorageOrigin();
	localStorageDestino();
}
function localStorageOrigin(){
	$('.opciones').change(function(){
		var pais = $('.opciones').val();
		localStorage.setItem('paisOrigin', pais);
	});
}

function localStorageDestino(){
	$('.optionDest').change(function(){
		var paisDestino = $('.optionDest').val();
		localStorage.setItem('paisDestino', paisDestino);
	});
}