import React from "react";
import AboutUsImage from '../../images/about-us/AboutUs.png'
import styles from '../../styles/about-us/aboutUs.module.css'
import Group from '../../images/about-us/Group.png'
import Vector from '../../images/about-us/Vector.png'
import Coocks from '../../images/about-us/Coocks.png'

const AboutUs = () => {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutKafeInfo}>
                <span className={styles.title}>НАШЕ КАФЕ</span>
                <p>Мы расположены в одном из самых живописных мест <br /> города — на берегу реки, это ваш оазис в черте города,<br /> куда можно сбежать от шумного и пыльного мегаполиса.<br /> Мы, действительно уникальные, ведь все продумано до <br />мелочей: проект построен из дикого закарпатского сруба,<br /> камин в основном зале ресторана и панорамные окна с<br /> видом на реку, уютные беседки на берегу реки и лучшая <br />видовая террасса, шатер с посадкой на 200 человек,<br /> сказочный детский домик и бассейн.</p>
                <button className={styles.btn}>Посмотреть меню</button>
            </div>
            <div className={styles.aboutKafeBlocks}>
                <div className="freshest_products">
                    <img className={styles.aboutImg} src={Group} alt="" />
                    <span>Свежайшие продукты</span>
                </div>
                <div className="fast-delivery">
                <svg className={styles.aboutImg} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.6953 24.7266H33.1389L45.7077 2.62665C46.0172 2.08283 46.0135 1.41495 45.699 0.873872C45.3845 0.332795 44.8055 0 44.1797 0H23.0859C22.3288 0 21.6563 0.48523 21.4178 1.20392L10.8709 32.9613C10.6929 33.4974 10.783 34.086 11.1136 34.5443C11.4441 35.002 11.9742 35.2735 12.539 35.2735H27.4562L17.9535 57.5524C17.6152 58.3457 17.9017 59.2667 18.6305 59.7277C19.3593 60.1887 20.3146 60.0527 20.8864 59.4077L49.0114 27.6499C50.013 26.5183 49.2082 24.7266 47.6953 24.7266ZM25.4388 48.9647L31.734 34.2055C32.2275 33.0483 31.3779 31.7578 30.1172 31.7578H14.9748L24.3544 3.51563H41.1575L28.5892 25.6151C27.9245 26.7838 28.7691 28.2422 30.1172 28.2422H43.7906L25.4388 48.9647Z" fill="#fff"></path></svg>
                    <span>Быстрая доставка</span>
                </div>
                <div className="bets-cooks">
                    <img className={styles.aboutImg} src={Coocks} alt="" />
                    <span>Лучшие повара</span>
                </div>
                <div className="freshest_products">
                    <img className={styles.aboutImg} src={Group} alt='' />
                    <span>Свежайшие продукты</span>
                </div>
            </div>
        </div>
    )
}

export default AboutUs