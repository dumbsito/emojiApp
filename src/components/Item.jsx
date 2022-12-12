import React from 'react'
import { useState,useEffect } from 'react'

export function Item({title,emoji,darkMode}) {

const [copy, setCopy] = useState(false)
    let handleCopy=()=>{
        setCopy(true)
        navigator.clipboard.writeText(emoji)
        setTimeout(() => {
            setCopy(false)
        }, 2000);
    }
  return (
    <article className={`card-emoji ${darkMode ? "dark-mode" : ""}`}>
        <p className='emoji-icon'
          onClick={handleCopy}      
        >{emoji}</p>
        <h4>{title}</h4>
        {copy==true && <p className='copied'>Copied!</p>}
    </article>
  )
}
