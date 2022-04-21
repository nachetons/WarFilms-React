import React, { useState } from 'react'
import '@/styles/botonTop.css'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <p className='botonTop' onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}><i className='fas fa-arrow-alt-circle-right icon_arrows2' /></p>

  )
}

export default ScrollButton
