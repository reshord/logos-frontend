import React, { useRef, useState, useEffect, Ref } from "react";
import styles from '../../../styles/content/Content.module.css'
import Card from './Card'
import {motion} from 'framer-motion'
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import store, { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";
import CardLoader from './CardLoader'
import axios from 'axios'
import { CardInfo } from "../../../types/types";


interface IColdCard {
    title: string,
    soups: Ref<HTMLDivElement>,
}

const Soups: React.FC<IColdCard> = React.memo(({title, soups}) => {
    const carousel = useRef<HTMLDivElement>(null)

    const [offsetWidth, setOffsetWidth] = useState<number | undefined>()
    const [scrollWidth, setScrollWidth] = useState<number | undefined>()
    const {addProdToCart, allProducts} = useAppSelector<RootState>(store.getState)
    const {productsCart, isLoading} = addProdToCart 
    const getScrolltWidth = scrollWidth ? scrollWidth : 0
    const getOffsetWidth = offsetWidth ? getScrolltWidth - offsetWidth : 0

    

    useEffect(() => {
        setOffsetWidth(carousel.current?.offsetWidth);
        setScrollWidth(carousel.current?.scrollWidth);
    }, []);
    
    return (
        <div ref={soups} className={styles.ContentCardBlock}>
            <div className={styles.contentTitle}>
                <span>{title}</span>
            </div>
            <div className={styles.contentCards}>
                {isLoading && allProducts.products.Soups.map(el => <Card key={el.id} {...el} />)}
                
            </div>
        </div>
    )
})

export default Soups