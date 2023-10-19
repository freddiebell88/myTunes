// let url = 'https://itunes.apple.com/search?term=dua+lipa&entity=song&limit=20'


let searchResults = document.querySelector('#searchResults')
let searchForm = document.querySelector("#searchForm")
let searchField = document.querySelector("[name=searchInput]")

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(searchField.value);
    let url = buildUrl(searchField.value);
    fetch(url)
    // build url function goes here? 
    .then((response) => {
        console.log(response)
        return response.json()
        
    }).then((data) => {
        console.log(data)
        console.log(data.results)
        console.log(data.results[0].artistName)
        
        buildResults(data.results)
    })

})

//make a function to build url string with search field input to add to url variable string

function buildResults(musicArray) {
    for (let result of musicArray) {
        let resultBox = document.createElement('div')
        resultBox.classList.add('result')
        searchResults.appendChild(resultBox)
        let songName = document.createElement('h4')
        songName.innerText = result.trackName
        resultBox.appendChild(songName)
        searchResults.appendChild(resultBox) 
        //add artist name
        let artistName = document.createElement('div')
        artistName.innerText = result.artistName
        artistName.classList.add('artistName')
        resultBox.appendChild(artistName)
        //add cover art
        let cover = document.createElement('img')
        cover.classList.add('img') 
        cover.src = result.artworkUrl100
        resultBox.appendChild(cover)
    }
}

function buildUrl(searchTerm) {
    let url = 'https://itunes.apple.com/search?term=' + searchTerm + '&entity=song&limit=20'
    
    return url
}

//add div for player and event listener for play button - where do you want the play button
//
//function playPreview() {
    //grab the preview value from api
    //

}
