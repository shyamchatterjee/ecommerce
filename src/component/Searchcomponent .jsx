import { useContext, useEffect } from "react"
import { Context } from "../Context/context"
import { api } from "../contast/contast"
import useHooks from "../hooks/useHooks"

let Search = ()=>{
      let {searchvalue,setSearchvalue,array,setArray} = useContext(Context)
      let {getApi} = useHooks()
       useEffect(()=>{
            if (searchvalue=="") {
                getApi()
            }else{
                let filterfuntion = ()=>{

                
                  let filtervalue = array.filter((element)=>{
                          if (element.name.toLowerCase().includes(searchvalue.toLowerCase())||element.category.toLowerCase().includes(searchvalue.toLowerCase())) {
                                return element
                          }
                  })
                  setArray(filtervalue)
                }
                filterfuntion()
            }
       },[searchvalue])
    return <input type="text" name="" id="search-input" placeholder="Search-product-name" onChange={(e)=>{setSearchvalue(e.target.value)}} />
}
export default Search