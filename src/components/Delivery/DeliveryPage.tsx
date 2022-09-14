import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/delivery/delivery.module.css'
import HeaderContent from "../content/HeaderContent";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import TimeOut from "./TimeOut";

const DeliveryPage = () => {
                            /* Hooks */
    const [activeDelivery, setActiveDelivery] = useState<number>(0)
    const [methodDelivery, setMethodDelivery] = useState<number>(0)
    const [timeOfDelivery, setTimeOfDelivery] = useState<number>(0)
                            /* Hooks */

    const delivery = ['Доставка', 'Самовызов'],
          payment = ['Оплата онлайн', 'Курьеру картой', 'Наличными'],
          timeOfDeliveryOptions = ['В ближайшее время', 'Ко времени']

    let date: string = `${new Date().getHours()}:${new Date().getMinutes()}`

return (
    <>
    <Header />
    <HeaderContent />
        <div className={styles.DeliveryPage}>
            <Link to={'/cart'}>
                <span className={styles.toCart}>
                    в корзину
                </span>
            </Link>
            <span className={styles.deliveryTitle}>
                ОФОРМЛЕНИЕ ЗАКАЗА
            </span>

            {date >= '20:50' && date <= '8:30' && <TimeOut date={date}/>}
            
            <div className={styles.contacts}>
                <span>1. Контактная информация</span>
                <div className={styles.inputContacts}>
                    <input type="text" placeholder="Имя*"/>
                    <input type="text" placeholder="Телефон*"/>
                </div>
            </div>
            <div className={styles.delivery}>
                <div className={styles.title}>2. Доставка</div>
                <div className={styles.chooseDelivery}>
                    {delivery.map((el, index) => 
                        <div key={index} className={activeDelivery === index 
                                               ? styles.active 
                                               : styles.btn}
                             onClick={() => setActiveDelivery(index)}>
                                {el}
                        </div>)} 
                        {/* {activeDelivery === 0 
                        && <div>
                                <img src="" alt="" />
                                <span>Доставим через 1 час 30 минут</span>
                            </div>}  */}
                </div>
                {activeDelivery === 0 
                ? <div className={styles.deliveryAddress}>
                    <span>Адрес доставки</span>
                    <div className={styles.deliveryData}>
                            <form action="">
                                <input className={styles.deliveryStreet} type="text" placeholder="Укажите улицу*"/>
                                <input className={styles.homeNumber} type="text" placeholder="Номер дома*"/>
                                <input className={styles.optionsPlace} type="text" placeholder="№ квартиры/офиса"/>
                                <input className={styles.entrance} type="text" placeholder="Подъезд"/>
                                <input className={styles.floor} type="text" placeholder="Этаж"/>
                                <input className={styles.comment} type="text" placeholder="Комментарий"/>
                            </form>
                        </div>
                    </div>
                : <div className={styles.chooseRestaurant}>
                        <span>Выберите ресторан</span>
                        <img src="" alt="" />
                  </div>}
            </div>
            <div className={styles.payment}>
                <div className={styles.paymentTitle}>3. Оплатить</div>
                <div className={styles.paymentMethod}>
                    {payment.map((el, index) => 
                        <div key={index} className={methodDelivery === index 
                                               ? styles.active 
                                               : styles.btn}
                             onClick={() => setMethodDelivery(index)}>
                                {el}
                        </div>)}
                </div>
                {activeDelivery === 0 
                && <div className={styles.change}>
                    Сдача с
                </div>}
            </div>
            <div className={styles.timeOfDelivery}>
                <div className={styles.timeOfDeliveryTitle}>4. Когда доставить</div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div className={styles.timeOfDeliveryOption}>
                    {timeOfDeliveryOptions.map((el, index) => 
                            <div key={index} className={timeOfDelivery === index 
                                                ? styles.active 
                                                : styles.btn}
                                onClick={() => setTimeOfDelivery(index)}>
                                    {el}
                            </div>)}
                            
                    </div>
                    {activeDelivery === 0 
                    && <div className={styles.chooseTime}>
                        Укажите время
                    </div>}
                </div>
                <div className={styles.countOfPerson}>
                    <span>Кол-во персон</span>
                    <div className={styles.CounterOfPerson}>
                        <span className={styles.minus}>-</span>
                        <span>1</span>
                        <span className={styles.plus}>+</span>
                    </div>
                </div>
            </div>
            <div className={styles.accept}>
                <div>
                    <input id="accept" className={styles.checkboxAccept} type="checkbox" />
                    <label htmlFor="accept">Я согласен на обработку моих перс. данных в соответствии с Условиями</label>
                </div>
                <button className={styles.btnOfDelivery}>Оформить заказ</button>
            </div>
        </div>
    <Footer />
    </>
    )
}

export default DeliveryPage