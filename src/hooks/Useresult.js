import axios from 'axios';
import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [result, setResult] = useState([]);
  const [errormessage, setErrormessage] = useState('');

  const searchApi = async (searchterm) => {
    // axios.get('https://api.yelp.com/v3/businesses/search', {
    //     method:'GET',
    //     headers: {

    //         Authorization: 'Bearer MMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx'

    //     },
    //     limit: 50,
    //     term: searchterm,
    //     location: 'united states'
    // })
    //     .then((res) => console.log(res.data))

    //     .catch((err) => console.log(err))

    // fetch(`https://api.yelp.com/v3/businesses/search?limit=50&term=${searchterm}&location=san jose`,{
    //     method:'GET',
    //     headers:{
    //         Authorization: 'Bearer MMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx'
    //     }
    // }).then(res=>res.json())
    // .then(data=>console.log(data))
    // .catch((err)=>console.log(err))

    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchterm,
          location: 'san jose',
        },
      });
      //.then((res) => {
      //     // console.log((res.data.businesses))
      //     setResult(res.data.businesses)
      // })

      console.log(`response ::`, response.data.businesses[0]);

      setResult(response.data.businesses);
    } catch (err) {
      console.log('error:::', err);
      setErrormessage('Something went wrong');
    }
  };

  useEffect(() => {
    // searchApi("rt");
  }, []);

  return [searchApi, errormessage, result];
};
