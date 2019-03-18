import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Main extends React.Component {
    constructor (props) {
        super(props)
        
    };
    render () {
        return (
            <Router>
                <div>
                    <div className='headercomponent'>
                        <header>
                            <img src='../img/logo.png' />
                            <nav>
                                <Link to='/'>главная</Link>
                                <Link to='/'>портфолио</Link>
                                <Link to='/'>преимущества</Link>
                                <Link to='/'>схема работы</Link>
                                <Link to='/'>отзывы</Link>
                                <Link to='/'>контакты</Link>
                            </nav>
                            <div className='number'>
                                <a href='+375291234567'>+375 (29) 123-45-67</a><br/>
                                <a href='+375331234567'>+375 (33) 123-45-67</a>
                            </div>
                        </header>
                    </div>
                </div>
            </Router>
        )
    };
    
}