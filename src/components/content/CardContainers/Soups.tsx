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


type ColdCardType = {
    title: string,
    soups: Ref<HTMLDivElement>,
}

const Soups: React.FC<ColdCardType> = React.memo(({title, soups}) => {
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
        <motion.div ref={soups} className={styles.ContentCardBlock}>
            <div className={styles.contentTitle}>
                <span>{title}</span>
            </div>
            <motion.div className={styles.contentCards}
                        drag='x'
                        dragConstraints={{right: 0, left: -1250}}>
                {isLoading && allProducts.products.map(el => <Card key={el.id} {...el} />)}
                
            </motion.div>
        </motion.div>
    )
})

export default Soups