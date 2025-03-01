import { useState } from "react"
import { api } from "../contast/contast"

let useHooks = ()=>{
      let [obj,setObj] = useState({})
      let [array,setArray] = useState([])
      
      let [updateobj,setupdateObj] = useState({})
     
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
   

      return ({obj,setObj,createProduct,getApi,array,setArray,removeButton,editButton,editButton,updateobj,setupdateObj})
}
export default useHooks