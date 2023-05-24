import React from 'react';
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa';




function SongCard({id, title, duration, releaseYear, favoriteList, setFavoriteList}) {
        console.log("the favorite list is: ", favoriteList)
        const isFavorite = favoriteList.includes(id)
        const handleClick = () => {
            let newFavoriteList = []
                // isFavorite ?
                //     favoriteList.filter((favoriteId) => {
                //         return favoriteId !== id
                //     })
                //     :
                //     // returns the id and not the array!
                //     favoriteList.push(id)
            if (isFavorite) {
                newFavoriteList = favoriteList.filter((favoriteId) => {
                        return favoriteId !== id
                    })
            } else {
                favoriteList.push(id)
                // This will no work!
                // Because I pass the same object (favoriteList will remain as favoriteList)
                newFavoriteList = favoriteList

                // given an object list = [1,2,3]
                // The syntax :    [...list] ==> [1,2,3]
                // It will be the same elemnts inside the list
                // but the list will defer, they will point to a different place
                // in memory.


                setFavoriteList([...newFavoriteList])
            }

            console.log("I AM going to set the favoriteList to:", newFavoriteList)
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