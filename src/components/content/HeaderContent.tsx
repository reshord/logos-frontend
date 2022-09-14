import React, { useEffect, useRef, useState } from "react";
import styles from '../../styles/content/HeaderContent.module.css'
import {motion} from 'framer-motion'

const filtersProd: Array<string> = [
    'Холодные закуски',
    'Горячие закуски',
    'Мясные закуски',
    'Супы',
    'Рыбные блюда',
    'Гриль меню',
    'Фирменные блюда',
    'Напитки'
]

const HeaderContent = () => {
    const blockWidth = useRef<HTMLDivElement>(null)
    const [activeFilter, setActiveFilter] = useState<number>(0)
    const [width, setWidth] = useState<number | undefined>(0)


    useEffect(() => {
    }, []);

    return (
        <motion.div ref={blockWidth} className={styles.headerContent}>
            <motion.div  drag="x" dragConstraints={{right: 0, left: -500}} className={styles.dragBlock}>
            {filtersProd.map((el, index: number) => <motion.span  onClick={() => setActiveFilter(index)} key={index} 
                                                    className={activeFilter === index 
                                                            ? styles.filterActive 
                                                            : styles.filter}>{el}</motion.span>)}
            </motion.div>
        </motion.div>
    )
}

export default HeaderContent