import React, {useEffect, useState} from "react";
import styles from '../../styles/cart/cart.module.css'
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import HeaderContent from "../content/HeaderContent";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import CartProd from "./CartProd";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Arrow from '../../images/header-image/Arrow.png'
import AddToOrder from "./AddToOrder";
import axios from "axios";
import { cartProdAdvice } from "../../redux/slices/products";
import { CardInfo } from "../../types/types";
import { motion } from "framer-motion";
import { logout } from "../../axios";

const Cart: React.FC = () => {
    const dispatch = useAppDispatch()
    const {addProdToCart, auth} = useAppSelector<RootState>(store.getState)
    const {productsCart, isLoading, prodAdvice, prodInCart} = addProdToCart
    const {isAuth, data} = auth
    const navigate = useNavigate()

    const summProd = productsCart.reduce((acc, cur) => {
        return acc + cur.price * cur.count
    }, 0)


    useEffect(() => {
        if(productsCart.length < 1) {
             navigate('/')
        }
        axios.get<CardInfo[]>('https://cafeee-logos.herokuapp.com/cart').then(({data}) => {
            dispatch(cartProdAdvice(data))
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [prodInCart]);


    return (
        <div className={styles.cartPage}>
            <Header />
                <div className={styles.cart}>
                    <div className={styles.cartHeader}>
                        <img className={styles.headerArrow} src={Arrow} alt="" />
                        <Link to={'/'}>к выбору блюда</Link>
                    </div>
                    <div className={styles.cartTitle}>
                        <p>КОРЗИНА</p> 
                        <span>{productsCart.length > 0 
                        ? `(в корзине ${productsCart.length} товар(-а))`
                        : '(корзина пуста)' }</span>
                    </div>
                    <div className="cart-products">
                        {productsCart.map(el => <CartProd key={el.id} {...el}/>)}
                    </div>
                    <div className={styles.cartFooter}>
                        <div className={styles.cartFooterTitle}>
                            ДОБАВИТЬ К ЗАКАЗУ
                        </div>
                            <div  className={styles.AddToOrder}>
                                {prodAdvice.map(el => <AddToOrder key={el.id} {...el}/>)}
                                {prodAdvice.length === 0 && (
                                    <div>Нет товаров</div>
                                )}
                        </div>
                    </div>
                </div>

                <div className={styles.cartProdSumm}>
                    <div className={styles.summ}>
                        <span>Итого: {summProd} ₽</span>
                        {summProd > 600 
                        ? <p>Доставка бесплатная</p> 
                        : <p>До бесплатной доставки не хватает: {600 - summProd} ₽</p>}
                        <p>Минимальная сумма заказа 500 ₽</p>
                    </div>
                    <div className={styles.order}>
                        <Link to={'/delivery'}>
                            <button disabled={isAuth && summProd > 500 ? false : true} 
                                     className={styles.orderBtn}>
                                        Оформить заказ
                            </button>
                        </Link>
                    </div>
                </div>
            <Footer />

        </div>
    )
}

export default Cart