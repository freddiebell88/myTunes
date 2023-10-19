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
    for (let song of musicArray) {
        let songBox = document.createElement('div')
        songBox.classList.add('result')
        let songName = document.createElement('h4')
        songName.innerText = song.trackName
        songBox.appendChild(songName)
        searchResults.appendChild(songBox) 
    }
}

