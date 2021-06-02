import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
import PartyHeader from './PartyHeader'
import styled from 'styled-components'
//import PartyFooter from '../partyFooter';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
    .party-highlight__card {
        padding: 24px 15px 26px 16px;
        object-fit: contain;
        border-radius: 6.5px;
        box-shadow: 3px 6px 19px -3px rgba(0, 0, 0, 0.3);
        background-color: #ffffff;
    }
    .party-highlight__card-title {
        margin: 16px 45px 16px 19px;
        font-family: SFProDisplay;
        font-size: 22px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #3d7e7f;
    }
    .party-highlight__card-location {
        margin: 0px 45px 0px 19px;
        font-family: SFProDisplay;
        font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #3d7e7f;
    }
    .party-highlight__card-description {
        margin: 5px 16px 5px 17px;
        font-family: SFProDisplay;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        padding-bottom: 10px;
        letter-spacing: normal;
        color: #546163;
        overflow: hidden;   
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    @media (max-width: 767px) {
        .party-highlight__card-description {
            -webkit-line-clamp: 2 !important;
            margin: 16px 16px 24px 16px;
        }
        .party-highlight__card-title {
            font-size: 16px;
            // margin: 0px 0px 24px 0px;
            margin: 20px 16px 0px 16px;
        }
    }
`;




class PartyInfo extends PureComponent {

  handleClick = (id) => {
    const { history } = this.props;
    if(history) history.push('/partydetail/' + id);
    console.log("clicked")
   }

state = {
    restaurants: [],
    error: null,
  };

     

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {

  /*const jwt = localStorage.getItem('JWT')
  const { data } = await axios.get('http://localhost:1337/parties', {
    headers: {
      Authorization:
        'Bearer' + {jwt},
    },
  });*/
    
    try {
      const response = await axios.get('http://localhost:1337/parties');
      this.setState({ restaurants: response.data });
      console.log(response.data)
    } catch (error) {
      this.setState({ error });
    }
  };
  

  

  render() {
    
    const { error, restaurant } = this.state;
    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    const colors = ["0d1b1e", "7798AB", "C3DBC5", "E8DCB9", "F2CEE6"];

    const random = Math.floor(Math.random() * colors.length);

    const parties = this.state.restaurants.map(restaurant => (

         
    <Grid item xs={4} >
      <Wrapper  onClick={this.handleClick.bind(this, restaurant.id)} style={{cursor: 'pointer'}}>
            <div className="party-highlight__card p-0 m-2">
                <PartyHeader zipcode="" color={
                  
                  restaurant.id %2 ==0? 'red': 'blue'}/>
                
                <div className="party-title party-highlight__card-title">
                    <p>{restaurant.party_title}</p>
                </div>
                <div className="party-highlight__card-location">
                    <p>{restaurant.Address}</p>
                </div>
                <div className="party-highlight__card-description d-md-auto">
                    {restaurant.Description}

                </div>

            </div>
      </Wrapper>
      </Grid>
           
     
    ))

    
    
    return ( 
      
      restaurant !== null ?
          <Grid container spacing={24}>        
             {parties}        
          </Grid>
        : "Only one video"
    );
  }

}

export default withRouter(PartyInfo)




/*const PartyCard = props => {
    return (
        <Wrapper>
            <div className="party-highlight__card p-0 m-2">
                <PartyHeader zipcode="" />
                <div className="party-title party-highlight__card-title">
                    <p>Hang out with Us</p>
                </div>
                <div className="party-highlight__card-location">
                    2207 NE 131 St Ave Portland OR
                </div>
                <div className="party-highlight__card-description d-md-block">
                    {props.description}
                </div>
            </div>
        </Wrapper>
    )
}
export default PartyCard*/