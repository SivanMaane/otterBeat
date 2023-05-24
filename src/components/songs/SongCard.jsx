import React from 'react';
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa';




function SongCard({id, title, duration, releaseYear, favoriteList, setFavoriteList}) {
        console.log("the favorite list is: ", favoriteList)
        const isFavorite = favoriteList.includes(id)
        const handleClick = () => {
            const newFavoriteList = isFavorite ? favoriteList.filter((favoriteId) => {
                return favoriteId !== id 
            }) : favoriteList.push(id)
            console.log('the new favorite list is: ', newFavoriteList)
            setFavoriteList(newFavoriteList)

        };
        
        
      return (
        <div>
          <ul type='Song'>
            <li>Id: {id}</li>
            <li>Song: {title}</li>
            <li>Duration: {duration} minutes</li>
            <li>Release Year: {releaseYear}</li>
          </ul>
          <button onClick={handleClick}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
            {isFavorite ? <FaHeart color="red" /> : null}
        </div>
      );
    }
 

export default SongCard