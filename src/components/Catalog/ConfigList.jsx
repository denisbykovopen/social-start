import React from 'react';
import repeat from '../../assets/refresh.svg';

export default ({ list, submit, loadMoreBreeds }) => (
  <div className="catalog-config-breed-cardList">
    {list.values.map(item => (
      <div
        onClick={() => submit(item.id)}
        key={item.id}
        className="catalog-config-breed-card"
      >
        <img src={item.file} alt={item.name} />
        <p className="catalog-config-breed-card-type">{item.name}</p>
      </div>
    ))}
    {loadMoreBreeds && (
      <div
        onClick={loadMoreBreeds}
        className="catalog-config-breed-card"
        style={{ justifyContent: 'center' }}
      >
        <img src={repeat} alt="" />
        <p className="catalog-config-breed-card-type">
          Смотреть всех
        </p>
      </div>
    )}
  </div>
);
