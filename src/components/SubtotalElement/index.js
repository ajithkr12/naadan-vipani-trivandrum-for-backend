
import React from 'react'
import { SubtotalContainer,MainTotalContainer,PriceContainer,PriceTitle,PriceDetails,Button} from './SubtotalElement'
import { useHistory } from "react-router-dom";


const SubtotalElement = () => {
   
        let history = useHistory();
      
    const abc = () => {
       console.log("go")
       history.push("/address");
    }
    return (
        <SubtotalContainer>
            <MainTotalContainer>

                <PriceContainer>
                    <PriceTitle>Price Details</PriceTitle>
                </PriceContainer>

                <PriceContainer>
                    <PriceDetails>Product Charges:</PriceDetails>
                    <PriceDetails>300/-</PriceDetails>
                </PriceContainer>

                <PriceContainer>
                    <PriceDetails>Delivery Charges:</PriceDetails>
                    <PriceDetails>100/-</PriceDetails>
                </PriceContainer>

                <PriceContainer>
                    <PriceDetails>Discounts:</PriceDetails>
                    <PriceDetails>400/-</PriceDetails>
                </PriceContainer>



            </MainTotalContainer>

            <PriceContainer>
                    <PriceTitle>Order Totals:</PriceTitle>
                    <PriceTitle>₹1000/-</PriceTitle>
                </PriceContainer>

            <PriceContainer>
                <Button onClick={abc}>Continue</Button>
            </PriceContainer>

        </SubtotalContainer>

    )
}

export default SubtotalElement;