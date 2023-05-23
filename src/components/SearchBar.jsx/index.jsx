import React from "react";
import {getSongsByArtist} from "../../apiService/artistsService.js";

function SearchBar({setSongs}) {

    // When a user writes something in the searchBar, update a variable
    const [searchContent, setSearchContent] = useState("");

    const handleSearch = (event) => {
        const artistName = searchContent;
        const songsByArtist = getSongsByArtist(artistName);

        setSongs(songsByArtist);
      };

    return (
      <form>
        <input type="text" placeholder="Search..."
               onChange={(event) => {
                   console.log("The search content is: ", event.target.value)
                   setSearchContent(event.target.value)
                }}
        />
        <button type="submit" onClick={handleSearch}><i className="fa fa-search">Submit</i></button>
      </form>
    );
  }

export default SearchBar;

  