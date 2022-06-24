import React from 'react';

export const Item = ({ currentItem }) => {
    console.log(currentItem)
    return (
        <div>
            <div><img src={currentItem.images[0]} alt={currentItem.title} /></div>
            <div>
                <p>{currentItem.title}</p>
                <div >
                    <div>
                        <span> price:</span> <span className={currentItem.price}>{currentItem.price} $</span>
                    </div>
                    {/* <button type='button'><img src={basket} alt="add to basket" /></button> */}
                </div>

            </div>
        </div>
    );
}


