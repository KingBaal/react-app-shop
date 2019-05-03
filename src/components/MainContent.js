import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
import Picture from './Picture'
// import {storePictures} from '../pictures'
import {PictureConsumer} from '../context'

class MainContent extends Component {
    

    render() {
        return (
            <main className="main">
                <pictures className="pictures-flex-container">
                    <PictureConsumer >
                        {(value) => {
                            return value.pictures.map( (picture, i) => {
                                return <Picture key={`picture-${i}`} picture={picture}/>
                            })
                        }}
                    </PictureConsumer>
                </pictures>
                
                {/* <pictures className="pictures-flex-container">
                    {storePictures.map( (picture, i) => <Picture key={`picture-${i}`} picture={picture} />)}
                </pictures> */}
            </main>
        )
    }
}

// function MainContent() {
    

//     return (
//         <main className="main">
//             <pictures className="pictures-flex-container">
//                 {pictures.map( (picture, i) => <Picture key={`picture-${i}`} picture={picture} />)}
//             </pictures>
//         </main>
//     )
// }

export default MainContent;