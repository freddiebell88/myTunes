let url = 'https://itunes.apple.com/search?term=mika&entity=allArtist&attribute=allArtistTerm'

fetch(url)
.then((response) => {
    console.log(response)
})