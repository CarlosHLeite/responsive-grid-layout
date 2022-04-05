import React from 'react';
import hat1 from '../img/hat-1.jpg';
import hat2 from '../img/hat-2.jpg';
import hat3 from '../img/hat-3.jpg';
import hat4 from '../img/hat-4.jpg';
import hat5 from '../img/hat-5.jpg';
import hat6 from '../img/hat-6.jpg';
import hat7 from '../img/hat-7.jpg';

function GridLayout() {
  return (
    <main>
        <div className="container">
            <div className="product-grid">
                <div className="card">
                    <img src={hat1} alt="" className='card__img'/>
                    <div className="card__content">
                       <h2 className="card__title"></h2> 
                       <p className="card__price"></p>
                       <p className="card__description"></p>
                    </div>
                </div>
            </div>

        </div>

        <div className="container">
            <div className="product-grid">
                <div className="card">
                    <img src={hat2} alt="" className='card__img'/>
                    <div className="card__content">
                       <h2 className="card__title"></h2> 
                       <p className="card__price"></p>
                       <p className="card__description"></p>
                    </div>
                </div>
            </div>

        </div>

        <div className="container">
            <div className="product-grid">
                <div className="card">
                    <img src={hat3} alt="" className='card__img'/>
                    <div className="card__content">
                       <h2 className="card__title"></h2> 
                       <p className="card__price"></p>
                       <p className="card__description"></p>
                    </div>
                </div>
            </div>

        </div>

        <div className="container">
            <div className="product-grid">
                <div className="card">
                    <img src={hat4} alt="" className='card__img'/>
                    <div className="card__content">
                       <h2 className="card__title"></h2> 
                       <p className="card__price"></p>
                       <p className="card__description"></p>
                    </div>
                </div>
            </div>

        </div>

        <div className="container">
            <div className="product-grid">
                <div className="card">
                    <img src={hat5} alt="" className='card__img'/>
                    <div className="card__content">
                       <h2 className="card__title"></h2> 
                       <p className="card__price"></p>
                       <p className="card__description"></p>
                    </div>
                </div>
            </div>

        </div>

        <div className="container">
            <div className="product-grid">
                <div className="card">
                    <img src={hat6} alt="" className='card__img'/>
                    <div className="card__content">
                       <h2 className="card__title"></h2> 
                       <p className="card__price"></p>
                       <p className="card__description"></p>
                    </div>
                </div>
            </div>

        </div>

        <div className="container">
            <div className="product-grid">
                <div className="card">
                    <img src={hat7} alt="" className='card__img'/>
                    <div className="card__content">
                       <h2 className="card__title"></h2> 
                       <p className="card__price"></p>
                       <p className="card__description"></p>
                    </div>
                </div>
            </div>

        </div>
    </main>
  )
}

export default GridLayout