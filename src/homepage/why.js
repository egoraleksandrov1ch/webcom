import React from 'react';

export default class Why extends React.Component {
    constructor (props) {
        super(props)
        
    };
    render () {
        return (
            <section className='why'>
                <div className='whycomponent'>
                    <h1>
                        ПОЧЕМУ МЫ
                    </h1>
                    <img src='./img/line.png' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                    </p>
                    <div className='advantages'>
                        <div className='advantage'>
                            <img src='./img/Monitor.png' />
                            <h4>
                                преимущество 1
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                        </div>
                        <div className='advantage'>
                            <img src='./img/Magicwand.png' />
                            <h4>
                                преимущество 2
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                        </div>
                        <div className='advantage'>
                            <img src='./img/Rocket.png' />
                            <h4>
                                преимущество 3
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                        </div>
                        <div className='advantage'>
                            <img src='./img/Globe.png' />
                            <h4>
                                преимущество 4
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                        </div>
                        <div className='advantage'>
                            <img src='./img/Settings.png' />
                            <h4>
                                преимущество 5
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                        </div>
                        <div className='advantage'>
                            <img src='./img/Layers.png' />
                            <h4>
                                преимущество 6
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                        </div>
                        <div className='advantage'>
                            <img src='./img/Wrench.png' />
                            <h4>
                                преимущество 7
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                        </div>
                        <div className='advantage'>
                            <img src='./img/Note.png' />
                            <h4>
                                преимущество 8
                            </h4>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}