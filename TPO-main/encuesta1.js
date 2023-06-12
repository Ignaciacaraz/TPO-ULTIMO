
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formulario");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que el formulario se envíe normalmente

      // Guardar el valor en el localStorage
      localStorage.setItem("formularioCompletado", "1");

      // Redirigir a otra página
      window.location.href = "encuestas.html";
    });

    // Verificar si el formulario no se envió y guardar el valor correspondiente
    if (localStorage.getItem("formularioCompletado") !== "1") {
      localStorage.setItem("formularioCompletado", "2");
    }


    if (localStorage.getItem("formularioCompletado") == "1") {
      respuesta1=document.getElementById("respuesta1");

      respuesta1.checked = true;
      respuesta1.disabled = true;
  
      respuesta2=document.getElementById("respuesta2");
  
      respuesta2.checked = true;
      respuesta2.disabled = true;
  
  
      respuesta3=document.getElementById("respuesta3");
  
      respuesta3.checked = true;
      respuesta3.disabled = true;
  
      
      respuesta4=document.getElementById("respuesta4");
  
      respuesta4.checked = true;
      respuesta4.disabled = true;
  
      enviado=document.getElementById("enviado");
      enviado.disabled = true;
  
    }


  });

