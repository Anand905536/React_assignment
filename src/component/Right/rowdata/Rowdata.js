import React from 'react'
import './rowdata.css'
import Nested_rowdata from './Nested_rowdata'
import {useState} from 'react'



const Rowdata = () => {
    const [comp,setComp]=useState(['#DDEFE0','#F4ECDD','#EFDADA','#DEE0EF'])
    
    return (
        <div className='main_rowdata'>
            {
                comp.map((data,idx)=>{
                    return(
                        <>
                        <Nested_rowdata color={data}/>
                        </>  
                    )
                })
            }
        </div>
    )
}

export default Rowdata

