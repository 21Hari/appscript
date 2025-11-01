import './index.css';
import { useState } from 'react';
import Maincontent from '../Maincontent';

const Header = () => {
    const [hideItem, setHideItem] = useState(false);


    const toggleItems = () => {
        setHideItem(prev => !prev);
    };

    const toggledisplayItem = (
        <div className="toggle-item-element" onClick={toggleItems}>
            <p>{hideItem ? '>' : '<'}</p>
            <p>{hideItem ? 'SHOW FILTER' : 'HIDE FILTER'}</p>
        </div>
    );
    return (
        <header>
            <div className="header-container">
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>

            </div>
            <hr />
            <div className='toggle-container'>
                <div className='toggle-label-container'>
                    <h4>3245 ITEMS</h4>
                    <div>
                        {toggledisplayItem}
                    </div>

                </div>
                <div>
                    <select className='drop-down-container'>
                        <option selected className='drop-down-elements'>Recommended</option>
                        <option>NEWEST FIRST</option>
                        <option>POPULAR</option>
                        <option>PRICE: HIGH TO LOW</option>
                        <option>PRICE: LOW TO HIGH</option>
                    </select>

                </div>


            </div>
            <hr />
            <Maincontent hideItem={hideItem} />

        </header>)
}

export default Header;