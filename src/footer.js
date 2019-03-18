import React from 'react';

export default class Footer extends React.Component {
    constructor (props) {
        super(props)
        
    };
    render () {
        return (
            <footer>
                <div className='firstline'>
                    <div className='firstlinecontent'>
                        <div className='logoinfooter'>
                            <img src='./img/logo.png' />
                            <img src='./img/line.png' />
                            <p>
                                Дисклеймер компании
                            </p>
                        </div>
                        <div className='socialfooter'>
                            <p>
                                мы в соцсетях
                            </p>
                            <img src='./img/line.png' />
                            <a href='https://instagram.com'>
                                <img src='./img/inst.png' />
                            </a>
                            <a href='https://twitter.com'>
                                <img src='./img/twitter.png' />
                            </a>
                            <a href='https://facebook.com'>
                                <img src='./img/facebook.png' />
                            </a>
                        </div>
                        <div className='addressfooter'>
                            <h3>
                                АДРЕС
                            </h3>
                            <img src='./img/line.png' />
                            <p>
                                г. Минск, ул. Скрыганова, 6А, <span>4 этаж</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='secondline'>
                    <p>
                        Copyrights 2015 © Webcom Media
                    </p>
                </div>
            </footer>
        )
    };
}