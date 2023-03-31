import React from 'react'
import ReactDOM from 'react-dom/client'
import { MessagesList } from './MessagesList'


const messages:message[] = [{text:"hello",time:""},{text:"world",time:""}];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
       <MessagesList messages={messages} /> 
    </React.StrictMode>
)

