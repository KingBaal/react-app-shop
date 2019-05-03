import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {PictureConsumer} from '../context'
import PropTypes from 'prop-types'

class Picture extends Component {
    render() {
        const {id, img, author, name, price, inCart} = this.props.picture
        return (
            <picture className="picture">
                <PictureConsumer>
                    {value => (
                        <div 
                            className="picture-img-wrapper" 
                            onClick={() => value.handleDetail(id)}
                        >
                        <Link to="/details">
                            <img className="picture-img"  alt="mypicture"
                                src={img || "./imgs/grey.png"} 
                            />
                        </Link>
                        <button 
                            className="cart-btn" 
                            disabled={inCart ? true : false}
                            onClick={()=> {
                                value.addToCart(id)
                                value.openModal(id)
                            }}
                        >
                        {inCart ? (<p disabled>in Cart</p>) : (<p>buy</p>)}
                        </button>
                    </div>
                    )}  
                </PictureConsumer>
                    <div className="picture-info-wrapper">
                        <span>{author || 'no name'}</span>
                        <span>{name || 'no name'}</span>
                        <span className="picture-price">{price || '0'} $ </span>
                    </div>
            </picture>
        )
    }
}

Picture.propTypes = {
    picture: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        author: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
        count: PropTypes.number,
        total: PropTypes.number,
        info: PropTypes.string
    }).isRequired
}

export default Picture;