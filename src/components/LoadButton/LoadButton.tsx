import React from 'react'

type LoadButtonProps = {
  onLoadMore: () => void,
}

const LoadButton: React.FC<LoadButtonProps> = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className='button'>Show more</button>
  )
}

export default LoadButton;