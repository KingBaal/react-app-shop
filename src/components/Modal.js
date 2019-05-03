import React, { Component } from 'react'
import styled from 'styled-components'
import {PictureConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
    render() {
    return (
        <PictureConsumer>
            {(value) => {
                const {modalOpen, closeModal} = value
                const {img, author, name, price} = value.modalPicture
                
                if(!modalOpen){
                    return null
                } else {
                return (
                    <ModalContainer>
                        <div id="modal">
                            <div className="modal-wrapper">
                                <span>Картина добавлена в корзину</span>
                                <div 
                                    className="modal-img-wrapper" 
                                >
                                    <img 
                                        className="modal-img" 
                                        alt="mypicture"
                                        src={img || "./imgs/grey.png"} 
                                    />
                                    <div className="modal-info">
                                        <span>{author || 'no name'}</span>
                                        <span>{name || 'no name'}</span>
                                        <span className="picture-price">{price || '0'} $ </span>
                                    </div>
                                </div>
                                
                                <div className="modal-btn-wrapper">
                                    <Link to="/">
                                    <button 
                                        className="btn"
                                        onClick={() => closeModal()}
                                    >
                                    продолжить
                                    </button>
                                    </Link>
                                    <Link to="/cart">
                                    <button 
                                        className="btn cart"
                                        onClick={() => closeModal()}
                                    >
                                    в корзину
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                )
                }
        }}
        </PictureConsumer>
    )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items:center;
    justify-content: center;
    #modal {
        background: white;
        width: 30%;
    }

    .modal-wrapper {
        text-align: center;
        font-weight: bold;
        line-height: 1.5;
        margin: 2rem;
        font-size: 1.2rem;

        .modal-img-wrapper {
            margin-top: 0.5rem;
            cursor: pointer;
        }
        .modal-img {
            max-width: 100%; 
            max-height: 300px;
        }
        .modal-info {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`