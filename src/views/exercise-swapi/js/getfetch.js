$(document).ready(function() {
  const containerCards = document.getElementById("card-deck");
  var homeworld = ''; 

  //  Invocar fetch con la URL, de manera predeterminada, la API de extracción utiliza el método GET
  getFetch();
  function getFetch() {
    let count = 0;
    for (let i = 1; i < 88; i++) {
      const url = `https://swapi.co/api/people/${i}/`;
      fetch(url)
        .then(resp => resp.json())
        .then(function(data) {
          console.log(data);
          if (i === 17) {
            return (i = 18);
          }

          const characters = ` <div class='card m-5'>
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
        
        
          fetch(url)
            .then(resp => resp.json())
            .then(function(data) {
              console.log(data.homeworld);
              $(`.planet${i}`).html("<b>Planeta:</b>" + data.homeworld.name);
            });
            

          containerCards.innerHTML += characters;
          count++;
        })
        .catch(function(error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    }
  }
});
