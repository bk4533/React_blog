import React from 'react';
import Card from '../resume/Card';
import data from '../../data/api3';
import "./resume.css";

const Resume = () => {
    return (
        <>
            <section className='resume' id='resume'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>I'm a newbie. but my resume...</h4>
                        <h1>My Resume</h1>
                    </div>
                    <div className='content-section mtop d-flex'>
                            <ul className='container'>
                                {data.map((tq,index)=>{
                                    return <Card
                                        key={index}
                                        category={tq.category}
                                        year={tq.year}
                                        title={tq.title}
                                        desc={tq.desc}
                                        rage={tq.rage}
                                    />
                                })}
                            </ul>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default Resume;