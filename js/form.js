const btn = document.querySelector(".form_button")
btn.disabled = true

var inputs = document.querySelectorAll(".input_components")

const active = () => {
	inputs.forEach((a) => a.addEventListener("click",() => {
		a.classList.toggle("form_active")
	}))
	return inputs
}

const desactive = () => {
	inputs.forEach((a) => a.addEventListener("blur",() => {
		a.classList.remove("form_active")
	}))
}
const components = {name:false,email:false,textarea:false,asunto:false} 

const addClass = (inputForm) => {
 	inputForm.classList.add("form_error")
	inputForm.classList.remove("form_active")

}
const errorMensajes = document.querySelectorAll(".mensaje_error")


const campoNoVacio = (error) => {
    	error.style.display = "initial"
    	error.innerHTML = "Este campo no puede estar vacio"
} 

const verificador = () => {
	if(components.name === false || components.email === false || components.textarea === false || components.asunto === false ) {
		btn.disabled = true
		btn.style.backgroundColor = "#E9E5E5"
	} 
	if(components.name === true && components.email === true && components.textarea === true && components.asunto === true ) {
		btn.disabled = false
		btn.style.backgroundColor = "#0099CC"
	}
}

/*CAMPO NOMBRE*/
const name1 = inputs[0]
const error = document.querySelector(".mensaje_error_1")

name1.addEventListener("blur", () => {
	
	if(name1.value.length > 49) {
		errorMensajes[0].style.display = "initial"
		errorMensajes[0].innerHTML = "Este campo no puede tener más de 50 caracteres"
		addClass(name1)
		components.name = false
	} else if(name1.value.length === 0) {
		addClass(name1)
      	campoNoVacio(errorMensajes[0])
      	components.name = false
	} else {
		errorMensajes[0].style.display = "none"
		name1.classList.remove("form_error")
		components.name = true
	}
	
	/*if(name1.value.length == 0) {
      addClass(name1)
      campoNoVacio(errorMensajes[0])
      components.name = false
	} else {
	  errorMensajes[0].style.display = "none"
	  name1.classList.remove("form_error")
	  components.name = true
	}*/

	verificador()
})

/*	EMAIL  */
const email = inputs[1]


var emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

email.addEventListener("blur",() => {
	if(email.value.length === 0) {
			addClass(email)
			campoNoVacio(errorMensajes[1])
			components.email = false
		} else {
 	   		email.classList.remove("form_error")
 	   		errorMensajes[1].style.display = "none"
 	   		components.email = true
 		}
})
email.addEventListener("blur",() => {
 		
 		if(emailPattern.test(email.value) === false && email.value.length >= 1) {
			addClass(email)
  		    errorMensajes[1].style.display = "initial"
  			errorMensajes[1].innerHTML = "El correo debe estar en el formato correcto"
  			components.email = false
  		} else if(email.value.length === 0) {
  			addClass(email)
  			campoNoVacio(errorMensajes[1])
  			components.email = false
  		} else {
  			email.classList.remove("form_error")
  			errorMensajes[1].style.display = "none"
  			components.email = true
  		}
		verificador()
/*else {
  	        email.classList.remove("form_error")
  			errorMensajes[1].style.display = "none"
  			components.email = true
          }*/
	
})


/*CAMPO ASUNTO*/
const asunto = inputs[2]

asunto.addEventListener("blur" , () => {
	var asunto2 = asunto.value.split("")
	
	if(asunto2.length > 45) {
		errorMensajes[2].style.display = "initial"
		errorMensajes[2].innerHTML = "Este campo no puede tener mas de 50 caracteres"
		addClass(asunto)
		components.asunto = false
	} else if(asunto2.length === 0 )  {
		campoNoVacio(errorMensajes[2])
		addClass(asunto)
		components.asunto = false
	} else { 
		
		errorMensajes[2].style.display = "none"
		components.asunto = true
		asunto.classList.remove("form_error")
	} 

	/*if(asunto2.length === 0) {
	    campoNoVacio(errorMensajes[2])
		addClass(asunto)
		components.asunto = false
	} else {
		asunto.classList.remove("form_error")
		errorMensajes[2].style.display = "none"
		components.asunto = true
	} */

	verificador()
})


/* CAMPO MENSAJE  */
const campoMensaje = document.getElementById("text_area")
const textArea = document.getElementById("span")
const campoCaracteres = (input,num) => {
		input.style.display = "initial"
		input.innerHTML = `Este campo no puede tener mas de ${num} caracters`
}


campoMensaje.addEventListener("blur", () => {
 	
 	if(campoMensaje.value.length == 0) {
 		campoNoVacio(errorMensajes[3]) 
 		addClass(campoMensaje)
 	    components.textarea = false
 	} else {
 		errorMensajes[3].style.display = "none"
 		campoMensaje.classList.remove("form_error")
 		components.textarea = true
 	}

 	if(campoMensaje.value.length > 300) {
 		campoCaracteres(errorMensajes[3],"300")
 		addClass(campoMensaje)
 		components.textarea = false
 	} else {
 		textArea.classList.remove("form_error")
 		components.textarea = true
 	}
	

	verificador()
})

btn.addEventListener("click",(e) => {
	inputs.forEach((a) => {
		a.value = ""
	})
	//e.preventDefault()
})

verificador()
active()
desactive()
