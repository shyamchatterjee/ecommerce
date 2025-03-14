
import '../App.css'
import { BrowserRouter,Route, Routes } from "react-router";
import Home from './homeComponent';

import Product from './product';
import Cartcomponent from './cartcomponent';
import UpdateForm from './updateform';
import { ContextFuntion } from '../Context/context';
import SingleProduct from './Singlecomponent';
import Oppo from './oppooCmponent';
import Vivo from './vivoComponent';
import Poco from './pocoComponent';
import Infinix from './infinixcomponent';
import Moto from './motorolaComponent';
import Apple from './appleComponent';

function App() {
    return <BrowserRouter>
    <ContextFuntion>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cartcomponent' element = {<Cartcomponent/>}/>
            <Route path='/product' element={<Product/>}    />
            <Route  path='/updateform/:elementid'  element={<UpdateForm/>}   />
            <Route  path='/singleproduct/:elementid' element={<SingleProduct/>}    />
            <Route path='/oppo' element = {<Oppo/>}    />
            <Route  path='/vivo' element = {<Vivo/>}   />
            <Route path='/poco'  element={<Poco/>}  />
            <Route path='/infinix'  element={<Infinix/>}   />
            <Route path='/moto' element={<Moto/>}  />
            <Route  path='/apple'  element={<Apple/>} />
        </Routes>
        </ContextFuntion>
     </BrowserRouter>
}

export default App
