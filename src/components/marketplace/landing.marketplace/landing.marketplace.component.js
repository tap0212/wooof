import React from 'react'
import Nav from '../../navbar/Navbar.component'
import './landing.marketplace.styles.scss'
import { API } from '../../../backend'
import Grid from '@material-ui/core/Grid';
import CardListItem from '../item.component/item.component'
export default class Landing extends React.Component {
    
    constructor(props) {
        super(props);
  
        this.state = {
            ItemsList : null,
            mounted:false
        };
      }

      componentWillMount() {
        fetch(`${API}/products`, {
            method: "GET"
          })
            .then(response => {
              return response.json();
            })
            .then((responseJson) => {
                this.setState({ ItemsList : responseJson, mounted:true })
              })
            .catch(err => console.log(err));
    }
  
    render(){
    return (
        <div>
            <Nav/>
            <h1 id="landingTitle">Choose One For You...</h1>
           <div className="descContainer">
           <p className="description">
            We believe that a dog can lift our mood, change our day, keep us active and transform a house into a home. They offer freely what humans can spend a lifetime learning – the ability to love unconditionally. They save our lives in so many ways; we owe it to dogs to return this amazing loyalty.
            </p>
            <br/>
            <p className="description">
            By adopting a dog through WOOF, you’ll be playing a vital part in ending the struggle of stray dogs all over the world. Sincerely, we want to thank you for choosing to rescue a dog who needs your help more than most. If you’re ready to find your perfect companion, start your search here or fill in an adoption form! Or read our adoption process overview, FAQs & success stories for more information.
            </p>
            {
                this.state.mounted && 
                <div className="root">
                <Grid container spacing={3}>

               {this.state.ItemsList.map(ItemsList => {
               return (
                    <Grid item xs={12} xl={3} md={4} sm={6}>
                      <CardListItem ItemsList={ItemsList}/>
                    </Grid>
               )
               })}
               </Grid>

               </div>

            }

           </div>
        </div>
    )
    }
}

