import React from 'react'
import mainWindowStyles from './MainWindow.module.css'
import { ListItem } from '../ListItem/ListItem'
import { Routes, Route, NavLink } from 'react-router-dom'
import { AboutUs } from '../About_us/AboutUs'
import Basket from '../../assets/basket.svg'
import { Item } from '../Item/Item'

let productCounter = 0;
let itemsSum = 0;

export const MainWindow = ({ listItem, reTurnItem, currentItem }) => {
    return (
        <>
            <header>
                <div className={mainWindowStyles.online_shop}>online shop</div>
                <nav className={mainWindowStyles.online_shop_nav}>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/about-us'> ABOUT US</NavLink>
                    <div className={mainWindowStyles.btnWrapper}>
                        <NavLink to='#' className={`${mainWindowStyles.online_shop_nav} ${mainWindowStyles.btn}`} >Log in</NavLink>
                        <NavLink to='#' className={`${mainWindowStyles.online_shop_nav} ${mainWindowStyles.btn}`}> Sign up</NavLink>
                    </div>
                    <button className={mainWindowStyles.basketWrapper}>
                        <img src={Basket} alt="basket" />
                    </button>
                    <div className={mainWindowStyles.items} mainWindowStyles>items:{productCounter}/sum:{itemsSum} </div>
                </nav>
            </header>
            <section className={mainWindowStyles.listItem}>
                <Routes>
                    <Route path='/' element={<ListItem listItem={listItem} reTurnItem={reTurnItem} />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/item' element={<Item currentItem={currentItem} />}></Route>
                </Routes>
            </section>
        </>
    )
}
