import React from 'react'

const TwitterButton = ({ quote, author }) => {

  return (
    <a className='twitter-btn' id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`} title="Tweet this quote!" target="_blank">
      <i className="fa fa-twitter" style={{ fontSize: '24px', color: 'white' }}></i>
    </a>
  )
}

export default TwitterButton
