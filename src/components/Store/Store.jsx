import React from 'react';
import './Store.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Blender from '../../assets/blender.jpg'

const Store = () => {
    return ( 
        <div className="store">
            <div className="store__header">
                <h1>Bet Fragnance</h1>
                <div>
                    <span>0</span>
                    <ShoppingBasketIcon />
                </div>
            </div>

            <div className="store__main">
                <div className="store__mainDetails">
                    <h1>Bet Fragnance</h1>

                    <p>We Sell all your perfumes</p>
                    <span>IKEJA, LAGOS, NIGERIA</span>
                </div>
            </div>
            
            <div className="store__products">
                <h3>Men's Perfume</h3>

                <div className="store__productItems">
                    <div className="store__productItem">

                        <div className="store__productItem__left">
                            <h2 className="product__name">Pure XS</h2>
                            <p className="product__description">
                                Best Fragnance from Paco Rabanne
                            </p>

                            <p className="product__price">
                            &#8358;40,000.00
                            </p>
                        </div>

                        <div className="store__productItem__right">
                            <img src={Blender} alt="blender" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Store;