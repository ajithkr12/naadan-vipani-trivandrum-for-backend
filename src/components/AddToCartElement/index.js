
import React from 'react'
import { A,B,ProductsContainer, ProductImageContainer,ProductDecContainer,ProductDeleteContainer,ProductsH1, ProductsWrapper, ProductCard, ProductImage, ProductName, ProductPriceWrapper, ProductNewPrice, ProductOldPrice, ProductBtnWrapper, AddToBagBtn, BagIcon, ProductBadge, ProductDetailsWrapper, ProductDesc,DeleteIcon} from './AddToCartlist'
import CounterElement from "../CounterElement";
import SubtotalElement from "../SubtotalElement/index"

const AddToCartlist = ({heading, data}) => {
    return (
        // <ProductsContainer >
            <ProductsWrapper>
       
                {data.map((product, index) => {
                    return (

                        <ProductCard key={index}> 
                            <ProductImageContainer>
                                <ProductImage src={product.img}/>
                            </ProductImageContainer>

                            <ProductDecContainer>
                                <ProductDetailsWrapper>
                                    <ProductName>{product.name}</ProductName>
                                </ProductDetailsWrapper>

                                <ProductDetailsWrapper>
                                    <A>
                                        {/* <B>
                                            <ProductNewPrice>Price:</ProductNewPrice>
                                        </B> */}
                                        <B>
                                            {/* <CounterElement/> */}
                                            <CounterElement/>
                                        </B>
                                    </A>
                                    <A>
                                        {/* <B>
                                            <ProductNewPrice>Quality: </ProductNewPrice>
                                        </B> */}
                                        <B>
                                        
                                            
                                            <ProductNewPrice>₹{product.newPrice}</ProductNewPrice>

                                        </B>
                                    </A>
                                </ProductDetailsWrapper>
                            </ProductDecContainer>

                            <ProductDeleteContainer>
                                <AddToBagBtn to='/modal' >
                                    { <DeleteIcon /> }
                                </AddToBagBtn>
                            
                            </ProductDeleteContainer>
                        </ProductCard>

                    )

                })}


        </ProductsWrapper>
            
        // </ProductsContainer>

    )
}

export default AddToCartlist;


