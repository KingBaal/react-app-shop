import React, { Component } from 'react'
import {storePictures, detailPicture} from './pictures'


const PictureContext = React.createContext()
// Provider
//Consumer

export default class PictureProvider extends Component {
  state = {
    pictures: [],
    detailPicture,  
    cart: [],
    modalOpen: false,
    modalPicture: detailPicture,
    cartTotal: 0
  }
  componentDidMount() {
    this.setPictures()
  }
  setPictures = () => {
    let tempPictures = [];
    storePictures.forEach(item => {
      const simgleItem = {...item};
      tempPictures = [...tempPictures,simgleItem];
    })
    this.setState(() => {
      return {pictures: tempPictures}
    })
  }

  getItem = id => {
    const picture = this.state.pictures.find(item => item.id === id)
    return picture
  }

  handleDetail = (id) => {
    const picture = this.getItem(id)
    this.setState(() => {
      return {detailPicture: picture}
    })
  }

  addToCart = (id) => {
    let tempPictures = [...this.state.pictures]
    const index = tempPictures.indexOf(this.getItem(id))
    const picture = tempPictures[index]
    picture.inCart = true
    picture.count = 1
    const price = picture.price
    picture.total = price
    this.setState(() => {
      return {
        pictures: tempPictures, 
        cart: [...this.state.cart, picture],
      }
    }, 
    () => {
      this.addTotals()
    })
  }

  openModal = id => {
    const picture = this.getItem(id)
    this.setState(() => {
      return {modalPicture: picture, modalOpen: true}
    })
  }

  closeModal = () => {
    this.setState(() => {
      return {modalOpen:false}
    })
  }

  increment = id => {
    let tempCart = [...this.state.cart]
    const selectedPicture = tempCart.find(item => item.id === id)

    const index = tempCart.indexOf(selectedPicture)
    const picture = tempCart[index]

    picture.count = picture.count + 1
    picture.total = picture.count * picture.price

    this.setState(
      () => {
        return{cart:[...tempCart]}
      }, 
      () => {
        this.addTotals()
      })
  }

  decrement = id => {
    let tempCart = [...this.state.cart]
    const selectedPicture = tempCart.find(item => item.id === id)

    const index = tempCart.indexOf(selectedPicture)
    const picture = tempCart[index]

    picture.count = picture.count - 1
    
    if (picture.count === 0) {
      this.removeItem(id)
    } else {
      picture.total = picture.count * picture.price
      this.setState(
        () => {
          return{cart:[...tempCart]}
        }, 
        () => {
          this.addTotals()
        })
    }
  }

  removeItem = id => {
    let tempPictures = [...this.state.pictures]
    let tempCart = [...this.state.cart]

    tempCart = tempCart.filter(item => item.id !== id)
    
    const index = tempPictures.indexOf(this.getItem(id))
    let removePicture = tempPictures[index]
    removePicture.inCart = false
    removePicture.count = 0
    removePicture.total = 0

    this.setState(() => {
      return {
        cart: [...tempCart],
        pictures: [...tempPictures]
      }
    }, () => {
      this.addTotals()
    })    
  }

  clearCart = () => {
    this.setState(() => {
      return {cart: []}
    }, () => {
      this.setPictures()
      this.addTotals()
    })
  }

  addTotals = () => {
    let total = 0
    this.state.cart.map(item => (total += item.total))
    this.setState(() => {
      return {
        cartTotal: total
      }
    })
  }

  render() {
    return (
      <PictureContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </PictureContext.Provider>
    )
  }
}


const PictureConsumer = PictureContext.Consumer;

export {PictureProvider, PictureConsumer};