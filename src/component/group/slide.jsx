import React from 'react';
import Groupdata from '../../data/api4';
import {RiDoubleQuotesR} from "react-icons/ri";


const Slide = ({valueIndex,index,id,img,role,name,company,post,date,desc}) => {
    let position = "nextSlide";
    if(valueIndex === index){
        position = "activeSlide";
    }
    if((valueIndex === index -1) || (index === 0 && valueIndex === Groupdata.length -1)){
            position = "lastSlide";
        }
    return (
        <>
            <article className={`d-flex ${position}`} key={id}>
                <div className='left box-shadow'>
                    <div className='img'>
                        <img src={img} alt={img}/>
                    </div>
                    <div className="details mtop">
                        <span>{role}</span>
                        <h2>{name}</h2>
                        <label>{company}</label>
                    </div>
                </div>
                <div className="right">
                    <div className="icon">
                        <RiDoubleQuotesR/>
                    </div>
                    <h3>{name}</h3>
                    <p><span>{post}</span></p>
                    <p>{role} : {(company)} - {date}</p>
                    <p className='desc'>
                        {desc}
                    </p>
                </div>
            </article>
        </>
    );
};

export default Slide;
                    
                    