import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import style from '../../styles/header/cartModal.module.css'
import closeModal from '../../images/header-image/closeModal.png'
import cartEmpty from '../../images/header-image/cartEmpty.png'
import { cartModal } from "../../redux/slices/products";
import { useNavigate } from "react-router-dom";

const CartModal = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const closeCartModal = () => {
        dispatch(cartModal(false))
        navigate('/')
    }


    return (
        <div className={style.cartModalBody}>
            <div className={style.cartModal}>
                    <img onClick={() => closeCartModal()} className={style.cartClose} src={closeModal} alt="" />
                    <div className={style.cartEmpty}>
                        <img className={style.cartImg} src={cartEmpty} alt="" />
                        <span>КОРЗИНА ПУСТАЯ</span>
                        <button onClick={() => closeCartModal()} className={style.cartBtn}>Посмотреть меню</button>
                    </div>
            </div>  
        </div>
    )
}

export default CartModal