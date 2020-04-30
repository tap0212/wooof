import React from 'react'
import './itmesHead.styles.scss'
import ImageHelper from '../item.component/helper/ImageHelper'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const ItemsHead = (ItemsList) => {
    return (
        <div className="popup-container">
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <h2 className="popup-name">{ItemsList.ItemsList.name}<span className="heart">♡</span></h2>
                    <h4 className="popup-breed">Breed: {ItemsList.ItemsList.breed}</h4>
                    <h4 className="popup-age">Age: {ItemsList.ItemsList.age}</h4>
                    <h4 className="popup-location">Location: {ItemsList.ItemsList.location}</h4>
                    <p className="popup-description">{ItemsList.ItemsList.description}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div id="popup-image-container">
                    <ImageHelper id="image" ItemsList={ItemsList.ItemsList}/>
                    <div className="form-link-container">
                         <Link className="form-link"  to='/adopt'>Give Him A Home</Link>
                    </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemsHead


