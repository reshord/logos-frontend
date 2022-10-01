import React from "react";
import {v4} from 'uuid'
import Notification from "./Notification";
import styles from '../../../styles/content/Content.module.css'
import { useAppSelector } from "../../../redux/hooks";
import store, { RootState } from "../../../redux/store";


interface PropTypes {
    children?: {}
}

interface NotificationType {
    id: string
    type: string
    message: string
}

const NotificationProdvider: React.FC<PropTypes> = React.memo(() => {

    const {addProdToCart, auth} = useAppSelector<RootState>(store.getState)


    const notification: NotificationType[] = [
        {
            id: `${v4()}`,
            type: 'REGISTRATION',
            message: 'Регистрация прошла успешно'
        },
        {
            id: `${v4()}`,
            type: 'LOGIN',
            message: 'Вы успешно вошли'
        },
        {
            id: `${v4()}`,
            type: 'LOGOUT',
            message: 'Вы успешно вышли'
        }
    ]

    
    return (
        <div>
            {notification.filter(note => note.type === auth.type).map(note => 
                <div className={styles.notificationWrapper} key={note.id}>
                        <Notification key={note.id} {...note}/> 
                    
                </div>
                )}
           
        </div>
    )
})

export default NotificationProdvider