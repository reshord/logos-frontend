import React, {useEffect, useState} from "react";
import { CardInfo, ReviewsTypes } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import HeaderContent from "../content/HeaderContent";
import Footer from "../Footer/Footer";
import { pushArr } from "../../redux/slices/productsCart";
import styles from '../../styles/ProdInfo/prodInfo.module.css'
import cart from '../../images/Cart.png'
// import { getComments,  } from "../../axios";
import {addCommentToList} from "../../redux/slices/addComment";
import ScrollTopButton from "../ScrollTop";


const ProdInfo: React.FC = () => {
    const params = useParams()
    const {allProducts, auth, comments} = useAppSelector<RootState>(store.getState)
    const [product, setProduct] = useState<CardInfo>()
    const [reviews, setReviews] = useState<ReviewsTypes[]>([])
    const [value, setValue] = useState<string>('')

    const {isAuth} = auth
    
    const {success, AllComments} = comments
    
    
    const dispatch = useAppDispatch()
    const addToCart = () => {
        // dispatch(pushArr(product))
    }

    const addComment = (body: any) => {
        const email = auth.data?.email
        if(isAuth && body !== '') {
            dispatch(addCommentToList({email, body}))
        }
        setValue('')
    }

    useEffect(() => {
        // allProducts.products.map(el => {
        //     if(Number(params.id) === el.id) {
        //         setProduct(el)
        //     }
        // })
        // axios.get(`https://jsonplaceholder.typicode.com/post/${params.id}/comments`).then(res => setReviews(res.data))
        // dispatch(getComments(params))
    }, [product]);

   

    return (
        <>
        <Header />
        <div className={styles.prodInfo}>
            <div className="prodInfoImage">
                <img className={styles.prodImg} src={product?.image} alt="" />
            </div>
            <div className={styles.blockInfo}>
                    <div className={styles.prodInfoHeader}>
                        <span className={styles.title}>{product?.title}</span>
                        <span className={styles.description}>{product?.description}</span>
                    </div>
                    <div className={styles.prodInfoFooter}>
                        <span className={styles.weight}>Вес: {product?.weight} г</span>
                        <div className={styles.prodInfoPrice}>
                            <button className={styles.btn}>
                                В корзину
                            </button>
                            <span className={styles.price}>{product?.price} ₽</span>
                        </div>
                        <div>

                        </div>
                    </div>
            </div>
        </div>
        {success && 
            <div className={styles.reviews}>
            <p>Отзывы</p>
            <div className={styles.someReviews}>
                {AllComments?.map(el => 
                    <div key={el.id} className={styles.block}>
                        <div className={styles.commentatorname}>{el.email}</div>
                        <div className={styles.commentBody}>{el.body}</div>
                    </div>
                )}
            </div>
            <div className={styles.addReview}>
                <input value={value} 
                       type="text" 
                       placeholder="Добавить отзыв..."
                       onChange={e => setValue(e.target.value)}/>
                <button onClick={() => addComment(value)} disabled={isAuth ? false : true} className={styles.addReviewBtn}>
                    Добавить
                </button>
            </div>
        </div>
        }
        <Footer />
       </>
    )
}

export default ProdInfo