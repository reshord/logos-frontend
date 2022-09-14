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

    const onsubmitRegister: SubmitHandler<FieldValues> = async ({email, password, confirmPassword}) => {
        await dispatch(authRegister({email, password, confirmPassword}))
        reset()
    }

    useEffect(() => {
        console.log(isAuth);
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
                                type="text" 
                                placeholder="Email"/>
                            <input {...register('password', {
                                required: true
                            })} className="password" 
                                type="password" 
                                placeholder="Password"/>
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
                                    placeholder="Email"/>
                                <input {...register('password', {
                                        required: true
                            })} className="password" 
                                    type="password" 
                                    placeholder="Password"/>
                                <input {...register('confirmPassword', {
                                        required: true,
                            })} className="password" 
                                    type="password" 
                                    placeholder="Confirm password"/>
                                 <button className={styles.authBtn}>Регистрация</button>
                                </form>
                    </div>
                    )}
        </div>
        <Footer />
        </>
    )
}

export default AuthModal