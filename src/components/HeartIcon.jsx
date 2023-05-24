import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const ButtonWithHeartIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}></button>
      {isClicked &&  favoritList ? <FaHeart color="red" /> : null}
    </div>
  );
};

export default ButtonWithHeartIcon;
