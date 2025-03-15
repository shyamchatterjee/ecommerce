import { Link, useParams } from "react-router";
import useHooks from "../hooks/useHooks";
import { useEffect, useState } from "react";
import { api } from "../contast/contast";

let UpdateForm = ()=> {
   
   let {editButton,updateobj,setupdateObj} = useHooks()
   
     let perams = useParams()
     useEffect(()=>{
           api.get("/product/"+perams.elementid).then((value)=>{
                    setupdateObj(value.data)
           })
     },[])
   
   return  <>
     
   <Link to="/product">Product</Link>
<div className="upper-contener">

  <div className="contener">
    <h2 style={{ textAlign: "center" ,color:"green" }}>Update product</h2>
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault(),
        editButton(updateobj.id,updateobj)
      }}
    >
      <div className="input-contener">
        <p>Name</p>
        <input
          type="text"
          name=""
          value={updateobj.name}
          id="text-input"
          placeholder="Product-name"
          onChange={(e)=>{setupdateObj({...updateobj,name:e.target.value})}}
        
        />
      </div>
      <div className="input-contener">
        <p>Brand</p>
        <input
          type="text"
          name=""
          id="brand-input"
          value={updateobj.brand}
          placeholder="Product-brand"
          onChange={(e)=>{setupdateObj({...updateobj,brand:e.target.value})}}
        
         
        />
      </div>
      <div className="input-contener">
        <p>Category</p>
        <select
          className="select-contener"
          name=""
          id=""
          value={updateobj.category}
          onChange={(e)=>{setupdateObj({...updateobj,category:e.target.value})}}
        
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
          value={updateobj.price}
          placeholder="Product-price"
          onChange={(e)=>{setupdateObj({...updateobj,price: e.target.value})}}
        
        />
      </div>

      <div className="input-contener">
        <p>Description</p>
        <textarea
          className="text-area"
          name=""
          id=""
          value={updateobj.description}
          onChange={(e)=>{setupdateObj({...updateobj,description:e.target.value})}}
        
        ></textarea>
      </div>
      <div className="input-contener">
        <p>Frist image</p>
        <input
          type="text"
          name=""
          id="image-input"
          placeholder="Image-url"
          value={updateobj.image}
          onChange={(e)=>{setupdateObj({...updateobj,image:e.target.value})}}
        
        />
      </div>
      <div className="input-contener">
        <p>Second image</p>
        <input
          type="text"
          name=""
          id="image-input"
          placeholder="Image-url"
          value={updateobj.img1}
          onChange={(e)=>{setupdateObj({...updateobj,img1:e.target.value})}}
        
        />
      </div>
      <div className="input-contener">
        <p>Third image</p>
        <input
          type="text"
          name=""
          id="image-input"
          placeholder="Image-url"
          value={updateobj.img2}
          onChange={(e)=>{setupdateObj({...updateobj,img2:e.target.value})}}
        
        />
      </div>
      <div className="input-contener">
        <p>Fourth image</p>
        <input
          type="text"
          name=""
          id="image-input"
          placeholder="Image-url"
          value={updateobj.img3}
          onChange={(e)=>{setupdateObj({...updateobj,img3:e.target.value})}}
        
        />
      </div>
      <div className="input-contener">
        <p>Rating</p>
        <input
          type="text"
          name=""
          id="image-input"
          placeholder=" Product-rating"
          value={updateobj.rate}
          onChange={(e)=>{setupdateObj({...updateobj,rate:e.target.value})}}
        
        />
      </div>
      <div className="button-contener">
        <input className="submit-button" type="submit"  value="Update" />
       
      </div>
    </form>
  </div>
</div>

</>
}
export default UpdateForm