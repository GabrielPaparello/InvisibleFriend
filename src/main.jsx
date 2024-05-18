import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { InvisibleFriend } from './pages/InvisibleFriend/InvisibleFriend'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App></App> */}
    <InvisibleFriend />
  </React.StrictMode>,
)
