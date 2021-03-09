import './Main.css'
import React from 'react';


const Main = (props) => {
    // console.log(props)
    const {first_name, last_name, job, country, image, money} = props.data;
    // console.log(email)
    return (
        <div className='container1'>
            <div className="img-area">
                <img className='img' src={image} alt=""/>
            </div>
            <div className="details-area">
                <h3>{first_name} {last_name}</h3>
                <p>{country}</p>
                <h4>{money}</h4>
                <button onClick={() => props.handler(props.data)}>Follow</button> 
            </div>
        </div>
    );
};

export default Main;