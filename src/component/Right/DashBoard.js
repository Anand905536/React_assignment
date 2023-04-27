import React from 'react'
import './DashBoard.css'
import Navbar from './navbar/Navbar'
import Rowdata from './rowdata/Rowdata'
import Columndata from './columndata/Columndata'
import Card from './card/Card'

const DashBoard = () => {
  return (
    <div className='dashboard'>
      <Navbar/>
      <Rowdata/>
      <Card/>
      <Columndata/>
    </div>
  )
}

export default DashBoard