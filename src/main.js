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
            menu: true,
        };
        this.scrollPage = this.scrollPage.bind(this);
        this.openMenu = this.openMenu.bind(this);
    };
    openMenu () {
        if (window.innerWidth <= 768 ) {
            this.setState( {
                menu: !this.state.menu,
            });
        }
    };
    scrollPage () {
        this.setState( {
            offTop: document.body.scrollTop || document.documentElement.scrollTop
        });
    };
    componentDidMount(){
        window.addEventListener('scroll',this.scrollPage);
        if (window.innerWidth > 768) {
            this.setState( {
                menu: !this.state.menu,
            });
        }
    };
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollPage);
    };
    render () {
        let numbOrBtn;
        let hieghtNav;
        let pos;
        let hieghtLink;
        if (this.state.offTop <= 1) {
            hieghtNav = '120px';
            pos = '';
            numbOrBtn = <div className='number'>
                <a href='+375291234567'>+375 (29) 123-45-67</a><br/>
                <a href='+375331234567'>+375 (33) 123-45-67</a>
            </div>;
        }
        else if (this.state.offTop > 1) {
            hieghtNav = '80px';
            pos = 'fixed';
            hieghtLink = '30px';
            numbOrBtn = <div className='requestBtn'>
                <span>
                    ОФОРМИТЬ ЗАЯВКУ
                </span>
            </div>;
        }
        return (
            <Router>
                <div>
                    {/* <div className='headercomponent' style={ {height: hieghtNav, position: pos} }>
                        <header>
                            <img src='./img/logo.png' />
                            <nav style={ {display:this.state.menu ? 'none' : 'flex'} }>
                                <Link onClick={this.openMenu} style={ {paddingTop: hieghtLink} } to='/'>главная</Link>
                                <Link onClick={this.openMenu} style={ {paddingTop: hieghtLink} } to='/portfolio'>портфолио</Link>
                                <Link onClick={this.openMenu} style={ {paddingTop: hieghtLink} } to='/advantages'>преимущества</Link>
                                <Link onClick={this.openMenu} style={ {paddingTop: hieghtLink} } to='/schemeofwork'>схема работы</Link>
                                <Link onClick={this.openMenu} style={ {paddingTop: hieghtLink} } to='/reviews'>отзывы</Link>
                                <Link onClick={this.openMenu} style={ {paddingTop: hieghtLink} } to='/contacts'>контакты</Link>
                            </nav>
                            {numbOrBtn}
                            <i className="fas fa-align-justify" onClick={this.openMenu}></i>
                        </header>
                    </div> */}
                    {/* <Route exact path="/" component={HomePage} /> */}
                    {/* <Route path="/portfolio" component={Portfolio} /> */}
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