import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Favourites from './Favourites/Favourites'

const Dashboard = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/favourites' element={<Favourites/>} />
        </Routes>
    </>
  )
}

export default Dashboard