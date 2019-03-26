import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Footer from './footer';
import HomePage from './homepage/homepage';
import Portfolio from './portfolio/portfolio';

export default class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            offTop: null,
        };
        this.scrollPage = this.scrollPage.bind(this);
    };
    scrollPage () {
        this.setState( {
            offTop: document.body.scrollTop || document.documentElement.scrollTop
        }, () => console.log(this.state.offTop));
    };
    componentDidMount(){
        window.addEventListener('scroll',this.scrollPage);
    };
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollPage);
    };
    render () {
        let numbOrBtn;
        let hieghtNav;
        if (this.state.offTop == 0) {
            hieghtNav = '120px';
            numbOrBtn = <div className='number'>
                <a href='+375291234567'>+375 (29) 123-45-67</a><br/>
                <a href='+375331234567'>+375 (33) 123-45-67</a>
            </div>;
        }
        else if (this.state.offTop !== 0) {
            hieghtNav = '80px';
            numbOrBtn = <div className='requestBtn'>
                <span>
                    ОФОРМИТЬ ЗАЯВКУ
                </span>
            </div>;
        }
        return (
            <Router>
                <div>
                    <div className='headercomponent' style={ {height: hieghtNav} }>
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
                            {numbOrBtn}
                        </header>
                    </div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/portfolio" component={Portfolio} />
                    {/* <Route path="/advantages" component={Advantages} />
                    <Route path="/schemeofwork" component={SchemeOfWork} />
                    <Route path="/reviews" component={Reviews} />
                    <Route path="/contacts" component={Contacts} /> */}
                    <Footer />
                </div>
            </Router>
        )
    };
    
}