import React from 'react'

const LoadButton = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className='button'>Show more</button>
  )
}

export default LoadButton;