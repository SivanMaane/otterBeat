import { useState } from 'react';
import SearchBar from '../../components/SearchBar.jsx/index';
import SongsList from '../../components/songs/index';

function Home() {
    // songs are the SONGs of an artist that the user queried for.
    const [songs, setSongs] = useState(null);


    return (
        <div>
            <h1>Home page</h1>
            <SearchBar setSongs={setSongs} onChange={()=>{}}/>
            { songs ? <SongsList songs={songs}/> : null}
        </div>
    );
}

export default Home;