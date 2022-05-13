import React from 'react'

import styled from "styled-components";


import SubtotalElement from "../components/SubtotalElement/index"
import AddressElement from '../components/AddressElement';

const AddressCartWrapper = styled.div`
        // max-width: 100vh;
        margin:10% 0% 0% 0%;
        display: grid;
        grid-template-columns: 1fr;
        
        grid-gap: 0px;
        padding: 0 0px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
       

        @media screen and (max-width: 1000px){
            grid-template-columns: 1fr;
        }
        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
            padding: 0 0px ;
            justify-content: center;
        }


`
const Addresspage = () => {




    return (
        <div>
            <AddressCartWrapper>
   
            <AddressElement/> 

            </AddressCartWrapper>
        
        </div>
    )
}

export default Addresspage;