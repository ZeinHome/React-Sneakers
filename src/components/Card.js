import like from './images/favorite/btn-like.svg';
import unlike from './images/favorite/btn-unlike.svg';
import add from './images/card/btn-add.svg';
import done from './images/card/btn-done.svg';
import React from 'react';

function Card({
  title,
  price,
  imageUrl,
  id,
  onAdd,
  onFavorite,
  favoried = false,
}) {
  const [isAdded, setIsAdded] = React.useState('false');
  const [isFavorite, setIsFavorite] = React.useState(favoried);

  function onAddClick() {
    onAdd({ title, price, imageUrl, id });
    setIsAdded(!isAdded);
  }

  function onFavoriteClick() {
    onFavorite({ title, price, imageUrl, id });
    setIsFavorite(!isFavorite);
  }

  return (
    <li className="gallery__item">
      <img
        onClick={onFavoriteClick}
        className="btn-favorite"
        src={isFavorite ? like : unlike}
        alt={isFavorite ? 'unlike' : 'like'}
      />
      <div className="card">
        <img width={133} height={112} src={imageUrl} alt="title" />
        <h3 className="gallery__title">{title}</h3>
        <div className="card-menu">
          <div className="price">
            <span className="price__text">Цена:</span>
            <p className="price__total">{price} грн.</p>
          </div>
          <img
            onClick={onAddClick}
            src={isAdded ? add : done}
            alt={isAdded ? 'add' : 'done'}
          />
        </div>
      </div>
    </li>
  );
}

export default Card;
