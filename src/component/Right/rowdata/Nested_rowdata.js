import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import './nested-rowdata.css'

const Nested_rowdata = ({color}) => {
    console.log(color)
  return (
        <div className='rowdata' style={{backgroundColor:color}}>
            <div className='rowdata_icon'>
                <AiFillDollarCircle size={23} />
            </div>
            <div className='rowdata_details'>
                <p style={{ fontSize: "11px", fontWeight: "bold" }}>Total Revenue</p>
                <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "-5px" }}>$6,587,56</p>
            </div>
        </div>
    
  )
}

export default Nested_rowdata