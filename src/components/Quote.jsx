import React from 'react'

const Quote = ({ text }) => {
  return (
    <div id="text" className='quote'><span className='quotation-mark'>"</span> {text} <span className='quotation-mark'>"</span></div>
  )
}

export default Quote
