let searchResults = document.querySelector('#searchResults')
let searchForm = document.querySelector("#searchForm")
let searchField = document.querySelector("[name=searchInput]")
let playPreview = document.querySelector("audio")
let nowPlaying = document.querySelector("#nowPlaying")


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let url = buildUrl(searchField.value);
    fetch(url)
    .then((response) => {
        console.log(response)
        return response.json()    
    }).then((data) => {
        console.log(data)
        console.log(data.results)
        
        buildResults(data.results)
    }).catch((error) => {
        console.log("Uh oh!")
        })
    })
    
    function buildResults(musicArray) {
        searchResults.innerHTML = ""
    if (musicArray.length === 0) {
        searchResults.innerText = "Nothing to see here. Try Again."
    } else {
    for (let result of musicArray) {
    
        let resultBox = document.createElement('div')
        resultBox.classList.add('songBox')
        searchResults.appendChild(resultBox)
        //add cover art
        let cover = document.createElement('img')
        cover.classList.add('cover') 
        cover.src = result.artworkUrl100
        resultBox.appendChild(cover)
        //add artist name
        let artistName = document.createElement('div')
        artistName.innerText = result.artistName
        artistName.classList.add('artistName', 'songBox')
        resultBox.appendChild(artistName)
        //add song name
        let songName = document.createElement('div')
        songName.innerText = result.trackName
        songName.classList.add('songName', 'songBox')
        resultBox.appendChild(songName)
        //add album name
        let albumName = document.createElement('div')
        albumName.innerText = result.collectionName
        albumName.classList.add('albumName', 'songBox')
        resultBox.appendChild(albumName)
        searchResults.appendChild(resultBox) 
        //add play button div and nest listener event to play the song preview 
        let playButton = document.createElement('button')
        playButton.innerText = "PLAY"
        playButton.classList.add('playButton')
        resultBox.appendChild(playButton)
        //play song
        playButton.addEventListener('click', () => {
            playPreview.src = `${result.previewUrl}`;
            nowPlaying.innerText = `Now Playing: ${result.trackName}, ${result.artistName}, ${result.collectionName}`
            
        })
    }
}
}


function buildUrl(searchField) {
    let url = 'https://itunes.apple.com/search?term=' + searchField.split(' ').join('+') + '&entity=song&limit=25'
    return url
}
