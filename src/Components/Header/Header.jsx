import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import SearchForm from '../SearchForm/SearchForm'
function Header  () {
  return (
    <div className='Holder'>
      <header className='header'>
      <Navbar/>
<div className='header-content flex flex-c text-center text-white'> 

<h2 className='header-title text-capitalize'>Discover with US</h2>
<br />
<SearchForm />
</div>



      </header>


    </div>
  )
}

export default Header