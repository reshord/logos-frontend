import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from '../../styles/content/HeaderContent.module.css'
import {motion} from 'framer-motion'

const HeaderContent: React.FC<any> = ({coldAppetizers, hotAppetizers, meatDishes}) => {

    const blockWidth = useRef<HTMLDivElement>(null)

    const [activeFilter, setActiveFilter] = useState<number>(0)
    const [offsetWidth, setOffsetWidth] = useState<number | undefined>(0)
    const [scrolltWidth, setScrolltWidth] = useState<number | undefined>(0)
    const getScrollWidth = scrolltWidth ? scrolltWidth : 0
    const getWidth = offsetWidth ? getScrollWidth - offsetWidth : 0

    useEffect(() => {
        setOffsetWidth(blockWidth.current?.offsetWidth)
        setScrolltWidth(blockWidth.current?.scrollWidth);
    }, []);

    const filterScroll = (reference: HTMLSpanElement) => {
        
    }

    return (
        <motion.div ref={blockWidth} className={styles.headerContent}>
            <motion.div  drag="x" 
                         dragConstraints={{right: 0, left: -getWidth}} 
                         className={styles.dragBlock}>
            {/* {filtersProd.map((el, index: number) => <motion.span  
                                                    onClick={() => filterScroll(index)} 
                                                    ref={index === 0 && coldAppetizers 
                                                         || index === 1 && hotAppetizers }
                                                    key={index} 
                                                    className={activeFilter === index 
                                                            ? styles.filterActive 
                                                            : styles.filter}>{el}</motion.span>)} */}
                    <div className={styles.blockFilterMenu}>
                            <span onClick={() => filterScroll(coldAppetizers)}>Холодные закуски</span>
                            <span onClick={() => filterScroll(hotAppetizers)}>Горячие закуски</span>
                            <span onClick={() => filterScroll(meatDishes)}>Мясные блюда</span>
                    </div>

            </motion.div>
        </motion.div>
    )
}

export default HeaderContent