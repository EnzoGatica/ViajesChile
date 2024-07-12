$(document).ready(function () {
  // Smooth scroll
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Form validation
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    var isValid = true;
    var nombre = $("#text_nombre").val().trim();
    var asunto = $("#text_asunto").val().trim();
    var mensaje = $("#text_mensaje").val().trim();

    if (nombre === "") {
      isValid = false;
      alert("Por favor, ingrese su nombre.");
    }

    if (asunto === "") {
      isValid = false;
      alert("Por favor, ingrese el asunto.");
    }

    if (mensaje === "") {
      isValid = false;
      alert("Por favor, ingrese su mensaje.");
    }

    if (isValid) {
      alert(
        "Nombre: " + nombre + "\nAsunto: " + asunto + "\nMensaje: " + mensaje
      );
    }
  });
});
