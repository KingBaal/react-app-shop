import React from 'react'

export default function CartItem({item,value}) {
    const {id, img, author, name, price, total, count} = item
    const {increment, decrement, removeItem} = value
    return (
        <div className="cart-info">
            <div className="cart-picture">
                <img
                    src={img}
                    style={{width:"5rem", height:"5rem"}}
                    alt="mypicture"
                />
            </div>
            <div className="cart-name">
                <span>{author}</span>
                <span>{name}</span>
            </div>
            <div className="cart-price">
                <span>{price} $</span>
            </div>
            <div className="cart-quantity">
                <div 
                    className="btn-black" 
                    onClick={() => decrement(id)}
                >
                -
                </div>
                <span className="btn-black">{count}</span>
                <div 
                    className="btn-black" 
                    onClick={() => increment(id)}
                >
                +
                </div>
            </div>
            <div  className="cart-remove">
                <button className="btn cart" onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className="cart-total">
                <strong>item total : $ {total}</strong>
            </div>
        </div>
    )
}
