import React from "react";
import styles from '../../styles/footer/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="arrow-top"></div>
            <div className={styles.infoFooterBlock}>
                <div className={styles.titleLogo}>LOGOS</div>
                <span>
                © ООО СК «АПШЕРОН»<br /> Все права защищены. 2010-2020
                </span>
                <a className={styles.footerLink} href="/">Пользовательское соглашение</a>
                <a className={styles.footerLink} href="/">Карта сайта</a>
                <a className={styles.footerLink} href="/">Политика конфиденциальности</a>
            </div>
            <div className={styles.footerMenu}>
                <span>О ресторане</span>
                <span>Условия доставки</span>
                <span>Возврат товара</span>
                <span>Акции</span>
            </div>
        </div>
    )
}

export default Footer