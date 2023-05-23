// This function will make a GET request to the backend and receive and answer
// containing all the songs from the artist with the passed name.
export function getSongsByArtist(name) {
    // Sent request to the server with the artist's name.
    console.log("We are at the songByArtist request, at artistService, CURRENTLY ONLY mocking data.")

    // This is the mock for the answer from the server
    return {
        songs: [
            {
                title: "who lets the dog out",
                id: 0,
                duration: 4,
                releaseYear: 1993
            },
            {
                title: "nesiha",
                id: 1,
                duration: 4,
                releaseYear: 1992
            },
            {
                title: "killer queen",
                id: 2,
                duration: 4,
                releaseYear: 2001
            }]
    }
}