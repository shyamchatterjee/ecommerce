let Cartbutton = ()=>{
    return  <button
    className="add-cart"
    style={{backgroundColor:bgColor}}
    onClick={() =>{ counter.addCart(element),cartbuttonText()}}
  ></button>
}
export default Cartbutton