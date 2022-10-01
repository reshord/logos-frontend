import React, { useEffect, useState } from "react";
import styles from '../../styles/content/Content.module.css'
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldValues, PayloadData } from "../../types/types";
import {authLogin, authRegister} from '../../axios'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import NotificationProdvider from "../customs-hooks/Notifications/NotificationProvider";
import hideAndShowValue from '../../images/header-image/hideValue.png'



const AuthModal: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {addProdToCart, auth} = useAppSelector<RootState>(store.getState)

    const {isAuth} = auth

    const authBlock = [
        'Вход',
        'Регистрация'
    ]
    const [authSide, setAuthSide] = useState<number>(0)
    const [showPaasword, hidePassword] = useState<boolean>(false)
    const [showAccepPassword, hideAcceptPassword] = useState<boolean>(false)
    const [showLoginPassword, hideLoginPassword] = useState<boolean>(false)
    

    const onsubmitLogin: SubmitHandler<FieldValues> = async ({email, password}) => {
        const {payload}: any = await dispatch(authLogin({email, password}))        
        if(payload.token) {
            localStorage.setItem('token', payload.token)
            navigate('/')
            reset()
        }
        else {
            alert('Не удалось авторизоваться')
            reset()
        }
        
    }

    const showPasswordValue = () => {
        hidePassword(!showPaasword)
    }
    const showAcceptPasswordValue = () => {
        hideAcceptPassword(!showAccepPassword)
    }
    const showLoginPasswordValue = () => {
        hideLoginPassword(!showLoginPassword)
    }

    const onsubmitRegister: SubmitHandler<FieldValues> = async ({email, password, confirmPassword}) => {
        await dispatch(authRegister({email, password, confirmPassword}))
        reset()
    }

    useEffect(() => {
        // console.log(isAuth);
    }, [isAuth]);

    const {
        handleSubmit,
        register,
        reset
    } = useForm({
        
    })


    return (
        <>
        <Header />
        {/* <NotificationProdvider /> */}

        <div className={styles.authModal}>

                {authSide === 0 
                    ? (
                    <div className={styles.authModalContent}>
                        <div className={styles.authHeader}>
                            {authBlock.map((el, index) => <span key={index} className={authSide === index ? styles.authActive : styles.auth} onClick={() => setAuthSide(index)}>{el}</span>)}
                        </div>
                        <form onSubmit={handleSubmit(onsubmitLogin)}>
                            <input {...register('email', {
                                required: true
                            })} className={styles.email} 
                                type="email" 
                                placeholder="example@gmail.com"/>
                            <input {...register('password', {
                                required: true
                            })} className="password" 
                                type={`${showLoginPassword ? 'text' : 'password'}`} 
                                placeholder="Password"/>
                                <img onClick={() => showLoginPasswordValue()} className={styles.showValue} src={hideAndShowValue} alt="" />

                            <button className={styles.authBtn}>Войти</button>
                        </form>
                    </div>
                    ) 
                    : (
                        <div className={styles.authModalContent}>
                            <div className={styles.authHeader}>
                                {authBlock.map((el, index) => <span className={authSide === index ? styles.authActive : styles.auth} onClick={() => setAuthSide(index)}>{el}</span>)}
                            </div>
                                <form onSubmit={handleSubmit(onsubmitRegister)}>
                                    <input {...register('email', {
                                        required: true
                                    })} className={styles.email} 
                                    type="text" 
                                    placeholder="example@gmail.com"/>
                                <input {...register('password', {
                                        required: true
                            })} className="password" 
                                    type={`${showPaasword ? 'text' : 'password'}`} 
                                    placeholder="Password"/>
                                    <img onClick={() => showPasswordValue()} className={styles.showValue} src={hideAndShowValue} alt="" />

                                <input {...register('confirmPassword', {
                                        required: true,
                            })} className="password" 
                                    type={`${showAccepPassword ? 'text' : 'password'}`}
                                    placeholder="Confirm password"/>
                                    <img onClick={() => showAcceptPasswordValue()} className={styles.showValue} src={hideAndShowValue} alt="" />
                                 <button className={styles.authBtn}>Регистрация</button>
                                </form>
                    </div>
                    )}
        </div>
        </>
    )
}

export default AuthModal