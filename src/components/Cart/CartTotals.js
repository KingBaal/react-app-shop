import React from 'react'
import {Link} from 'react-router-dom'

export default function CartTotals({value}) {
    const {cartTotal, clearCart} = value

    return (
        <React.Fragment>
            <Link to="/">
            <button className="btn" onClick={() => clearCart()}>
                clear cart
            </button>
            </Link>
            <div className="cart-total">
                total: {cartTotal}
            </div>
        </React.Fragment>
    )
}
