import React from "react";
import {getSongsByArtist} from "../../apiService/artistsService.js";
import { useState } from 'react';


function SearchBar({setSongs}) {

    // When a user writes something in the searchBar, update a variable
    const [searchContent, setSearchContent] = useState("");

    const handleSearch = (event) => {
        const artistName = searchContent;
        const songsByArtist = getSongsByArtist(artistName);
        console.log('this are the songs: ', songsByArtist)

        setSongs(songsByArtist);
      };

    return (
      <>
        <input type="text" placeholder="Search..."
               onChange={(event) => {
                   console.log("The search content is: ", event.target.value)
                   setSearchContent(event.target.value)
                }}
        />
        <button onClick={handleSearch}><i className="fa fa-search">Submit</i></button>
      </>
    );
  }

export default SearchBar;

  