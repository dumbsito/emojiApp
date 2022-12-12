import { useState,useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {Form} from './components/Form';
import { Result } from './helpers/Result';
export function App() {
  const [valueEmoji, setValueEmoji] = useState("fruit")
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode=()=>{
   setDarkMode(current=>!current)
  }

  return (
    <div className={`App ${ darkMode ? "darkbg" : ""}`}>
      <Header/>
      <Form setValueEmoji={setValueEmoji}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
      />
      <Result valueEmoji={valueEmoji} darkMode={darkMode}/>
   
      <Footer/>
    </div>
  )
}


