// CountryList.js
import React, { useState, useEffect } from 'react';

const Countrylist = ({ onSelectCountry }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/countries'); // Replace with your actual API endpoint

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setCountries(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <p>Loading countries...</p>;
  }

  if (error) {
    return <p>Error fetching countries: {error.message}</p>;
  }

  

   
   
     return (
      <section className='countrylist'>
       <div className='container'>
        <div className='section-title'>
          <h2> {title} </h2>
          </div>
          <h2>Country List</h2>
      <ul>
        {countries.map(country => (
          <li key={country.id} onClick={() => onSelectCountry(country.id)}>
            {country.name}
          </li>
        ))}
      </ul>
        </div>
        </section>
     )
   }
   export default countrylist