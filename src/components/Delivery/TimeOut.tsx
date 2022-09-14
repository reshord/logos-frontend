import React from "react";
import styles from '../../styles/delivery/delivery.module.css'
import timeToSleep from '../../images/time-out-banner/Sleep.png'

interface TimeType {
    date: string
}

const TimeOut: React.FC<TimeType> = ({date}) => {
    
    return (
        <div className={styles.timeOut}>
                <div className={styles.timeOutInfo}>
                    <span>Сегодня мы {date > '23:59' ? 'еще' : 'уже'} не доставляем.</span>
                    <p>Заказы принимаем до 20:50, доставляем с 8:30 до 21:30</p>
                </div>
                <img className={styles.timeOutImg} src={timeToSleep} alt="" />
            </div>
    )
}

export default TimeOut