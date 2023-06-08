function Recuperar(){ 
	 
		var usuario = document.login.usuario.value; 
		var password = document.login.password.value; 

			if (usuario=="" || password=="") { 
				alert("Por favor llena ambos campos"); 
			} else { 
				window.location="login.html"; 
			} 

		} 

