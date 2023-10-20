// let url = 'https://itunes.apple.com/search?term=dua+lipa&entity=song&limit=20'


let searchResults = document.querySelector('#searchResults')
let searchForm = document.querySelector("#searchForm")
let searchField = document.querySelector("[name=searchInput]")

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(searchField.value);
    let url = buildUrl(searchField.value);
    fetch(url)
    
    .then((response) => {
        console.log(response)
        return response.json()
        
    }).then((data) => {
        console.log(data)
        console.log(data.results)
        // console.log(data.results[0].artistName)
        
        buildResults(data.results)
    })

})

//make a function to build url string with search field input to add to url variable string

function buildResults(musicArray) {
    for (let result of musicArray) {
        //made result box a button for making it play the song maybe??
        let resultBox = document.createElement('div')
        resultBox.classList.add('result')
        searchResults.appendChild(resultBox)
        //add cover art
        let cover = document.createElement('img')
        cover.classList.add('img') 
        cover.src = result.artworkUrl100
        resultBox.appendChild(cover)
        //add artist name
        let artistName = document.createElement('div')
        artistName.innerText = result.artistName
        artistName.classList.add('artistName', 'result')
        resultBox.appendChild(artistName)
        //add song name
        let songName = document.createElement('div')
        songName.innerText = result.trackName
        songName.classList.add('songName', 'result')
        resultBox.appendChild(songName)
        searchResults.appendChild(resultBox) 
        //add play button div and nest listener event to play the song preview 
        let playPreview = document.createElement('button')
        playPreview.innerText = "PLAY"
        playPreview.classList.add('playButton')
        resultBox.appendChild(playPreview)
    }
}

function buildUrl(searchField) {
    let url = 'https://itunes.apple.com/search?term=' + searchField.split(' ').join('+') + '&entity=song&limit=25'
    
    return url
}
//^^ this works for name without + but you'll need to find the function for building the url string with more terms
//add div for player and event listener for play button - where do you want the play button
//
//function playPreview() {
    //grab the preview value from api
    //}
