
//!EJECUTAR EL CONJUNTO DE ARCHIVOS EN HTDOCS !!!!!!!!!!!!!!

//EJEMPLO CON MÉTODO POST:

fetch("https://reqres.in/api/users",{
  method: "POST",
  body: JSON.stringify({
    "nombre": "Pepo",
    "apellido": "Posiado"
  }),
headers: {"Content-type": "application/json"}
})

.then(resultado=> resultado.json())
.then(resultado=>console.log(resultado));


//EJEMPLO CON MÉTODO GET:

let imagen= document.querySelector(".imagen");

fetch("arsom.jpg")
.then(resultado=> resultado.blob()) //Recuerde primero especificar el tipo de promesa (de elemento)
.then(resultado=>imagen.src= URL.createObjectURL(resultado))
/* 
URL.createObjectURL= Estamos accediendo al objeto url y con el método createObjectURL
creamos TEMPORALMENTE una url para que el objeto imagen (la imagen jpg) se pueda visualizar
dentro de la etiqueta img del archivo .html (se crea un atributo src dentro de la etiqueta)
!ESTO FUNCIONA CON CUALQUIER TIPO DE ARCHIVO (PDF, VIDEO, ETC...)
*/

/*
Si quiero colocar la ruta local normal del archivo, entonces:
.then(resultado=>imagen.src= "arsom.jpg")
*/