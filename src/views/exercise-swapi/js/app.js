$(document).ready(function() {
  var containerCards = document.getElementById("card-deck");
  var img = document.getElementById('img'); // Declaramos variable.
  var planetCharacters = ""; // Declaramos variable en vacío.

  AJAXrequest();
  function AJAXrequest() {
    // Creamos la función que hará la petición ajax.
    var count = 0;
    for (var i = 1; i < 88; i++) {
      $.ajax({
        // La url a la que se le está haciendo la petición.
        url: `https://swapi.co/api/people/${i}/`,
        contentType: "application/json",
        // Especifica si será una petición POST o GET.
        method: "GET",
        // Si la petición es satisfactoria ejecutar lo siguiente.
        success: function(response) {
          var data = response;
          var characters = ` <div class='card'>
              <div class='card-image'> 
                <img id= "img" src='https://starwars-visualguide.com/assets/img/characters/${i}.jpg' alt='${
            data.name
          }'>
              </div>
              <div class='card-body'>
                <div class='card-title'>
                  <h3>${data.name}</h3>
                </div>
                <div class='card-exceprt'>
                  <p> <b>Altura:</b>${data.height}cm </p>
                  <p> <b>Color cabello:</b>${data.hair_color} </p>
                  <p> <b>Cumpleaños:</b>${data.birth_year}</p>
                  <p class='planet${i}'><b>Planet:</b></p>
                </div>
              </div>
            </div>`;

          /* $.ajax({
          // Hacemos una petición adicional para el planeta del personaje.
          url: data.planetCharacters,
          contentType: "application/json",
          method: "GET",
          success: function(response) {
            $(`.planet${i}`).html("<b>Planeta:</b>" + response.name);
          }
        });*/

          containerCards.innerHTML += characters;
          count++;
        },

        // Código a ejecutar si la petición falla.
        fail: function(request) {
          if (request) {
            alert(request.message);
          }
        }
      });
    }
  }
});
