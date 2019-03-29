import React from 'react';
import Slide from './slide';
import Jobs from './jobs';
import Why from './why';
import Feedback from './feedback';

export default class HomePage extends React.Component {
    constructor (props) {
        super(props)
        
    };
    render () {
        return (           
            <main>
                <Slide />
                {/* <Jobs />
                <Why />
                <Feedback /> */}
            </main>
        )
    };
}