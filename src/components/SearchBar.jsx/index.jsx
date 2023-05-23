import React from "react";

function SearchBar({ artists, setArtists }) {
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        const updatedArtists = artists.map((artist) => {
          return {
            ...artist,
            songs: artist.songs.filter((song) =>
              song.title.toLowerCase().includes(searchTerm.toLowerCase())
            ),
          };
        });
        setArtists(updatedArtists);
      };
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <button type="submit"><i className="fa fa-search">Submit</i></button>
      </form>
    );
  }

export default SearchBar;

  