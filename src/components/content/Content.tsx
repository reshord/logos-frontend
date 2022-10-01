import React, {  useEffect, useRef, useState } from "react";
import styles from '../../styles/content/Content.module.css'
import ContenCardBlock from "./CardContainers/ContenCardBlock";
import store, { RootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CartModal from "../modals/CartModal";
import { addProducts, logout } from '../../axios';
import NotificationProdvider from "../customs-hooks/Notifications/NotificationProvider";
import HotAppetizers from "./CardContainers/HotAppetizers";
import MeatDishes from "./CardContainers/MeatDishes";
import Soups from "./CardContainers/Soups";
import FishMeals from "./CardContainers/FishMeals";
import {motion} from 'framer-motion'
import {filterCardsPopular, filterCardsPriceLess, filterCardsPriceMore, } from '../../redux/slices/allProducts'
import {activeAdaptiveModal, initialStateType} from '../../redux/slices/activeModals'
import { Link } from "react-router-dom";



interface Filter {
    type?: string
    message?: string
}

const Content = React.memo(() => {

    const {addProdToCart, activeModals, auth} = useAppSelector<RootState>(store.getState)
    const dispatch = useAppDispatch()
    
    const coldAppetizers = useRef<HTMLDivElement>(null)
    const hotAppetizers = useRef<HTMLDivElement>(null)
    const meatDishes = useRef<HTMLDivElement>(null)
    const soups = useRef<HTMLDivElement>(null)
    const fishMeals = useRef<HTMLDivElement>(null)

    const filterBlock = useRef<HTMLDivElement>(null)

    const [activeFilter, setActiveFilter] = useState<boolean>(false)
    const [method, setMethod] = useState<string | undefined>('по популярности')

    const {cartOpen} = addProdToCart
    const {adaptiveModal}: initialStateType  = activeModals

    const sortMethods = [
        {type: 'POPULAR', message: 'по популярности'},
        {type: 'PRICE_LESS', message: 'по цене(от меньшего)'},
        {type: 'PRICE_MORE', message: 'по цене(от большего)'},
    ]

    const blockWidth = useRef<HTMLDivElement>(null)
    
    const [offsetWidth, setOffsetWidth] = useState<number | undefined>(0)
    const [scrolltWidth, setScrolltWidth] = useState<number | undefined>(0)
    const getScrollWidth = scrolltWidth ? scrolltWidth : 0
    const getWidth = offsetWidth ? getScrollWidth - offsetWidth : 0

    const filterScroll = (reference: any) => {
        window.scrollTo({
            top: reference?.current.offsetTop - 225,
            behavior: 'smooth'
        })
    }

    const headerLogout = () => {
        if(auth.data) {
            const {email} = auth.data
            dispatch(logout(email))
        }
    }

    const closeFilterMethod = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    }

    const setMethodAndClose = (el: Filter) => {
        setMethod(el.message)
        setActiveFilter(false)

        switch(el.type) {
            case 'POPULAR':
                dispatch(filterCardsPopular())
                break
            case 'PRICE_LESS':
                dispatch(filterCardsPriceLess())
                break
            case 'PRICE_MORE':
                dispatch(filterCardsPriceMore())
                break
            default: 
                return 
        }
    }

    useEffect(() => {
        dispatch(addProducts())
        setOffsetWidth(blockWidth.current?.offsetWidth)
        setScrolltWidth(blockWidth.current?.scrollWidth);
    }, []);

    return (
        <div className={styles.content} onClick={e => closeFilterMethod(e)}>
            {adaptiveModal && (
                <div className={styles.adaptiveModal}>
                    <div className={styles.blockAdaptiveModal}>
                        <span className={styles.searchRestaurant}>Поиск ресторана</span>
                        <input type="text" placeholder="Введите адресс ресторана "/>
                        
                        {auth.isAuth 
                            ? (
                                <span onClick={() => headerLogout()} className={styles.exit}>Выйти</span>
                            ) 
                            : (
                                <Link to={'/auth'}>
                                    <span>Вход/Регистрация</span>
                                </Link>
                            )
                        }
                    </div>
                </div>
            )}
            {cartOpen && (
                <CartModal  />
            )}


            {/* <NotificationProdvider /> */}
            <div ref={blockWidth} className={styles.headerContent}>
                <motion.div drag="x" 
                            dragConstraints={{right: 0, left: -getWidth}} className={styles.dragBlock}>
                    <motion.div   
                                 className={styles.blockFilterMenu}>
                            <div onClick={() => filterScroll(coldAppetizers)}>Холодные закуски</div>
                            <div onClick={() => filterScroll(hotAppetizers)}>Горячие закуски</div>
                            <div onClick={() => filterScroll(meatDishes)}>Мясные блюда</div>
                            <div onClick={() => filterScroll(soups)}>Супы</div>
                            <div onClick={() => filterScroll(fishMeals)}>Рыбные блюда</div>
                    </motion.div>
        </motion.div>
        </div>
        <div className={styles.blockFilterOption} ref={filterBlock}>
            <div className={styles.method} >
                <span className={styles.filtered}>Сортировать: </span>
                <span className={styles.choosedFilter} onClick={() => setActiveFilter(!activeFilter)}>{method}</span>
            </div>
        {activeFilter && 
            <div className={styles.optionFilter}>
                {sortMethods.map(el => <span onClick={() => setMethodAndClose(el)} 
                                             className={method === el.message 
                                                        ? styles.sortMethodActive 
                                                        : styles.sortMethod}>{el.message}</span>)}
            </div>
        }
        </div>
        
            <ContenCardBlock title={'Холодные закуски'} coldAppetizers={coldAppetizers}/>
            <HotAppetizers title={'Горячие закуски'} hotAppetizers={hotAppetizers}/>
            <MeatDishes title={'Мясные блюда'} meatDishes={meatDishes}/>
            <Soups title={'Супы'} soups={soups}/>
            <FishMeals title={'Рыбные блюда'} fishMeals={fishMeals}/>
        </div>
    )
})

export default Content