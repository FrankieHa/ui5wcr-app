import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from 'views/Home';
import Detail from 'views/Detail/Detail';
const AppRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail' element={<Detail/>}/>
        </Routes>
    )
}
export default AppRoute