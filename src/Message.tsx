import React from 'react'

export const Message = (props : {info:message}) => {
    return (
        <div>
            {props.info.text}
        </div>
    )
}
