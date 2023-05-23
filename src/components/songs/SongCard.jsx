import React from 'react';

function SongCard({id, title, duration, releaseYear}) {
    return (
        <div>
            <List type='Song'>
                <li>{id}</li>
                <li>{title}</li>
                <li>{duration}</li>
                <li>{releaseYear}</li>
            </List>
            
        </div>
    )
}

export default SongCard