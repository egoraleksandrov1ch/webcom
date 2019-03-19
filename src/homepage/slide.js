import React from 'react';

export default class Slide extends React.Component {
    constructor (props) {
        super(props)
        
    };
    render () {
        return (
            <section className='slide'>
                <div className='slidesection'>
                    <img src='./img/left.png' />
                    <div className='centerslide'>
                        <h1>
                            ГЛАВНЫЙ ЗАГОЛОВОК
                        </h1> 
                        <img src='./img/linetwo.png' />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. 
                        </p>
                        <button>
                            оформить заявку
                        </button>
                        <div className='ellipse'>
                            <div className='ellipseone'></div>
                            <div className='ellipsetwo'></div>
                            <div className='ellipsethree'></div>
                            <div className='ellipsefour'></div>
                        </div>
                        <div className='btndown'>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <img src='./img/right.png' />
                </div>
            </section>
        )
    };
}