import React from 'react';

export default class Feedback extends React.Component {
    constructor (props) {
        super(props)
        this.state ={ 
            userName: '',
            email: '',
            position: '',
            feedback: '',
        }
        this.userName = this.userName.bind(this);
        this.email = this.email.bind(this);
        this.position = this.position.bind(this);
        this.feedback = this.feedback.bind(this);
    };
    userName (e) {
        this.setState( {
            userName: e.target.value,
        });
    };
    email (e) {
        this.setState( {
            email: e.target.value,
        });
    };
    position (e) {
        this.setState( {
            position: e.target.value,
        });
    };
    feedback (e) {
        this.setState( {
            feedback: e.target.value,
        });
    };
    render () {
        return (
            <section className='feedback'>
                <div className='feedbackcomponent'>
                    <h1>
                        оставьте отзыв
                    </h1>
                    <img src='./img/line.png' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                    </p>
                    <div className='formblock'>
                        <div className='information'>
                            <h3>
                                НАШ АДРЕС
                            </h3>
                            <p>
                                г.Минск, ул. Скрыганова, 6А, 4 этаж
                            </p>
                            <h3>
                                ЗВОНИТЕ
                            </h3>
                            <p>
                                +375 (29) 123-45-67,  +375 (33) 123-45-67
                            </p>
                            <h3>
                                ПИШИТЕ
                            </h3>
                            <p>
                                info@promo-webcom.by
                            </p>
                        </div>
                        <div className='forma'>
                            <form action='' method='post' name='form'>
                                <label for='name'>
                                    ВАШЕ ИМЯ
                                </label>
                                <input 
                                    id='name' 
                                    name='username' 
                                    type='text' 
                                    placeholder='Иванов Иван' 
                                    required 
                                    value={this.state.userName}
                                    onChange={this.userName} 
                                />
                                <label for='email'>
                                    E-MAIL
                                </label>
                                <input 
                                    id='email'
                                    name='email'
                                    type='email'
                                    placeholder='example@mysite.com'
                                    required
                                    value={this.state.email}
                                    onChange={this.email}
                                />
                                <label for='position'>
                                    ВАША ДОЛЖНОСТЬ
                                </label>
                                <input 
                                    id='position'
                                    name='position'
                                    type='text'
                                    placeholder='Должность'
                                    value={this.state.position}
                                    onChange={this.position}
                                />
                                <label for='feedback'>
                                    ОТЗЫВ
                                </label>
                                <textarea
                                    id='feedback'
                                    name='feedback'
                                    placeholder='Ваше сообщение'
                                    value={this.state.feedback}
                                    onChange={this.feedback}
                                    rows='5'
                                    style={{resize:'none',}}
                                ></textarea>
                                <input 
                                    id='photo'
                                    name='photo'
                                    type='file'
                                    accept='image/jpeg, image/png'
                                />
                                <label for='photo'>
                                    ФОТО
                                </label>
                                <input 
                                    type='submit'
                                    value='ОТПРАВИТЬ'
                                />
                            </form>
                        </div>
                    </div>
                    <button>
                        <img src='./img/arrow.png' />
                    </button>
                </div>
            </section>
        )
    };
}