import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {

    return (
        <div>
            <div className={styles.mainWrapper}>
                <img className={styles.imageBoard} src={props.avatar}/>
                <div className={styles.messageBoard}>
                    <div className={styles.textBoard}>
                        <div className={styles.blockName}>{props.name}</div>
                        <div className={styles.blockMessage}>{props.message}</div>
                        <div className={styles.blockTime}>{props.time}</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Message