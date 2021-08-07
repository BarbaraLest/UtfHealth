import React, {useState} from 'react'
import axios from 'axios'
//import api from './../API/api'

// @flow

export default  Response = async () => {
    
  const [list, setList] = useState()

    axios.get(`http://10.0.2.2:3000/doctor`,)
    .then(function (response) {
      console.log(response.data);
      setList(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });

   

   

}