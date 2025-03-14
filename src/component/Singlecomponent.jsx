import { Link, useParams } from "react-router"
import { useEffect,useState,useContext } from "react";
import { api } from "../contast/contast";
import { Context } from "../Context/context";
import { CiShoppingCart } from "react-icons/ci";
import Cartbutton from "./productbutton";
import Search from "./Searchcomponent ";

let SingleProduct = ()=>{
       let perams = useParams()
    let [element,setObj] = useState({})
   
   
    let {cart,clickFuntion,boolen,style,imag} = useContext(Context)
       useEffect(()=>{
            api.get("/product/"+perams.elementid).then((value)=>{
                  setObj(value.data)
            })
       },[])
       
         
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
              className={cart.length == 0 ? "hide" : "text-length"}
            >
              {cart.length}
            </p>
          </div>
        </Link>
      </div>
                <div style={{ marginTop:"1rem" , display:"flex",justifyContent:"center",alignItems:"center"}}>
                     <div className="product">
                     <div className="image-contener">
                <img
                  style={{ mixBlendMode: "color-burn" }}
                  src= { boolen==true? element.image:imag}
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
                    </div>
                </div>
                    
                     </div>
                </div>
                <div className="img-slider" >
                   <div style={{border:style,padding:"1rem"}} > 
                     <img style={{cursor:"pointer"}} onClick={()=>clickFuntion(element.image)} src={element.image}height={50} width={50}  alt="" /> 
                     </div> 
                     <div style={{border:style,padding:"1rem"}} >
                    <img style={{cursor:"pointer"}}  onClick={()=>clickFuntion(element.img1)}  src={element.img1} height={50} width={50} alt="" />  
                    </div> 
                    <div  style={{border:style,padding:"1rem"}} >
                    <img  style={{cursor:"pointer"}}   onClick={()=>clickFuntion(element.img2)}   src={element.img2} height={50} width={50} alt="" /> 
                    </div>
                    <div style={{border:style,padding:"1rem"}} >
                    <img  style={{cursor:"pointer"}}  onClick={()=>clickFuntion(element.img3)}  src={element.img3} height={50} width={50} alt="" />  
                  </div> 
                </div>
          
       </>
}
export default SingleProduct