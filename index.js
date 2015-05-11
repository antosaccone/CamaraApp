
function sacaFoto(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50, //String en formato JSON
		destinationType: Camera.DestinationType.DATA_URL
	});
}

function onSuccess(imageData) { //imageData guarda el String que tiene toda la info de la foto
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData; //Convierte la imagen a base64
}

function onFail(message) {
    alert('Failed because: ' + message);
}
