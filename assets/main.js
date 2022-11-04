const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('get_joke');

//function to generate next joke
async function generateJoke() {
    //calling the icanhaz API
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    //gets joke object from the await jokeRes above
    const joke = await jokeRes.json();

    //setting a new joke in the joke element
    jokeElement.innerHTML = joke.joke;
}

//calling the function to get the joke when page loads
generateJoke();

//adding event listener to get joke when btn is clicked
jokeBtn.addEventListener('click', generateJoke);