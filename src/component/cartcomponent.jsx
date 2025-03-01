import { useContext } from "react";
import { Context } from "../Context/context";
import { Link } from "react-router";

let Cartcomponent = () => {
  let counter = useContext(Context);
 
  return (
    <> <div className="div">
      <div className="nav-ber">
      <Link to="/product">
        <button className="product-button">Product</button>
      </Link>
      </div>
      <div className="cart-contener">
        {counter.cart.map((element) => {
          return (
            <div className="cart">
              <img src={element.image} width={50} height={50} alt="" />
              <h4>{element.name}</h4>
              <h5 style={{ color: "green" }}>{"Rs. " + element.price}</h5>
              <p>{"Qunatity: " + element.q}</p>
              
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};
export default Cartcomponent;
