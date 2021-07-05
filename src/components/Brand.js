import React, { useState } from "react";
import styles from "styled-components"


const BrandContainer = styles.nav`
display: flex;
position: fixed;
top: 435px;
left: 0px;
width: 200px;
max-height:100% ;
flex-direction: column;
padding: 0px 20px;
background: #2c2c2c;
color: #fff;
overflow:auto;
`;



const Brand = ({brand,handleBrand}) => {

  const [expand,setExpand] = useState(false);
  const [brands,setBrand] = useState(brand.slice(0,12,brand.length));

  const handleExpand = () => {
    if(!expand){
    setExpand(true);
    setBrand(brand.slice(0,brand.length))
    return;
  }
  setBrand(brand.slice(0,12,brand.length))  
  setExpand(false)
  }

  return <React.Fragment>
    <BrandContainer>
    <h3>Brand</h3>

    <button onClick={() => handleExpand()} > { !expand ? "+Expand" : "Collapse"}</button>

    {brands.map((ele,id) => { return <label key={id}><input key={id} type="checkbox" value={id}  onChange={() => handleBrand(id)} /> {ele} </label> } )}  
   
    </BrandContainer>

    </React.Fragment>
  
 
};

export default Brand;
