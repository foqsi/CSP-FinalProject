document.getElementById('cocktailButton').addEventListener('click', sendCocktail);

async function sendCocktail() {
    const data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            var response = JSON.parse(this.responseText);

            const recipeName = response.body[0].name;
            const ingredients = response.body[0].ingredients.join('<br>');

            const cocktailNameEl = document.getElementById('cocktail-name-text');
            cocktailNameEl.innerHTML = `${recipeName}`;

            const cocktailIngredientsEl = document.getElementById('cocktail-ingredients-text');
            cocktailIngredientsEl.innerHTML = `<br>${ingredients}`;

            console.log(this.responseText);
        }
    });

    xhr.open('GET', 'https://cocktails3.p.rapidapi.com/random');
    xhr.setRequestHeader('X-RapidAPI-Key', 'b6285d5f53msha5af2c96fe83611p105edajsnb84eef3660d8');
    xhr.setRequestHeader('X-RapidAPI-Host', 'cocktails3.p.rapidapi.com');

    xhr.send(data);
}
