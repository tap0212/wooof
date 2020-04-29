import React from 'react'
import './item.styles.scss'
const CardListItem = props => {
    return (
      <div className="card">
        <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Avatar"/>
        <div className="container">
        <h4 className="name"><b>{props.ItemsList.name}<span className="heart">♡</span></b></h4>
         <h3 className="span-age">Age:  {props.ItemsList.age}</h3>
         <h3 className="span-location">{props.ItemsList.location}</h3>

       </div>
    </div>
    );
  };

export default CardListItem
