import React from 'react'
import SongCard from './SongCard'

function SongsList({songs}) {
    return (
        <>
            {/*[songCard1, songCard2, ...]*/}
            {songs.map(song => {
                return <SongCard id={song.id}
                                 duration={song.duration}
                                 releaseYear={song.releaseYear}
                                 title={song.title}/>
            })}
        </>
    )
}

export default SongsList
