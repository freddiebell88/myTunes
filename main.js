let url = 'https://itunes.apple.com/search?term=dua+lipa&entity=song&limit=20'

let searchResults = document.querySelector('#searchResults')

searchButton.addEventListener('click', () => {
fetch(url)
    .then((response) => {
        console.log(response)
        return response.json()
    }).then((data) => {
        console.log(data)
        console.log(data.results)
        console.log(data.results[0].artistName)
        // let artist = data.results[0]
        // let result = document.createElement('div')
        // result.innerText = `${artist.artistName} ${artist.primaryGenreName} ${artist.trackName}`
        // searchResults.appendChild(result)
        buildResults(data.results)
    })

})

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
