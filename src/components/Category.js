import React, { useState}  from "react";
import styles from "styled-components"
// import {Button} from 'react-bootstrap';

const CategoryContainer = styles.div`
display: flex;
position: fixed;
top: 80px;
left: 0;
width: 200px;
max-height: 100%;
flex-direction: column;
padding: 0px 20px;
background: #2c2c2c;
color: #fff;
overflow-y:auto ;
z-index:1;
`;



const Category = ({category,handleCategory,isChecked}) => {

  
  const [expand,setExpand] = useState(false);
  const [cate,setCategory] = useState(category.slice(0,12));

  
  const handleExpand = () => {
    if(!expand){
    setExpand(true);
    setCategory(category.slice(0,category.length))
    return;
  }
  setCategory(category.slice(0,12,category.length))  
  setExpand(false)
  }
 

  return <React.Fragment>
    <CategoryContainer>
    <h3>Category</h3>   

    <button onClick={() => handleExpand()} > { !expand ? "+Expand" : "Collapse"}</button>
    
    {cate.map((ele,key) => { return <label key={key}><input key={key} type="checkbox" value={key}  onChange={() => handleCategory(key)} /> {ele} </label> } )}  
    
    
    {/* {expand && cate.map((ele,key) => { return <label key={key}><input key={key} type="checkbox" value={key}  onChange={() => handleCategory(key)} /> {ele} </label> } )} */}
    
    </CategoryContainer>
    
    </React.Fragment>
  
 
};

export default Category;
