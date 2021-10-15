
const promises = [];
// getting html ui eliment
const pokedex = document.getElementById("pokedex");

const getPokemon = () => {
    for (let i = 1; i <= 150; i++) {
        // getting the pokemon api and storeing it in a varible
        const api = "https://pokeapi.co/api/v2/pokemon/" + i;


        // puting all the pokemon from my api into the promise aaray
        promises.push(fetch(api).then((Response) => Response.json()));
    }
}

getPokemon();

// promise.all - runs all the data from my promises aaray at once
Promise.all(promises).then(r => {
    const pokemon = r.map(data => ({
        // storeing the data i want in an object
        name: data.name,
        id: data.id,
        pic: data.sprites["front_default"],
        type: data.types.map(t => t.type.name).join((" , "))
    }));

    // call the function in and use our pokemon aaray as the peranter
    displayPokemon(pokemon);
   
});

const displayPokemon = (pokemon) => {
    // makes changesto  an aaray
    // every pokemon has a list tag added to it
    const html = pokemon.map(p => '<li class="card"><img class="card-img" src="' + p.pic + '"/> <h2 class="card-title">' + p.id + '. ' + p.name + '</h2><p class ="card-type">' + p.type + '</p></li > ');
       
    // giving my ul tag the data of my html varible
    pokedex.innerHTML = html;

};


