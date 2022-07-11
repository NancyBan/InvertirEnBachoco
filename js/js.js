//se crea la variable que guarda la seleecion del formulario
var select = document.querySelector("#selectGOD")

//Se crea la función que cambiará la selección que hagas
function cambioBienPro(){
	//Si la opcion que elegiste no es la 4, te dirá lo siguiente
	if (select.value!=4){
		alert("Estas invirtiendo muy poco!!! Quieres retirarte a los 21 años o no?");
	}
	//Si tu seleccion es la 4, te dirá lo siguiente
	if(select.value==4){
		alert("Si le sabes wey, te vas a hacer millonario");
	}
}
//Se crea el evento click   
select.addEventListener("click", cambioBienPro);