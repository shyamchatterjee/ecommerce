import { useContext, useEffect } from "react";
import useHooks from "../hooks/useHooks";
import { Link, useSearchParams } from "react-router";
import { CiShoppingCart } from "react-icons/ci";
import { Context } from "../Context/context";
import Cartbutton from "./productbutton";
import Search from "./Searchcomponent ";

let Product = () => {
  let { getApi, array, removeButton } = useHooks();
  let counter = useContext(Context);

  let [limits, setlimit] = useSearchParams();
  let limit = limits.get("limit");
  useEffect(() => {
    getApi(limit);
  }, []);

  return (
    <>
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
               <Link to="/oppo"><img src="https://static.vecteezy.com/system/resources/previews/020/190/680/original/oppo-logo-oppo-icon-free-free-vector.jpg" height={50} width={50}    alt="" /></Link>
               <Link to="/vivo" ><img src="https://www.phoneworld.com.pk/wp-content/uploads/2019/02/vivo-logo.jpg"  height={50} width={50}  alt="" /></Link>
               <Link to="/moto"  ><img src="https://th.bing.com/th/id/OIP.YqehjuiIXVEzk6lxu0UqggHaGz?w=815&h=749&rs=1&pid=ImgDetMain"  height={50} width={50} alt="" /></Link>
               <Link  to="/poco" ><img src="https://i1.wp.com/tech-ish.com/wp-content/uploads/2020/01/Xiaomi-Poco-Company-Logo.jpg?fit=1200%2C675&ssl=1" height={50} width={50} alt="" /></Link>
               <Link to="/infinix"  ><img src="https://static.vecteezy.com/system/resources/previews/020/927/278/non_2x/infinix-brand-logo-phone-symbol-name-white-design-china-mobile-illustration-with-black-background-free-vector.jpg" height={50} width={50} alt="" /></Link>
               <Link to="/apple"  ><img src="https://th.bing.com/th/id/R.8ef8e7517ce4e8ba5c30c0e649892441?rik=cHzqZU5R2edg0w&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fapple-logo-png-transparent-background%2fapple-logo-png-transparent-background-11.png&ehk=7o7msvPDIVBW90bxSOkAV9YPjCnj3ew3BLmZKptd%2bYQ%3d&risl=&pid=ImgRaw&r=0" height={50} width={50} alt="" /></Link>
        </div>
      <div className="product-contener">
        {array.map((element) => {
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
                  <Cartbutton element={element} />
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
  );
};
export default Product;
