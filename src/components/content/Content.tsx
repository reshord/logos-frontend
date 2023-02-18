import React, {  useEffect, useRef, useState } from "react";
import styles from '../../styles/content/Content.module.css'
import ContenCardBlock from "./CardContainers/ColdSnacks";
import store, { RootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CartModal from "../modals/CartModal";
// import { addProducts, logout } from '../../axios';
import NotificationProdvider from "../customs-hooks/Notifications/NotificationProvider";
import HotAppetizers from "./CardContainers/HotAppetizers";
import MeatDishes from "./CardContainers/MeatDishes";
import Soups from "./CardContainers/Soups";
import FishMeals from "./CardContainers/FishMeals";
import {motion} from 'framer-motion'
import {filterCardsPopular, filterCardsPriceLess, filterCardsPriceMore, } from '../../redux/slices/allProducts'
import {activeAdaptiveModal, initialStateType} from '../../redux/slices/activeModals'
import { Link } from "react-router-dom";
import ColdSnacks from "./CardContainers/ColdSnacks";



interface IFilter {
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

    const streetsChoosed = useRef<HTMLDivElement>(null)
    const inputValue = useRef<HTMLInputElement>(null)

    const filterBlock = useRef<HTMLDivElement>(null)

    const [activeFilter, setActiveFilter] = useState<boolean>(false)
    const [method, setMethod] = useState<string | undefined>('популярности')

    const {cartOpen} = addProdToCart
    const {adaptiveModal}: initialStateType  = activeModals

    const sortMethods = [
        {type: 'POPULAR', message: 'популярности'},
        {type: 'PRICE_LESS', message: 'цене(от меньшего)'},
        {type: 'PRICE_MORE', message: 'цене(от большего)'},
    ]

    const blockWidth = useRef<HTMLDivElement>(null)
    
    const [offsetWidth, setOffsetWidth] = useState<number | undefined>(0)
    const [scrolltWidth, setScrolltWidth] = useState<number | undefined>(0)
    const [streets, setStreets] = useState<string[]>()
    const [value, setValue] = useState<string>('')
    const getScrollWidth = scrolltWidth ? scrolltWidth : 0
    const getWidth = offsetWidth ? getScrollWidth - offsetWidth : 0

    const filterScroll = (reference: any) => {
        window.scrollTo({
            top: reference?.current && reference.current.offsetTop - 225,
            behavior: 'smooth'
        })
    }

    const filterStreets = streets?.filter(street => {
        return street.toLowerCase().includes(value.toLowerCase())
    })

    const headerLogout = () => {
        if(auth.data) {
            const {email} = auth.data
            // dispatch(logout(email))
        }
    }

    const closeAdaptiveModal = (e: React.MouseEvent) => {
        if(e.target !== streetsChoosed.current && e.target !== inputValue.current) {
            setValue('')
        }
    }

    const closeFilterMethod = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(e.target !== filterBlock.current) {
            setActiveFilter(false)
        }
        const b = 'sdfsdf'
        const a = b.replace(/\D/g, '')
    }

    const setMethodAndClose = (el: IFilter) => {
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
        // dispatch(addProducts())
        setOffsetWidth(blockWidth.current?.offsetWidth)
        setScrolltWidth(blockWidth.current?.scrollWidth);
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
        const body = document.querySelector('body') as HTMLElement
        body.style.overflowY = `${adaptiveModal ? 'hidden' : 'visible'}`
        
    }, [adaptiveModal]);

    return (
        <div  className={styles.content} onClick={e => closeFilterMethod(e)}>
            {adaptiveModal && (
                <div className={styles.adaptiveModal} onClick={(e) => closeAdaptiveModal(e)}>
                    <div className={styles.blockAdaptiveModal} >
                        <span className={styles.searchRestaurant}>Поиск ресторана</span>
                        <input ref={inputValue}
                               type="text" 
                               placeholder="Введите адресс ресторана "
                               value={value}
                               onChange={e => setValue(e.target.value)}/>
                        {value && (
                            <div className={styles.streets} ref={streetsChoosed}>
                                {filterStreets?.map(street => 
                                    <div className={styles.street}>
                                        {street}
                                    </div>    
                                )}
                                {filterStreets?.length === 0 && (
                                    <span className={styles.unknown}>Not found</span>
                                )}
                             </div>
                        )}
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
            <motion.div ref={blockWidth} className={styles.headerContent}>
                <motion.div className={styles.filterScrollSection}>
                    <span onClick={() => filterScroll(coldAppetizers)}>Холодные закуски</span>
                    <span onClick={() => filterScroll(hotAppetizers)}>Горячие закуски</span>
                    <span onClick={() => filterScroll(meatDishes)}>Мясные блюда</span>
                    <span onClick={() => filterScroll(soups)}>Супы</span>
                    <span onClick={() => filterScroll(fishMeals)}>Рыбные блюда</span>
                </motion.div>
            </motion.div>
        <div className={styles.blockFilterOption}>
            <div className={styles.method} >
                <span  className={styles.filtered}>Сортировать по: </span>
                <span ref={filterBlock} className={styles.choosedFilter} onClick={() => setActiveFilter(!activeFilter)}>{method}</span>
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
        
            <ColdSnacks title={'Холодные закуски'} coldAppetizers={coldAppetizers}/>
            <HotAppetizers title={'Горячие закуски'} hotAppetizers={hotAppetizers}/>
            <MeatDishes title={'Мясные блюда'} meatDishes={meatDishes}/>
            <Soups title={'Супы'} soups={soups}/>
            <FishMeals title={'Рыбные блюда'} fishMeals={fishMeals}/>
        </div>
    )
})

export default Content