import { useParams } from "react-router"

let SingleProduct = ()=>{
       let perams = useParams()
        console.log(perams.elementid)
}
export default SingleProduct