import { Skeleton } from 'antd'
import React from 'react'

const Loading = () => {
  return (
    <div className='mt-5 m-auto'>
      {/* Loading.... */}
      <Skeleton active />
    </div>
  )
}

export default Loading
