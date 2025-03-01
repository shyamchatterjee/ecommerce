import { createContext, useState } from "react";

export let Context = createContext(null)
export let ContextFuntion = ({children})=>{
         let [cart,setCart] = useState([])
    let addCart = (element)=>{
              let findProduct = cart.find((item)=>{
                   if (item.id==element.id) {
                         return item
                   }
              })
              if (findProduct) {
                  let filterProduct = cart.filter((item)=>{
                         if (item.id!==element.id) {
                              return item
                         }
                    
                  })
                  setCart([...filterProduct,{...findProduct,q:findProduct.q+1}])

              }else{
                  setCart([...cart,{...element,q:1}])
              }
    }



    return  <Context.Provider value={{addCart,cart}}>
        {children}
      </Context.Provider>
}