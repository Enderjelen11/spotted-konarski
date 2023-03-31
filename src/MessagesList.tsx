import React from 'react'
import { Message } from './Message'

export const MessagesList = (props : {messages:message[]}) => {
    return (
    <>
        {props.messages.map((message)=>{
            return (
                <Message info={message} />
            )
        })}
    </>
    )
}
