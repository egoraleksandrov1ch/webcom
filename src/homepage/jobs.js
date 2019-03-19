import React from 'react';
import {Work} from '../service';
import Job from './job';

export default class Jobs extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            works: null,
        };    
        this.nextJobs = this.nextJobs.bind(this);
    };
    componentDidMount () {
        let url = './work.json';
        Work(url).then(res => {
            this.setState({works: res}, () => console.log(this.state.works));
        });
    };
    nextJobs () {
        
    };
    render () {
        let job;
        let ellipse;
        if (this.state.works !== null) {
            ellipse = this.state.works.map( (work, index) => {
                if(index % 6 == 0) {
                    return (
                        <div 
                            key={index}
                            onClick={this.nextJobs}
                            className='ellipsee'
                        ></div>
                    )
                }
            });
            job = this.state.works.map( (work, index) => {
                return (
                    <Job 
                        key={index}
                        work={work}
                    />
                )
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
                <div className='ellipsejobs'>
                    {ellipse}
                </div>
                <div className='ourjobs'>
                    {job}
                </div>
            </section>
        )
    };
}