import { useContext, useEffect, useState } from "react"
import { Context } from "../Context/context"
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router";
import Search from "./Searchcomponent ";
import { api } from "../contast/contast";
import useHooks from "../hooks/useHooks";
import Cartbutton from "./productbutton";
let Oppo = ()=>{
      let counter = useContext(Context)
      let {removeButton} = useHooks()
      let [array,setArray] = useState([])

        useEffect(()=>{
              api.get("/product?brand="+ "OPPO").then((value)=>{
                     setArray(value.data)
              })
        })
   return <>
          <div className="nav">
        <Link  to="/">
          <p style={{color:"white"}}>Home</p>
        </Link>
         <Search/>
        <Link to="/cartcomponent">
          <div className="cart-img-contener">
            <CiShoppingCart className="cart-img" />

            <p
              style={{ color: "red" }}
              className={counter.cart.length == 0 ? "hide" : "text-length"}
            >
              {counter.cart.length}
            </p>
          </div>
        </Link>
      </div>
        <div className="nav-route">
          <Link to="/product">All product</Link>
               <Link to="/oppo">Oppo</Link>
               <Link to="/vivo" >Vivo</Link>
               <Link to="/moto"  >Moto</Link>
               <Link  to="/poco" >Poco</Link>
               <Link to="/infinix"  >Infinix</Link>
               <Link to="/apple"  >Apple</Link>
        </div>
           <div className="Product-contener" style={{marginTop:"2rem"}}>
            {array.length==0? <h2>Out of stock</h2>:
           array.map((element) => {
          return (
          <Link to={"/singleproduct/"+element.id}> <div className="product">
              <div className="image-contener">
                <img
                  style={{ mixBlendMode: "color-burn" }}
                  src={element.image}
                  width={150}
                  height={150}
                  alt=""
                />
              </div>
              <div className="product-details">
                <h3>
                  {element.name}
                  <p style={{ color: "green", fontSize: "10px" }}>
                    ({element.description})
                  </p>
                </h3>
                   <h2 style={{color:"orange"}}>{element.rate}</h2>
                <h3 style={{ color: "red" }}>{"Rs. " + element.price}</h3>
                <h3>{element.brand}</h3>
                <h3>{element.category}</h3>
                <div className="button-contener">
                  <Cartbutton element={element}/>
                  <button
                    className="remove-button"
                    onClick={(e) =>{e.preventDefault(), removeButton(element.id)}}
                  >
                    Remove
                  </button>
                  <Link to={"/updateform/" + element.id}>
                    <button className="edit-button" >Edit</button>
                  </Link>
                </div>
              </div>
            </div> </Link>
          );
        })}
    
           </div>
   </>
}
export default Oppo