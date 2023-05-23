import React from 'react'
import SongCard from './SongCard'

function SongsList({songsObject}) {
    console.log('this is the song : ', songsObject)
    return (
        <>
            {/*[songCard1, songCard2, ...]*/}
            {songsObject ? songsObject.songs.map((song, index) => {
                return <SongCard id={song.id}
                                 duration={song.duration}
                                 releaseYear={song.releaseYear}
                                 title={song.title} 
                                key={index}/>
            }): null}
        </>
    )
}

export default SongsList
