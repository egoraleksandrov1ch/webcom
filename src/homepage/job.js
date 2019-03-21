import React from 'react';

export default class Job extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            work: this.props.work,
        };
    };
    render () {
        return (
            <div 
                className='ourjob'
            >
                <img src={this.state.work.imgjob} />
                <div 
                    className='info'
                >
                    <h6>
                        {this.state.work.name}
                    </h6>
                    <img src='./img/line.png' />
                    <p>
                        {this.state.work.description}
                    </p>
                </div>
            </div>
        )
    }
}