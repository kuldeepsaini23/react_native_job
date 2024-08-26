import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react'
// import {RAPID_API_KEY} from '';

// const rapidApiKey = RAPID_API_KEY;
const useFetch = (endpoint, query) => {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);



  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '6eddfc06eemsh701bfe8c5a552c0p19dbd2jsna9dc8b75062d',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query},
    
    
  };
  
  
  const fetchData = async ()=>{
    setIsLoading(true);

    try{
      const response = await axios.request
      (options);

      setData(response.data.data);
      setIsLoading(false)
    }catch(error){
      setError(error)
      alert("There is an error")
    }finally{
      setIsLoading(false);
    }
  }

  //Runs when the Dom Load
  useEffect(() => {
    fetchData();
  }, [])

  //Function for refecthing the data
  const refetch = ()=>{
    setIsLoading(true);
    fetchData();
  }
  

  return{data, isLoading, error, refetch};
}

export default useFetch;








