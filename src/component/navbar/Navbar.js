import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
    const data = props.data;
    const result = data.reduce((d, item) => item.money + d, 0)
    // let total = 0;
    // for(let i = 0; i < data.length; i++){
    //     const element = data[i];
    //     total = total + element.money;
    // }
    return (
        <div className='container-2'>
            <div className="left">
                <h2>Contact List</h2>
            </div>
            <div className="right">
                <button>Followed <span>{props.count}</span></button>
                <button>Salary <span>{result} </span></button>
            </div>
        </div>
    );
};

export default Navbar;