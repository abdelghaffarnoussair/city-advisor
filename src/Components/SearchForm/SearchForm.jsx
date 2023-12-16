import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context'; // Make sure to import useGlobalContext from the correct path

export const SearchForm = () => {
  const { setsearchTerm, SetResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => {
    searchText.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
      setsearchTerm('Palestin,jerusalem');
      SetResultTitle('Please Enter something ...');
    } else {
      setsearchTerm(searchText.current.value);
    }
    navigate('/'); // Assuming you want to navigate to the root path
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-from-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input
                type='text'
                className='form-control'
                placeholder='Palestin,jerusalem'
                ref={searchText}
              />
              <button type='submit' className='flex flex-c'>
                <FaSearch className='text-blue' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
