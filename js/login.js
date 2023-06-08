function Login(){ 
	 
		var usuario = document.login.usuario.value; 
		var password = document.login.password.value; 

			if (usuario=="" || password=="") { 
				alert("Por favor llena ambos campos"); 
			} else if (usuario=="alumno" && password=="12345") { 
				window.location="modulos/index.html"; 
			} else if (usuario=="profesor" && password=="54321") { 
				window.location="modulos/index.html"; 
			} else if (usuario=="tutor" && password=="09876") { 
				window.location="modulos/index.html"; 
			} else if (usuario=="administrador" && password=="67890") { 
				window.location="modulos/index.html"; 
			} else{
				alert("El usuario o contraseña son incorrectos. Verifique los datos ingresados e intente nuevamente");
			}

		} 
