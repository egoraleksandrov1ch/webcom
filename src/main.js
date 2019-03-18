import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Footer from './footer';
import HomePage from './homepage/homepage';

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
                            <img src='./img/logo.png' />
                            <nav>
                                <Link to='/'>главная</Link>
                                <Link to='/portfolio'>портфолио</Link>
                                <Link to='/advantages'>преимущества</Link>
                                <Link to='/schemeofwork'>схема работы</Link>
                                <Link to='/reviews'>отзывы</Link>
                                <Link to='/contacts'>контакты</Link>
                            </nav>
                            <div className='number'>
                                <a href='+375291234567'>+375 (29) 123-45-67</a><br/>
                                <a href='+375331234567'>+375 (33) 123-45-67</a>
                            </div>
                        </header>
                    </div>
                    <HomePage />
                    {/* <Route path="/portfolio" component={Portfolio} />
                    <Route path="/advantages" component={Advantages} />
                    <Route path="/schemeofwork" component={SchemeOfWork} />
                    <Route path="/reviews" component={Reviews} />
                    <Route path="/contacts" component={Contacts} /> */}
                    <Footer />
                </div>
            </Router>
        )
    };
    
}