import React, { useEffect, useState } from "react";
import styles from '../styles/App.module.css'
import srcollToTop from '../images/content/arrowTop.png'


const ScrollTopButton = () => {

    const [showButton, setShowButton] = useState<boolean>(false)

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, []);

    return (
        <div>
            {showButton && 
                <img onClick={() => scrollToTop()} 
                className={styles.arrowTop} 
                src={srcollToTop} 
                alt="" 
                       />
            }
        </div>
    )
}

export default ScrollTopButton