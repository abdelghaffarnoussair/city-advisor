import React from 'react'
import Loaderimg from "../../assets/images"
import './Loader.css'
export const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={LoaderImg} alt='loader'/>
    </div>
  )
}
export default Loader
