import React,{useContext} from 'react'
import { ProductsContainer, ProductsH1, ProductsWrapper, ProductCard, ProductImage, ProductName, ProductPriceWrapper, ProductNewPrice, ProductOldPrice, ProductBtnWrapper, AddToBagBtn, BagIcon, ProductBadge, ProductDetailsWrapper, ProductDesc} from './ProductsElements'
import CounterElement from "../CounterElement";


import {ContextConsumer} from '../../utils/Context'

const Products = ({heading, data}) => {

    const user = useContext(ContextConsumer);
    console.log("ContextConsumer: ", user.user_address);



    return (
        <ProductsContainer id="products">
            <ProductsH1>{heading}</ProductsH1>
            <ProductsWrapper>
                {data.map((product, index) => {
                    return (

                        <ProductCard key={index}> 
                        <ProductBadge >naadan</ProductBadge>    
                        <ProductImage src={product.img}/>
                        <ProductName>{product.name}</ProductName>
                        {/* <ProductDesc>{product.desc}</ProductDesc> */}

                        <ProductNewPrice>₹{product.newPrice}/{product.minweight}gm</ProductNewPrice>

                        <ProductDetailsWrapper>
                        <CounterElement/>
                            {/* <ProductPriceWrapper>
                                <ProductNewPrice>₹{product.newPrice}</ProductNewPrice>
                                <ProductOldPrice>₹{product.oldPrice}</ProductOldPrice>
                            </ProductPriceWrapper> */}
                            <ProductBtnWrapper>
                            <AddToBagBtn to='/modal' >
                            Buy { <BagIcon /> }
                            </AddToBagBtn>
                        </ProductBtnWrapper>
                        </ProductDetailsWrapper>
                        </ProductCard>
                    )

                })}

            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
