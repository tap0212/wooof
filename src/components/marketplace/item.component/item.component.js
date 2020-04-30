import React from 'react'
import './item.styles.scss'
import ImageHelper from './helper/ImageHelper'
const CardListItem = ItemsList => {
    return (

      <div className="card">
      <ImageHelper ItemsList={ItemsList.ItemsList}/>
        <div className="container">
        <h4 className="name"><b>{ItemsList.ItemsList.name}<span className="heart">♡</span></b></h4>
        <h3 className="span-age">Breed:  {ItemsList.ItemsList.breed}</h3>
         <h3 className="span-age">Age:  {ItemsList.ItemsList.age} (M/Y)</h3>
         <h3 className="span-location">{ItemsList.ItemsList.location}</h3>

       </div>
    </div>
    );
  };

export default CardListItem
