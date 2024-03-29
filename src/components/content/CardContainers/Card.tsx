import React, { useEffect, useState } from "react";
import styles from '../../../styles/content/Content.module.css'
import buy from '../../../images/cards/Buy.png'
import { CardInfo } from "../../../types/types";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { pushArr, productInCart, deleteProdCart } from "../../../redux/slices/productsCart";
import store, { RootState } from "../../../redux/store";
import { updatePriceProd } from "../../../redux/slices/productsCart";
import { Link } from "react-router-dom";


const Card: React.FC<CardInfo> = ({id, image, title, count, description, weight, price, popular}) => {
    const dispatch = useAppDispatch()
    const {addProdToCart} = useAppSelector<RootState>(store.getState)
    const {productsCart, isLoading, cartOpen, prodInCart, prodId } = addProdToCart
    const [totalPrice, setTotalPrice] = useState<number>(price)
    const [totalCount, setTotalCount] = useState<number>(count)
    
    const pricePlus = () => {

        setTotalCount(totalCount + 1)
        setTotalPrice(price * (totalCount + 1))
        dispatch(updatePriceProd({id, totalCount: totalCount + 1}))
    }
    const priceMinus = () => {
        if(totalCount <= 1) {
            dispatch(deleteProdCart(id))
            dispatch(updatePriceProd({id, totalCount: 1}))
            setTotalCount(1)
        }
        else{
            setTotalCount(totalCount - 1)
            setTotalPrice(totalPrice - price)
            dispatch(updatePriceProd({id, totalCount: totalCount - 1}))

        }
    }

    const addToCart = (data: CardInfo) => {
        dispatch(pushArr(data))
        dispatch(productInCart(data.id))
    }

    useEffect(() => {
        productsCart.map(el => {
            if(id === el.id) {
                setTotalPrice(price * el.count)
                setTotalCount(el.count)
            }
        })
    }, []);


    return (
        <div className={styles.card}>
            {prodInCart.includes(id) && (
                <div className={styles.countProd}>
                    {totalCount}
                 </div>
            )}
            <Link to={`/infoProduct/${id}`}>
            <div className={styles.cardImage}>
                {image ? <img src={image} alt="" /> : <div>Загрузка...</div>}
            </div>
            </Link>
            <div className={styles.cardHeaderInfo}>
                <div className={styles.cardInfo}>
                    <span className={styles.cardInfoTitle}>
                        {title}
                    </span>
                    <span className={styles.cardInfoDescription}>
                        {description}
                    </span>
                </div>
                <div className={styles.cardWeight}>
                    Вес: {weight} г.
                </div>
            </div>
            <div className={styles.cardFooter}>
                
                {prodInCart.includes(id) ?
                   <div className={styles.productInCart}>
                        <span onClick={() => priceMinus()}>-</span>
                        <div>{totalPrice <= 0 ? price : totalPrice} ₽</div>
                        <span onClick={() => pricePlus()}>+</span>
                   </div>
                   :
                    <>
                    <span className={styles.cardPrice}>{price} ₽</span>
                        <button onClick={() => addToCart({id,
                                                        image, 
                                                        title, 
                                                        count,
                                                        description, 
                                                        weight, 
                                                        price,
                                                        popular})} 
                            className={styles.btn}>В корзину</button>
                        <img className={styles.buy} src={buy} alt="" />  
                    </>
                }
            </div>
        </div>
    )
}

export default Card