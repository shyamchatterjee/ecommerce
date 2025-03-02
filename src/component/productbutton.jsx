import { useContext } from "react"
import useHooks from "../hooks/useHooks"
import { Context } from "../Context/context"

let Cartbutton = ({element})=>{
 let counter = useContext(Context)
  let {cartbuttonText,bttonText,bgColor,disaBled} = useHooks()
    return  <button
    className="add-cart"
    style={{backgroundColor:bgColor}}
    disabled={disaBled}
    onClick={() =>{ counter.addCart(element),cartbuttonText()}}
  > {bttonText}</button>
}
export default Cartbutton