import React from 'react';

export default class Job extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            work: this.props.work,
            fon: true,
        };
        this.fonFunc = this.fonFunc.bind(this);
    };
    fonFunc () {
        this.setState( {fon: !this.state.fon});
    }; 
    render () {
        return (
            <div 
                className='ourjob'
                onMouseOver={this.fonFunc}
            >
                <img src={this.state.work.imgjob} />
                <div 
                    className='info'
                    style={ {display: this.state.fon ? 'none' : 'block'} }
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