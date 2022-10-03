import React, { useEffect, useState, MouseEvent, useRef } from "react";
import Location from '../../images/header-image/Location.png'
import Calling from '../../images/header-image/Calling.png'
import Search from '../../images/header-image/Search.png'
import styles from '../../styles/header/header.module.css'
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import { cartModal } from "../../redux/slices/products";
import Profile from '../../images/header-image/Profile.png'
import cartMedia from '../../images/cards/Buy.png'
import { logout } from "../../axios";
import { activeAdaptiveModal } from "../../redux/slices/activeModals";

const Header = () => {
        /* Redux Toolkit */ 
    const dispatch = useAppDispatch()
    const {addProdToCart, auth} = useAppSelector<RootState>(store.getState)
        /* Redux Toolkit */

        /* State */
    const {productsCart, prodInCart, isLoading, cartOpen} = addProdToCart
    const {isAuth, data} = auth
        /* State */

        /* Hooks */
    const [value, setValue] = useState<string>('')
    const [streets, setStreets] = useState<string[]>([])
    const [onInput, setOnInput] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(true)
    const refHeaderInput = useRef<HTMLInputElement>(null)
    const refHeaderStreet = useRef<HTMLDivElement>(null)
        /* Hooks */


    const cartEmpty = () => {
        dispatch(cartModal(true))
    }

    
    

    const headerLogout = () => {
        if(data) {
            const {email} = data
            dispatch(logout(email))
        }
    }

    const filterStreets = streets.filter(street => {
        return street.toLowerCase().includes(value.toLowerCase())
    })

    const allProdsCount = productsCart.reduce((acc, cur) => {
        return acc + cur.count
    }, 0)

    const closeStreet = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if(e.target !== refHeaderInput.current) {
            setOnInput(false)
        }
    }
    const openMobileModal = () => {
        dispatch(activeAdaptiveModal())
    }

    useEffect(() => {
        setStreets([
            'ул. Оноре де Бальзака, 63',
            'ул. Вадима Гетьмана, 6, ТРЦ "COSMO MULTIMALL"',
            'ул. Маршала Тимошенко, 21, корпус 3',
            'ул. Большая Васильковская, 76',
            'ул. Богдана Хмельницкого, 27/1',
            'ул. Богдана Хмельницкого, 27/1',
            'ул. Богдана Хмельницкого, 27/1',
            'ул. Богдана Хмельницкого, 27/1',
            'ул. Богдана Хмельницкого, 27/1'
        ])
    }, []);


    return (
        <div className={styles.header} onClick={(e) => closeStreet(e)}>
            <div className={styles.menu} onClick={() => openMobileModal()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logo">
                <Link to={'/'} className={styles.logoName}>LOGOS</Link>
            </div>
            {productsCart.length > 0 
            ? <Link to={'/cart'}>
                <div className={styles.cartMedia}>
                    <img className={styles.cartMediaImg} src={cartMedia} alt="" />
                    <span>Корзина</span>
                </div>
            </Link> 
            : <div className={styles.cartMedia} onClick={() => cartEmpty()}>
                    <img className={styles.cartMediaImg} src={cartMedia} alt="" />
                    <span>Корзина</span>
                </div>}
            
            <div className={styles.deliverySearch}>
                <img className={styles.deliveryAddressLocation} src={Location}></img>
                <input onChange={(e) => setValue(e.target.value)} 
                       className={styles.deliveryAddress} 
                       placeholder="Введите адрес доставки" 
                       type="text"
                       onClick={() => setOnInput(!value)} 
                       value={value}
                       ref={refHeaderInput}/>
                <img className={styles.search} src={Search} alt="" />
                {value && (
                    <div className={styles.streets}>
                        {filterStreets.map((el, index) => 
                            <div key={index} className={styles.street}>
                                <span>{el}</span>
                            </div>
                        )}
                        {filterStreets.length === 0 && (
                            <span className={styles.unknown}>Not found</span>
                        )}
                        </div>
                    )}
            </div>
            <div className={styles.contacts}>
                <div className={styles.contactsImage}>
                    <img src={Calling} alt="" />
                </div>
                <div className={styles.contactsNumber}>
                    <span>Контакты: </span> <br />
                    <b>+380 510 57 59</b>
                </div>
            </div>
            {productsCart.length > 0 && prodInCart.length > 0
            ? (
            <div className={styles.blockCartAuth}>
                <div className={styles.auth}>
                    <img className={styles.authImg} src={Profile} alt="" />
                    {data 
                        ? <span onClick={() => headerLogout()}>Выйти</span> 
                        : <Link to={'/auth'}><span>Вход / Регистрация</span></Link>}
                </div>
                        <Link to={'/cart'}>
                            <div className={styles.cart}>
                                <b>Корзина</b>
                                <span className={styles.cartCounter}>{allProdsCount}</span>
                            </div>
                        </Link>
            </div>
            ) 
            : (
                <div onClick={() => cartEmpty()} className={styles.cart}>
                    <b>Корзина</b>
                    <span className={styles.cartCounter}>{productsCart.length}</span>
                </div>
            )}
        </div>
    )
}

export default Header