import React,{useEffect, useState} from 'react'
import axios from 'axios'
import qs from 'qs';
const Base_URL = 'http://192.168.141.61'

const ProductContext = React.createContext()

function  ContextProvider(props) {

    const [values,setValues] = useState({
        // cart : [],
        products_veg: [],
        _home_screen : 'kit', // kit or veg
        kit_screen : '200',      //200 or 400
        // user_address : [],

    })
    
    const[userValues,setUserValues] = useState({
        user_address : ["sree","abcd"],
   })



   const initKitProducts = async ()=>{
       
    console.log("init kit ");
    // await fetch('https://api.npms.io/v2/search?q=react')
    
    
    await axios({
        'method'    :   'GET',
        'url'       :   `${Base_URL}/products/`,
        'headers'   :   {
                            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                        },
        'data'      :  qs.stringify({
                        // 'userPhone': phoneNumber,
                        
                        
                        }),
    })
    .then(res =>{
        // if success
        console.log("da njan vanneyy : ", res.status );
        if(res.status === 201)
        {
            // setValues({
            //     ...values,
            //     products_veg : res.data.products, // match it from backend
            // })
            console.log(res.data);
        }
    }).catch(err=>{
        // setting dummy data
        // delete this on production
        // setValues({
        //     ...values,
        //     products_veg : fakedata.products 
        // })
    })
    
}




   useEffect( async ()=>{
        // call function to initialize data to product kit
        
        await initKitProducts()
        // await initCartItems()
        // await initUserAddress()
        // await initOrderPlaced()
        
    },[])




    return (
        <ProductContext.Provider value={{
            ...userValues,
            setUserValues : setUserValues,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}


const ContextConsumer = ProductContext.Consumer;
export {ContextConsumer,ContextProvider}

