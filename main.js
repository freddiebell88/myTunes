let url = 'https://itunes.apple.com/search?term=mika&entity=allArtist&attribute=allArtistTerm'


searchButton.addEventListener('click', () => {
fetch(url)
.then((response) => {
    console.log(response)
    return response.json
})
})
