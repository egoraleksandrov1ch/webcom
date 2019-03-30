import React from 'react';
import {Work} from '../service';
import Job from './job';

export default class Jobs extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            works: null,
            number1: 6,
            number2: 0,
        };    
        this.nextJobs = this.nextJobs.bind(this);
    };
    componentDidMount () {
        let url = './work.json';
        Work(url).then(res => {
            this.setState({works: res}, () => console.log(this.state.works));
        });
    };
    nextJobs (index) {
        // this.setState({
        //     number1: index,
        //     number2: index - 6,
        // });
    };
    render () {
        let job;
        if (this.state.works !== null) {
            job = this.state.works.map( (work, index) => {
                if (index < this.state.number1 && index >= this.state.number2) {
                    return (
                        <Job 
                            key={index}
                            work={work}
                        />
                    )
                }
            });
        }
        return (
            <section className='jobs'>
                <div className='jobstext'>
                    <h1>
                        наша работа
                    </h1>
                    <img src='./img/line.png' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                    </p>
                </div>
                <div className='ourjobs'>
                    {job}
                </div>
            </section>
        )
    };
}