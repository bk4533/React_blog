import React from 'react';

const Card = ({category,year,title,desc,rage}) => {
    return (
        
            <li className='box btn-shadow card'>
                <div className='box btn-shadow card'>
                    <h2>{title}</h2>
                    <p className='cate'>{category}</p>
                    <span>{year}</span>
                    <hr/>
                    <p>{desc}</p>
                </div>
                
            </li>
        
    );
};

export default Card;
                    
                    