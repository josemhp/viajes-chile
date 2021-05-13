//Smooth Efect
$("a").click(function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    var gato = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(gato).offset().top || 0,
      },
      800,
      function () {
        window.location.hash = gato;
      }
    );
  }
});

// Toggle Cards
// Cuando documento carga
$(document).ready(function () {
  // Ocultar todos los cards
  $(".related .card-body").fadeOut();

  // Cuando se hace click en un card de la seccion related
  $(".related .card").click(function () {
    // Buscar el contenido del card
    var cardContent = $(this).find(".card-body").first();

    // Usar la funci{on de la clase
    $(cardContent).fadeToggle();
  });
});

// Bootstrap Carousel
$(".carousel").carousel();
