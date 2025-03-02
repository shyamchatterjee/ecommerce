import { useContext, useEffect } from "react";
import useHooks from "../hooks/useHooks";
import { Link, useSearchParams } from "react-router";
import { CiShoppingCart } from "react-icons/ci";
import { Context } from "../Context/context";

let Product = () => {
  let { getApi, array, removeButton ,cartbuttonText,bttonText,bgColor } = useHooks();
  let counter = useContext(Context);

  let [limits, setlimit] = useSearchParams();
  let limit = limits.get("limit");
  useEffect(() => {
    getApi(limit);
  }, []);
 

  return (
    <>
      <div className="nav">
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
        <Link to="/cartcomponent">
          <div className="cart-img-contener">
            <CiShoppingCart className="cart-img" />

            <p
              style={{ color: "green" }}
              className={counter.cart.length == 0 ? "hide" : "text-length"}
            >
              {counter.cart.length}
            </p>
          </div>
        </Link>
      </div>

      <div className="product-contener">
        {array.map((element) => {
          return (
            <div className="product">
              <div className="image-contener">
                <img
                  style={{ mixBlendMode: "color-burn" }}
                  src={element.image}
                  width={200}
                  height={200}
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
                <h3 style={{ color: "red" }}>{"Rs. " + element.price}</h3>
                <h3>{element.brand}</h3>
                <h3>{element.category}</h3>
                <div className="button-contener">
                  <button
                    className="add-cart"
                    style={{backgroundColor:bgColor}}
                    onClick={() =>{ counter.addCart(element),cartbuttonText()}}
                  >
                    {bttonText}
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => removeButton(element.id)}
                  >
                    Remove
                  </button>
                  <Link to={"/updateform/" + element.id}>
                    <button className="edit-button">Edit</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Product;
