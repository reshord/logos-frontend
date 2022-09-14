import React, {useEffect, useState} from "react";
import { CardInfo } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import store, { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import HeaderContent from "../content/HeaderContent";
import Footer from "../Footer/Footer";
import { pushArr } from "../../redux/slices/products";

const ProdInfo: React.FC = () => {
    const params = useParams()
    const {allProducts} = useAppSelector<RootState>(store.getState)
    const [product, setProduct] = useState<CardInfo>()

    const dispatch = useAppDispatch()

    useEffect(() => {
        allProducts.products.map(el => {
            if(Number(params.id) === el.id) {
                setProduct(el)
            }
        })
    }, [product]);

    const addToCart = () => {
        // dispatch(pushArr(product))
    }

    return (
        <>
        <Header />
        <HeaderContent />
        {/* <div className={styles.prodInfo}>
            <div className="prodInfoImage">
                <img className={styles.prodImg} src={product?.image} alt="" />
            </div>
            <div className="prodInfo">
                    <div className={styles.prodInfoHeader}>
                        <span className={styles.title}>{product?.title}</span>
                        <span className={styles.description}>{product?.description}</span>
                    </div>
                    <div className={styles.prodInfoFooter}>
                        <span className={styles.weight}>Вес: {product?.weight} г</span>
                        <div className={styles.prodInfoPrice}>
                            <button className={styles.btn}>
                                <span onClick={() => addToCart()}>Корзина</span>
                            </button>
                            <img src="" alt="" />
                            <span className={styles.price}>{product?.price} ₽</span>
                        </div>
                        <div>

                        </div>
                    </div>
            </div>
        </div> */}
        <Footer />
       </>
    )
}

export default ProdInfo