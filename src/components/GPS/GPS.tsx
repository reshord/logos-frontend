import Reactt from "react";
import style from '../../styles/content/Content.module.css'
import Location from '../../images/about-us/Location.png'
import Message from '../../images/about-us/Message.png'
import facebook from '../../images/about-us/facebook.png'
import instagram from '../../images/about-us/instagram.png'
import vkontakte from '../../images/about-us/vkontakte-logo.png'
import youtube from '../../images/about-us/youtube.png'

const AboutUsGPS = () => {
    return (
        <div className={style.gps}>
            <div className={style.contacts}>
                <div className={style.contactsTitle}>КОНТАКТЫ</div>
                <div className={style.ourContacts}>
                    <div className={style.contactsAddress}>
                        <img className={style.location} src={Location} alt="" />
                        <div className={style.address}>
                            <span>Наш адрес:</span>
                            <b>МО, городской округ Красногорск, село Ильинкое,<br /> Экспериментальная улица, 10</b>
                        </div>
                    </div>
                    <div className={style.contactsEmail}>
                        <img className={style.message} src={Message} alt="" />
                        <div className={style.ourEmail}>
                            <span>Наша почта: </span>
                            <b>auto.wash@gmail.com</b>
                        </div>
                    </div>
                </div>
                <div className={style.contactsNumber}>
                    <button className={style.contactsBtn}>ЗАБРОНИРОВАТЬ СТОЛ</button>
                    <div className={style.number}>
                        <span>+7 (917) 510-57-59</span>
                        <p>Звоните или оставляйте заявку</p>
                    </div>
                </div>
                <div className={style.footer}>
                    <span>Мы в соц сетях: </span>
                    <img className={style.footerImg} src={facebook} alt="" />
                    <img className={style.footerImg} src={vkontakte} alt="" />
                    <img className={style.footerImg} src={youtube} alt="" />
                    <img className={style.footerImg} src={instagram} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default AboutUsGPS