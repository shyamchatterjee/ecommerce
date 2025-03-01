
import '../App.css'
import { BrowserRouter,Route, Routes } from "react-router";
import Home from './homeComponent';

import Product from './product';
import Cartcomponent from './cartcomponent';
import UpdateForm from './updateform';
import { ContextFuntion } from '../Context/context';

function App() {
    return <BrowserRouter>
    <ContextFuntion>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cartcomponent' element = {<Cartcomponent/>}/>
            <Route path='/product' element={<Product/>}    />
            <Route  path='/updateform/:elementid'  element={<UpdateForm/>}   />
        </Routes>
        </ContextFuntion>
     </BrowserRouter>
}

export default App
