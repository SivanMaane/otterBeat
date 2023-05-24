import { useState } from 'react';
import SearchBar from '../../components/SearchBar.jsx/index';
import SongsList from '../../components/songs/index';
import ButtonWithHeartIcon from '../../components/HeartIcon';


function Home() {
    // songs are the SONGs of an artist that the user queried for.
    const [songs, setSongs] = useState(null);
    const [favoriteList, setFavoriteList] = useState([]);
    console.log('the songs in Home is:', songs);
    console.log('the favoriteList in Home is:', favoriteList);

    console.log('1234')
    
    return (
        <div>
            <h1>Home page</h1>
            <SearchBar setSongs={setSongs} favoriteList={favoriteList} setFavoriteList={setFavoriteList}/>
            { songs ? <SongsList songsObject={songs} favoriteList={favoriteList} setFavoriteList={setFavoriteList}/> : null}
            
        </div>
        
    );
}

export default Home;