import React from 'react'
import ReactDOM from 'react-dom/client'
import { ModalPrompt } from './ModalPrompt'
import './App.css'
import Players from './Players'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ModalPrompt /> */}
    <Players />
  </React.StrictMode>,
)
