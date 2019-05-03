import React, { Component } from 'react'
import {PictureConsumer} from '../context'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


export default class Details extends Component {
  render() {
    return (
      <PictureConsumer>
        {(value) => {
          const {id, img, author, name, price, inCart, info} = value.detailPicture;
          return (
            <DetailsContainer>
            <div className="details-wrapper">
              <div className="details-picture">
                <div className="details-img-wrapper">
                  <img className="details-img" src={img} alt="mypicture"/>
                </div>
                  <span className="details-author">{author}</span>
                  <span className="details-picture-name">{name}</span>
              </div>
              <div className="details-info-wrapper">
                <div className="details-info">{info}</div>
                <div className="details-footer-info-wrapper">
                  <span className="details-price">Цена: {price}$</span>
                  <div className="details-btn-wrapper">
                    <Link to="/">
                    <button className="btn">
                      Назад на главную
                    </button>
                    </Link>
                    <button 
                      className="btn cart"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id)
                        value.openModal(id)
                      }}
                    >
                      {inCart ? "в корзине" : "Добавить в корзину"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </DetailsContainer>
          )
        }}
      </PictureConsumer>
    )
  }
}

const DetailsContainer = styled.div`
  .details-wrapper {
    display: flex;
    line-height: 1.5;
    text-align: center;
    margin: 2rem;
    padding: 1rem;
    .details-picture, .details-info-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .details-picture {
      width: 40%;
      cursor: pointer;
      .details-img-wrapper {
        width: 100%;
        .details-img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    .details-info-wrapper {
      width: 60%;   
      padding-left: 1rem;
      .details-info {
        text-indent: 10%;
        text-align: justify;
      }
      .details-btn-wrapper {
        margin-top: 0.9rem;
      }
    }
    .details-author, .details-picture-name, .details-price {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`