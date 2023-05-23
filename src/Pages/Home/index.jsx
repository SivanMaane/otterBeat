import { useState } from 'react';
import SearchBar from '../../components/SearchBar.jsx/index';
import SongsList from '../../components/songs/index';

function Home() {
    const [artists, setArtists] = useState([
        { artist: "Anna Zak", songs: [] },
        
    ]);

    return (
        <div>
            <h1>Home page</h1>
            <SearchBar artists={artists} setArtists={setArtists}/>
            <SongsList artists={artists}/>
        </div>
    );
}

export default Home;