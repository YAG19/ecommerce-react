import React from 'react';
import styles from 'styled-components';

const ProductWrap = styles.div`
margin-top:100px;
margin-left:200px;
display: grid;
grid-template-columns: auto auto auto auto;     
`;


const ProductList = ({product}) => {
   
    return(
        <React.Fragment>
        <ProductWrap>
        {product.map( (ele,index) => {return <div className="card mr-0" style={{width:"15rem"}} key={index} >
                                                <img src={ele.searchImage} className="card-img-top" alt="product-img" />
                                                <div className="card-body">
                                                <h5 className="card-title">{ele.brand}</h5>
                                                <p className="d-inline card-text ">RS {ele.price}</p>  
                                                <p className="d-inline px-2 card-text text-decoration-line-through">{ele.discount}</p>  
                                                <p>{ele.additionalInfo}</p>                 
                                                </div>
                                    
                                    </div>})}
        </ProductWrap>
        </React.Fragment>
    )
}

export default ProductList;
