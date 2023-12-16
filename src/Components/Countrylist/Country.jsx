import React from 'react'
import {Link} from 'react-router-dom'
import "./Countrylist.css"
 const Country = (country) => {
  return (
    <div className='country-item flex flex-column flex-sb'>
        <div className='country-img'>
            <img src ={country.countryImg} alt ="cover"/>
            <Link to = {`/country/${country.id}` {... country} >
            <div className='country-info title fw-7 fs-18'>
                <span>{country.name}</span>
            </div>
            </Link> 
            <div className='country-info title info-1 fw-7 fs-18'>
            <span>{country.info-1}</span>
        </div>
         <div className='country-info title fw-7 info-2 fs-18'>
         <span>{country.info-2}</span>
     </div>
        </div>

    </div>
  )
}
export default Country