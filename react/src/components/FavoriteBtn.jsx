import { useState } from 'react';
import heartFilled from '../assets/heart-filled.svg';
import heart from '../assets/heart.svg';

const FavoriteBtn = () => {
  const [isFav, setIsFav] = useState(false);

  return (
    <button onClick={() => setIsFav(!isFav)}>
      <img src={isFav ? heartFilled : heart} alt="heart" />
    </button>
  );
};

export default FavoriteBtn;
