import { useEffect, useState } from "react";
import "../App.css";
import useHooks from "../hooks/useHooks";
import { Link } from "react-router";

let Home = () => {
  let {
    obj,
    setObj,
    createProduct,
    
   
  } = useHooks();
   

  return (
    <>
         <Link to="/product">Product</Link>
      <div className="upper-contener">
      
        <div className="contener">
          <h2 style={{ textAlign: "center"  }}>Create Product</h2>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault(), createProduct(obj);
            }}
          >
            <div className="input-contener">
              <p>Name</p>
              <input
                type="text"
                name=""
                value={obj.name}
                id="text-input"
                placeholder="Product-name"
                onChange={(e) => {
                  setObj({ ...obj, name: e.target.value });
                }}
              />
            </div>
            <div className="input-contener">
              <p>Brand</p>
              <input
                type="text"
                name=""
                id="brand-input"
                value={obj.brand}
                placeholder="Product-brand"
                onChange={(e) => {
                  setObj({ ...obj, brand: e.target.value });
                }}
              />
            </div>
            <div className="input-contener">
              <p>Category</p>
              <select
                className="select-contener"
                name=""
                id=""
                onClick={(e) => {
                  setObj({ ...obj, category: e.target.value });
                }}
              >
                <option value="Phone">Phone</option>
                <option value="Phone">Phone</option>
                <option value="Phone">Phone</option>
                <option value="Phone">Phone</option>
                <option value="Laptop">Laptop</option>
                <option value="Laptop">Laptop</option>
                <option value="Laptop">Laptop</option>
                <option value="Laptop">Laptop</option>
              </select>
            </div>
            <div className="input-contener">
              <p>Price</p>
              <input
                type="text"
                name=""
                id=""
                className="price-input"
                value={obj.price}
                placeholder="Product-price"
                onChange={(e) => {
                  setObj({ ...obj, price:e.target.value });
                }}
              />
            </div>

            <div className="input-contener">
              <p>Description</p>
              <textarea
                className="text-area"
                name=""
                id=""
                value={obj.description}
                onChange={(e) => {
                  setObj({ ...obj, description: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="input-contener">
              <p>image</p>
              <input
                type="text"
                name=""
                id="image-input"
                placeholder="Image-url"
                value={obj.image}
                onChange={(e) => {
                  setObj({ ...obj, image: e.target.value });
                }}
              />
            </div>
            <div className="input-contener">
              <p>Rating</p>
              <input
                type="text"
                name=""
                id="image-input"
                placeholder="Product-rating"
                value={obj.rate}
                onChange={(e) => {
                  setObj({ ...obj, rate: e.target.value });
                }}
              />
            </div>
            <div className="button-contener">
              <input className="submit-button" type="submit"  value="Post" />
              
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
};
export default Home;
