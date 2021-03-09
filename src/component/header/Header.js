import React from 'react';
import bg from '../../images/bg.png'
import './Header.css'

const container = {
    backgroundImage: `url(${bg})`
}

const Header = () => {
    return (
        <div style={container} className='container'>
            <div className='header-detail'>
                <h1>hello world</h1>
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente rem dicta molestias unde harum id sint sunt, sit cumque placeat, pariatur deleniti aperiam? Veniam quod vel obcaecati consequatur incidunt. </h4>
                <button>Explore Someone  </button>
            </div>
        </div>
    );
};

export default Header;