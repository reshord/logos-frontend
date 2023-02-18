import React, { useRef, useState, useEffect, Ref } from "react";
import styles from '../../../styles/content/Content.module.css'
import Card from './Card'
import {motion} from 'framer-motion'
import { useAppSelector } from "../../../redux/hooks";
import store, { RootState } from "../../../redux/store";


interface ColdCardType {
    title: string,
    fishMeals: Ref<HTMLDivElement>,
}

const FishMeals: React.FC<ColdCardType> = React.memo(({title, fishMeals}) => {
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
        <div ref={fishMeals} className={styles.ContentCardBlock}>
            <div className={styles.contentTitle}>
                <span>{title}</span>
            </div>
            <div className={styles.contentCards}>
                {isLoading && allProducts.products.FishMeals.map(el => <Card key={el.id} {...el} />)}
                
            </div>
        </div>
    )
})

export default FishMeals