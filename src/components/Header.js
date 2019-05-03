import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import fire from '../config/Fire';


class Header extends Component {

    logout =() => {
        fire.auth().signOut();
    }

    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        const styles = {};

        if (hours < 12) {
            timeOfDay = 'morning';
            styles.color = '#04756F'
        } else if (hours >= 12 && hours < 17 ) {
            timeOfDay = 'afternoon';
            styles.color = '#8914A3'
        } else {
            timeOfDay = 'night';
            styles.color = '#D90000'
        }

        return (
            <HeaderContainer>
            <div className="header">
                <Link to="/">
                <button className="btn">
                    <span>home</span>
                </button> 
                <button 
                    className="btn"
                    onClick={this.logout}
                >
                    Logout
                </button>
                </Link>
                <div className="header-time">
                    <span style={styles}>Good {timeOfDay}!</span>
                    <span>It is currently about {date.getHours() % 24} o'clock!</span>
                </div>
                <Link to="/cart" >
                <div>
                    <img 
                        className="header-cart"
                        src="./imgs/cart-light.png" 
                        alt="mypicture"/>
                </div>
                </Link>
            </div>
            </HeaderContainer>
        )
    }
}

export default Header;

const HeaderContainer = styled.div`
    .header {
        height: 8rem;
        background-color: #333;
        color: whitesmoke;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
        font-size: 1.8rem;
        line-height: 1.5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .header-time {
            display: flex;
            flex-direction: column;
        }
        .header-cart {
            width: 3rem;
            height: 3rem;
        }
    }
`