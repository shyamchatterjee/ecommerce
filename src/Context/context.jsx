import { createContext, useState } from "react";

export let Context = createContext(null)
export let ContextFuntion = ({children})=>{
         let [cart,setCart] = useState([])
         let [searchvalue,setSearchvalue] = useState("")
         let [array,setArray] = useState([])
          let [boolen,setBoolen] = useState(true)
             let [style,setstyle] = useState("1px solid blue")
             let [imag,setImag] = useState("")
    let addCart = (element)=>{
        if (boolen==true) {
            
        
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
            }else{
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
                   setCart([...filterProduct,{...findProduct,image:imag, q:findProduct.q+1}])
 
               }else{
                   setCart([...cart,{...element,image:imag,q:1}])
               }
            }
    }
    let  removeFuntion = (id)=>{
        let removeItem = cart.filter((element)=>{
                if (element.id!==id) {
                  return element
                }
        })
        setCart(removeItem)
    }
     
    
    let clickFuntion = (data)=>{
          
        setImag(data)
      
        setBoolen(false)
       
    
    }
    return  <Context.Provider value={{addCart,cart,searchvalue,setSearchvalue,array,setArray,clickFuntion,boolen,style,imag,removeFuntion}}>
        {children}
      </Context.Provider>
}