import './index.css';
import { useState, useEffect } from 'react';

const Maincontent = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const { hideItem } = props;

    const renderShowFilterItems = () => (
        <div className="filter-main-container">
            <div className="filter-container">
                <div className="filter-group">
                    <label htmlFor="idealFor">Ideal For</label>
                    <select id="idealFor">
                        <option>All</option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Baby & Kids</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion">
                        <option>All</option>
                        <option>Work</option>
                        <option>Casual</option>
                        <option>Party</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="fabric">Fabric</label>
                    <select id="fabric">
                        <option>All</option>
                        <option>Cotton</option>
                        <option>Silk</option>
                        <option>Denim</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label htmlFor="segment">Segment</label>
                    <select id="segment">
                        <option>All</option>
                        <option>Premium</option>
                        <option>Budget</option>
                        <option>Luxury</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="suitableFor">Suitable For</label>
                    <select id="suitableFor">
                        <option>All</option>
                        <option>Daily Use</option>
                        <option>Outdoor</option>
                        <option>Office</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="rawMaterials">Raw Materials</label>
                    <select id="rawMaterials">
                        <option>All</option>
                        <option>Cotton</option>
                        <option>Wool</option>
                        <option>Leather</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="pattern">Pattern</label>
                    <select id="pattern">
                        <option>All</option>
                        <option>Solid</option>
                        <option>Striped</option>
                        <option>Checked</option>
                        <option>Printed</option>
                    </select>
                </div>
            </div>
        </div>

    )
    return (
        <div className="main-container">
            {!hideItem && renderShowFilterItems()}
            <div className={`card-container ${hideItem ? 'full-width' : 'with-filter'}`}>
                {products.map((product) => (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p className="category">{product.category}</p>
                        <p className="price">${product.price}</p>
                        <p className="rating">⭐ {product.rating.rate} ({product.rating.count})</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Maincontent;