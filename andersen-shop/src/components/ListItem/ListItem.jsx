import React from 'react';
import { NavLink } from 'react-router-dom';
import basket from '../../assets/add_to_basket.svg'
import listItemStyle from './ListItem.module.css'

export const ListItem = ({ listItem, reTurnItem }) => {

  return (
    <>
      {
        listItem.map((elem) => {
          return (
            <div key={`${elem.id}${elem.title}`} className={listItemStyle.wrapper}>
              <div><img src={elem.images[0]} alt={elem.title} /></div>
              <div>
                <NavLink to='/item'><p onClick={() => { reTurnItem(elem) }}>{elem.title}</p></NavLink>
                <div className={listItemStyle.priceWrapper}>
                  <div>
                    <span> price:</span> <span className={listItemStyle.price}>{elem.price} $</span>
                  </div>
                  <button type='button'><img src={basket} alt="add to basket" /></button>
                </div>

              </div>
            </div>
          )
        })
      }
    </>
  )
}
