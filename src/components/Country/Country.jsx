import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetails/CountryDetail';
const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    // console.log(country)
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button className='btn' onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <button className='btn' onClick={()  => handleVisitedFlag(country.flags.png)}>Flag</button>
            <button className='btn' onClick={handleVisited}>{visited ? "Visited" : "Visit"}</button>
            {/* {visited && "I have visited"} */}
            <hr />   
            <CountryDetail 
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            ></CountryDetail>
        </div>
    );
};

export default Country;