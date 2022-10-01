import React, { useEffect, useRef, useState } from "react";
import styles from '../../../styles/content/Content.module.css'
import close from '../../../images/cards/delete.png'


interface NotificationType {
    id: string
    type: string
    message: string
}

const Notification: React.FC<NotificationType> = ({id, type, message}) => {

    let [width, setWidth] = useState<number>(1)
    // const [intervalId, setIntervalId] = useState<NodeJS.Timer>()
    const intervalRef = useRef<NodeJS.Timer>()

    

    const handleStartTimer = () => {

            const intTime = setInterval(() => {
                setWidth(prev => {
                    if(prev && prev <= 100) {
                        return prev + 0.5
                    }
                    return prev
                })
            }, 30);
            intervalRef.current = intTime
            return intTime
    }

    
    

    const handleStopTimer = () => {
        clearInterval(intervalRef.current)
    }

    useEffect(() => {
        clearInterval(intervalRef.current)
        intervalRef.current = handleStartTimer()

    }, []);


    return  (
        <div style={{display: `${width > 99 ? 'none' : 'block'}`}} onMouseEnter={handleStopTimer} onMouseLeave={handleStartTimer} className={styles.notificationItem}>
            <div className="block">
                <p>{message}</p>
                <div style={{width: `${width}%`}} className={styles.bar} />
            </div>
            <img  src={close} className={styles.close} alt="" />
        </div>
    )
}

export default Notification