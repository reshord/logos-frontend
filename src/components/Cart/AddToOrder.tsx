import React from "react";
import { CardInfo } from "../../types/types";
import styles from '../../styles/cart/cart.module.css'
import { useAppDispatch } from "../../redux/hooks";
import { pushArr } from "../../redux/slices/products";
import { orderProd } from "../../types/types";

const AddToOrder: React.FC<CardInfo> = ({image, title, price, id, count, weight, description}) => {
    const dispatch = useAppDispatch()

    const addProdToOrder = (data: orderProd) => {
        dispatch(pushArr(data))
    }
    
    return (
        <div className={styles.addProdToOrder}>
            
            <img className={styles.orderImg} src={image} alt="" />
            <span>{title}</span>
            <div onClick={() => addProdToOrder({image, title, price, id, count, weight, description})} className={styles.add}>
                <p>Добавить</p>
                <span>+</span> 
            </div>
            <div className={styles.price}>
                {price} ₽
            </div>
        </div>
    )
}

export default AddToOrder