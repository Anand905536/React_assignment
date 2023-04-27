import React from 'react'
import './navbar.css'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Pic from './assets/pic.png'
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <h3 className='heading'>DashBoard</h3>
            </div>
            <div style={{display:'flex',justifyContent:"space-between",width:"250px",marginRight:'60px'}}>
                <div>
                    <input className="input" type='text' style={{ outline: 'none' }} placeholder="search" />
                    <AiOutlineSearch  className='icon_inside_search'/>
                </div>
                <div>
                    <IoMdNotificationsOutline className='navbar_icon' size={20} />
                </div>
                <div>
                    <img className="navbar_image" src={Pic} alt="not shown" />
                </div>
            </div>
        </div>
    )
}

export default Navbar