import React, {} from 'react'
import axios from 'axios'
//import api from './../API/api'



export default  Response = async ( data) => {
    
    console.log(data)

    axios.post(`http://10.0.2.2:3000/student`, {
        
    "email": data.email,
    "name": data.name,
    "register": data.register,
    "password":data.password
    })
    .then(function (response) {
      // handle success
      console.log(response.data);
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });


   

}