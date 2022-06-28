import React from 'react';
import basket from '../../assets/add_to_basket.svg';
import itemStyle from './Item.module.css';
import { useNavigate } from 'react-router-dom';


export const Item = (props) => {
    const { currentItem,
        returnBasketListItems,
        decreaseCounter,
        increaseCounter,
        counter } = props;

    return (
        <div className={itemStyle.mainWrapper}>
            <div className={itemStyle.wrapper}>
                <div className={itemStyle.imgWrapper}><img src={currentItem.images[0]} alt={currentItem.title} /></div>
                <div className={itemStyle.textWrapper}>
                    <h2>{currentItem.title}</h2>
                    <p>{currentItem.description}</p>
                    <div className={itemStyle.priceWrapper}>
                        <div className={itemStyle.priceDown} >
                            <span> price:</span> <span className={itemStyle.price}>{currentItem.price} $</span>
                        </div>
                        <div className={itemStyle.btnWrapper}>
                            <button onClick={decreaseCounter}>&lt;</button>{counter}
                            <button onClick={increaseCounter}>&gt;</button>
                        </div>
                        <button onClick={() => { returnBasketListItems(currentItem, counter) }} type='button'><img src={basket} alt="add to basket" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}


