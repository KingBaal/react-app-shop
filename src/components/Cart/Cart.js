import React, { Component } from 'react'
import CartColums from './CartColums'
import EmptyCart from './EmptyCart'
import {PictureConsumer} from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <PictureConsumer>
          {value => {
            const {cart} = value
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h3></h3>
                  <CartColums />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              )
            } else {
              return <EmptyCart />
            }
          }}
        </PictureConsumer>
      </div>
    )
  }
}
