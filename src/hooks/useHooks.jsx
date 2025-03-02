import { useState } from "react"
import { api } from "../contast/contast"

let useHooks = ()=>{
      let [obj,setObj] = useState({})
      let [array,setArray] = useState([])
      
      let [updateobj,setupdateObj] = useState({})
     let [bttonText,setbttonText] = useState("Add to cart")
     let [bgColor,setbgColor] = useState("orange")
     let [disaBled,setdisaBled] = useState(false)
     let getApi = (limit)=>{
          api.get("/product?_limit="+limit).then((value)=>{
                 setArray(value.data)
          })
     }
      let createProduct = (data)=>{
          api.post("/product",data).then((value)=>{
               getApi()
               obj.name = ""
               obj.price = ""
               obj.brand = ""
               obj.category = ""
               obj.image = ""
          })
      }
     let removeButton = (id)=>{
            api.delete("/product/"+id).then((value)=>{
                getApi()
            })
     }
       
     let editButton = (id,data)=>{
           
        api.patch("/product/"+id,data).then((value)=>{
                 getApi()
                 updateobj.name = ""
                 updateobj.brand = ""
                 updateobj.category = ""
                  updateobj.price = ""
                 updateobj.description =""
                  updateobj.image = ""
               
        })
     }
     let cartbuttonText = ()=>{
         
            setbttonText("Added to cart")
            setbgColor("green")
            setdisaBled(true)
            setTimeout(() => {
                setbttonText("Add to cart")
                setbgColor("orange")
                setdisaBled(false)
            },2000);
        
     }
   

      return ({obj,setObj,createProduct,getApi,array,setArray,removeButton,editButton,editButton,updateobj,setupdateObj,cartbuttonText,bttonText,bgColor,disaBled})
}
export default useHooks