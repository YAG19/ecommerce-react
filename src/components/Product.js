import React, { useState } from "react";
import { data } from "../data";
import ProductList from "./ProductList";
import Category from "./Category";
import Navbar from "./Navbar";
import Brand from "./Brand";
import { BtnRating, BtnPrice, BtnYear, BtnClear, BtnSeletAll } from "./Styled";

function Product() {
  const [checkCategory, setCategory] = useState([]);
  const [brandCheck, setBrandCheck] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [clearAll, setClear] = useState(true);

  let category = [];
  data.products.forEach((ele) => {
    if (!category.includes(ele.category)) {
      category.push(ele.category);
    }
  });

  let brand = [];
  data.products.forEach((ele) => {
    if (!brand.includes(ele.brand)) {
      brand.push(ele.brand);
    }
  });

  const BothCheckHandler = () => {
    let brands = brandCheck.map((index) => brand[index]);
    let categories = checkCategory.map((index) => category[index]);

    let datasame = data.products.filter((ele) => {
      return brands.includes(ele.brand) && categories.includes(ele.category);
    });

    setFilterData(datasame);
  };

  const handleCategory = (id) => {
    if (checkCategory.includes(id)) {
      let uncheck = checkCategory.filter((ele) => ele !== id);
      setCategory(uncheck);
      let removedata = filterData.filter(
        (ele) => ele.category !== category[id]
      );
      setFilterData(removedata);
      if (brandCheck.length > 0) {
        let brands = brandCheck.map((index) => brand[index]);
        setFilterData(
          data.products.filter((ele) => {
            if (brands.includes(ele.brand)) {
              return ele;
            }
          })
        );
      } else {
        setClear(true);
      }
      return;
    }
    setClear(false);
    checkCategory.push(id);
    setCategory(checkCategory);

    if(filterData.length > 100) {
          setFilterData([]) 
    }

    setFilterData(
      filterData.concat(
        data.products.filter((ele) => ele.category === category[id])
      )
    );

    if (brandCheck.length > 0) {
      BothCheckHandler();
    }
  };

  const handleNav = (gender) => {
    setClear(false);
    if (checkCategory.length <= 0) {
      setFilterData(
        data.products.filter(
          (ele) => ele.gender === gender || ele.gender === "Unisex"
        )
      );
    } else {
      setFilterData(filterData.filter((ele) => ele.gender === gender));
    }
  };

  const handleBrand = (id) => {
    if (brandCheck.includes(id)) {
      let uncheck = brandCheck.filter((ele) => ele !== id);
      setBrandCheck(uncheck);
      let removedata = filterData.filter((ele) => ele.brand !== brand[id]);
      setFilterData(removedata);
      if (checkCategory.length > 0) {
        let categories = checkCategory.map((index) => category[index]);
        setFilterData(
          filterData.concat(data.products.filter((ele) => {
            if (categories.includes(ele.category)) {
                return ele;
              }
            })
          )
        );
      } else {
        setClear(true);
      }
      return;
    }
    setClear(false);
    brandCheck.push(id);
    setBrandCheck(brandCheck);

    if(filterData.length > 100) {
      setFilterData([]) 
  }

    setFilterData(
      filterData.concat(data.products.filter((ele) => ele.brand === brand[id]))
    );

    if (checkCategory.length > 0) {
      let brands = brandCheck.map((ind) => brand[ind]);

      setFilterData(
        filterData.filter((ele) => {
          return brands.includes(ele.brand);
        })
      );
    }

    if (checkCategory.length > 0) {
      BothCheckHandler();
    }
  };

  const handleSearch = (e) => {
    setClear(false);
    let result = data.products.filter((ele) => {
      return ele.productName.toLocaleLowerCase().includes(e.toLocaleLowerCase());
    });
    if (result) {
      setFilterData(result);
    }
  };

  const hadleClearAll = () => {
    setFilterData(data.products);
    setClear(true)

  }
  
  const handleRating = () => {
    setClear(true);
    setFilterData(data.products.sort((a, b) => (a.rating < b.rating ? 1 : -1))) 
  }

  console.log(filterData);

  return (
    <React.Fragment>
      <Navbar handleNav={handleNav} handleSearch={handleSearch} />
      <Category category={category} handleCategory={handleCategory} />
      {
        <BtnRating
          onClick={() => {
          
          handleRating()
          }}
        >
          Rating
        </BtnRating>
      }
      {
        <BtnPrice
          onClick={() => {
            setFilterData(
              data.products.sort((a, b) => (a.price < b.price ? 1 : -1))
            );
          }}
        >
          Price{" "}
        </BtnPrice>
      }
      {
        <BtnYear
          onClick={() => {
            setFilterData(
              data.products.sort((a, b) => (a.year < b.year ? 1 : -1))
            );
          }}
        >
          Year{" "}
        </BtnYear>
      }
      <Brand brand={brand} handleBrand={handleBrand} />
       
         { !clearAll && (<BtnClear onClick={() =>hadleClearAll() } > Clear all</BtnClear> )}
         { !clearAll && (<BtnSeletAll >Select all</BtnSeletAll> )} 
      asd
      { clearAll ? (<ProductList product={data.products} />) : ( <ProductList product={filterData} /> )}
    </React.Fragment>
  );
}

export default Product;
