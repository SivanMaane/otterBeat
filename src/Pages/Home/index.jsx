import { useState } from 'react';
import SearchBar from '../../components/SearchBar/index';
import SongsList from '../../components/songs/index';

function Home() {
    // songs are the SONGs of an artist that the user queried for.
    const [songs, setSongs] = useState(null);
    console.log('1234')
    console.log('the songs in Home is: ', songs)
    return (
        <div>
            <h1>Home page</h1>
            <SearchBar setSongs={setSongs} />
            { songs ? <SongsList songsObject={songs}/> : null}
        </div>
    );
}

export default Home;