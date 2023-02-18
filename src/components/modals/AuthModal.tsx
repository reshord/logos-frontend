import React, { useEffect, useState } from "react";
import styles from '../../styles/content/Content.module.css'
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldValues, PayloadData } from "../../types/types";
// import {authLogin, authRegister} from '../../axios'
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
        // const {payload}: any = await dispatch(authLogin({email, password}))        
        // if(payload.token) {
        //     localStorage.setItem('token', payload.token)
        //     navigate('/')
        //     reset()
        // }
        // else {
        //     alert('Не удалось авторизоваться')
        //     reset()
        // }
        
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
        if(confirmPassword === password) {
            // await dispatch(authRegister({email, password, confirmPassword}))
            reset()
        }
        return
    }

    useEffect(() => {
        // console.log(isAuth);
    }, [isAuth]);

    const {
        handleSubmit,
        register,
        reset,
        formState: {
            errors
        }
    } = useForm({
        mode: 'onBlur'
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
                                required: 'Вы не ввели почту',
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,12}/
                            })} className={styles.email} 
                                type="text" 
                                placeholder="Ваше имя"/>
                            {errors?.email && <div className={styles.someError}>{`${errors?.email.message}`}</div>}
                            <input {...register('password', {
                                required: 'Вы не ввели пароль',
                            })} className="password" 
                                type={`${showLoginPassword ? 'text' : 'password'}`} 
                                placeholder="Password"/>

                                <img onClick={() => showLoginPasswordValue()} className={styles.showValue} src={hideAndShowValue} alt="" />
                                {errors?.password && <div className={styles.someError}>{`${errors?.password.message}`}</div>}

                            <button className={styles.authBtn}>Войти</button>
                        </form>
                    </div>
                    ) 
                    : (
                        <div className={styles.authModalContent}>
                            <div className={styles.authHeader}>
                                {authBlock.map((el, index) => <span key={index} className={authSide === index ? styles.authActive : styles.auth} onClick={() => setAuthSide(index)}>{el}</span>)}
                            </div>
                                <form onSubmit={handleSubmit(onsubmitRegister)}>
                                    <input {...register('email', {
                                        required: 'Вы не ввели почту',
                                        minLength: {
                                            message: 'Почта должна быть не меньше 5 символов',
                                            value: 5
                                        },
                                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,12}/
                                    })} className={styles.email} 
                                    type="text" 
                                    placeholder="example@gmail.com"/>
                            {errors?.email && <div className={styles.someError}>{`${errors?.email.message}`}</div>}

                                <input {...register('password', {
                                        required: 'Вы не ввели пароль',
                                        minLength: {
                                            value: 5,
                                            message: 'Длинна пароля должна быть не меньше 5 символов'
                                        }
                            })} className="password" 
                                    type={`${showPaasword ? 'text' : 'password'}`} 
                                    placeholder="Password"/>
                                    <img onClick={() => showPasswordValue()} className={styles.showValue} src={hideAndShowValue} alt="" />
                                    {errors?.password && <div className={styles.someError}>{`${errors?.password.message}`}</div>}

                                <input {...register('confirmPassword', {
                                        required: 'Нужно подтвердить пароль',
                            })} className="password" 
                                    type={`${showAccepPassword ? 'text' : 'password'}`}
                                    placeholder="Confirm password"/>
                                    <img onClick={() => showAcceptPasswordValue()} className={styles.showValue} src={hideAndShowValue} alt="" />
                                {errors?.confirmPassword && <div className={styles.someError}>{`${errors?.confirmPassword.message}`}</div>}

                                 <button className={styles.authBtn}>Регистрация</button>
                                </form>
                    </div>
                    )}
        </div>
        </>
    )
}

export default AuthModal