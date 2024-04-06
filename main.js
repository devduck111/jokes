const jokerContainer = document.getElementById('joke')
const btn = document.getElementById('btn')
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokerContainer.textContent = `${item.joke}`
    })
}

btn.addEventListener("click",getJoke)
getJoke()