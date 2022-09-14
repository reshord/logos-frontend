import React, { useRef, useState, useEffect } from "react";
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
    title: string
}

const ContenCardBlock: React.FC<ColdCardType> = React.memo(({title}) => {
    const dispatch = useAppDispatch()
    const [width, setWidth] = useState<undefined | number>()
    const {addProdToCart, allProducts} = useAppSelector<RootState>(store.getState)
    const {productsCart, isLoading} = addProdToCart 

    
    
    const carousel = useRef<HTMLDivElement>(null)

    useEffect(() => {
    }, []);
    
    return (
        <motion.div className={styles.ContentCardBlock}>
            <div className={styles.contentTitle}>
                <span>{title}</span>
            </div>
            <motion.div ref={carousel} 
                        className={styles.contentCards}
                        drag='x'
                        dragConstraints={{right: 0, left: -1367}}>
                {isLoading && allProducts.products.map(el => <Card key={el.id} {...el} />)}
            </motion.div>
        </motion.div>
    )
})

export default ContenCardBlock