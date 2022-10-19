import React from 'react';
import { useEffect, useState } from 'react';


const UseContext = () => {


    
  const [data, setData] = useState({});

  useEffect( ()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eee8c6ed0dmsha88c38fa4ae15dap170535jsne6c198eab5c2',
            'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
        }
    };
    
    fetch('https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=Berlin&countryName=Germany', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  },[])

  console.log(data)
    return (
        <div>
            contect
        </div>
    );
};

export default UseContext;