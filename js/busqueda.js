bars_search = document.getElementById('buscador');
cover_busqueda = document.getElementById('cover_busqueda');
inputSearch = document.getElementById('inputSearch');
box_search = document.getElementById('box_search');




document.getElementById('icono').addEventListener('click', mostrar_buscador);
document.getElementById('cover_busqueda').addEventListener('click', ocultar_buscador);
document.getElementById('inputSearch').addEventListener("keyup", buscador_interno);




function mostrar_buscador(){
	bars_search.style.top = "97px";
	cover_busqueda.style.display = "block";
	inputSearch.focus();

	if (inputSearch.value === "") {
		box_search.style.display = "none";
	}
}

function ocultar_buscador(){
	bars_search.style.top = "0px";
	cover_busqueda.style.display = "none";
	inputSearch.value = "";
	box_search.style.display = "none";
}




function buscador_interno() {
	filtro = inputSearch.value.toUpperCase();
	li = box_search.getElementsByTagName('li');

	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName('a')[0];
		textValue = a.textContent || a.innerText;

		if (textValue.toUpperCase().indexOf(filtro) > -1){
			li[i].style.display = "";
			box_search.style.display = "block";
			
			if (inputSearch.value == "") {
				box_search.style.display = "none";
			}
		}
		else{
			li[i].style.display = "none";
		}

	}

}

