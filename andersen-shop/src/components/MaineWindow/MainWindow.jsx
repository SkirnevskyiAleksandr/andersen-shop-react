import React from 'react';
import mainWindowStyles from './MainWindow.module.css';
import { ListItem } from '../ListItem/ListItem';
import { Routes, Route, NavLink } from 'react-router-dom';
import { AboutUs } from '../About_us/AboutUs';
import Basket from '../../assets/basket.svg';
import { Item } from '../Item/Item';
import { ErrorPage } from '../ErrorPage/ErrorPage';

const basketItemsSum = (arr) => {
  let counter = 0;

  arr.map((item) => {
    counter += item.price;
  });

  return counter;
};

export const MainWindow = (props) => {
  const {
    listItem,
    currentItem,
    reTurnItem,
    returnBasketListItems,
    currentBasketListItems,
    increaseCounter,
    decreaseCounter,
    counter,
    toggleIsLoginOpen,
    toggleIsSignUpOpen,
    isLogin,
  } = props;

  return (
    <>
      <header>
        <div className={mainWindowStyles.online_shop}>online shop</div>
        <nav className={mainWindowStyles.online_shop_nav}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about-us"> ABOUT US</NavLink>
          <div className={mainWindowStyles.btnWrapper}>
            <button
              onClick={toggleIsLoginOpen}
              className={`${mainWindowStyles.online_shop_nav} ${mainWindowStyles.btn}`}
            >
              Log in
            </button>
            <button
              onClick={toggleIsSignUpOpen}
              className={`${mainWindowStyles.online_shop_nav} ${mainWindowStyles.btn}`}
            >
              {!isLogin ? 'Sign up' : 'Sign out'}
            </button>
          </div>
          {isLogin ? (
            <div>
              <button className={mainWindowStyles.basketWrapper}>
                <img src={Basket} alt="basket" />
              </button>
              <div className={mainWindowStyles.items} mainWindowStyles>
                items:{currentBasketListItems.length}/sum:
                {basketItemsSum(currentBasketListItems)}${' '}
              </div>
            </div>
          ) : (
            <div className={mainWindowStyles.shouldBy}>
              To buy smth you should Log in
            </div>
          )}
        </nav>
      </header>
      <section className={mainWindowStyles.listItem}>
        <Routes>
          <Route
            path="/"
            element={
              <ListItem
                listItem={listItem}
                reTurnItem={reTurnItem}
                returnBasketListItems={returnBasketListItems}
                isLogin={isLogin}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/item/:id"
            element={
              <Item
                currentItem={currentItem}
                returnBasketListItems={returnBasketListItems}
                increaseCounter={increaseCounter}
                decreaseCounter={decreaseCounter}
                counter={counter}
                isLogin={isLogin}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
    </>
  );
};
