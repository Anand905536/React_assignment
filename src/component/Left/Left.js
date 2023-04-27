import React from 'react'
import './left.css'
import { Link, Route, Routes } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { AiOutlineTransaction } from 'react-icons/ai'
import { AiFillSchedule } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { FcSettings } from 'react-icons/fc'
import DashBoard from '../Right/DashBoard'
import Schedules from '../Links/Schedules'
import Settings from '../Links/Settings'
import Transactions from '../Links/Transactions'
import Users from '../Links/User'


const Left = () => {
    
    return (
        <>
        <div className='left'>
            <div className='board'>Board</div>
            <div className='links_logo'>
                <div className='inside_link_logo'>
                    <MdOutlineDashboardCustomize className='logo' />
                    <Link className='link' to="/" >Dashboard</Link>
                </div>
                <div className='inside_link_logo'>
                    <AiOutlineTransaction className='logo' />
                    <Link className='link' to="/transactions" >Transactions</Link>
                </div>
                <div className='inside_link_logo'>
                    <AiFillSchedule className='logo' />
                    <Link className='link' to="/schedules" >Schedules</Link>
                </div>
                <div className='inside_link_logo'>
                    <FaUsers className='logo' />
                    <Link  className='link' to="/users" >Users</Link>
                </div>
                <div className='inside_link_logo'>
                    <FcSettings className='logo' />
                    <Link className='link' to="/settings" >Settings</Link>
                </div>
            </div>
            <div className='help'>
                <div>Help</div>
                <div>Contact Us</div>
            </div>
        </div>
        <Routes>
            <Route style={{color:"white"}} path="/" element={<DashBoard/>}/>
            <Route style={{color:"white"}} path="/transactions" element={<Transactions/>}/>
            <Route style={{color:"white"}} path="/schedules" element={<Schedules/>}/>
            <Route style={{color:"white"}} path="/users" element={<Users/>}/>
            <Route style={{color:"white"}} path="/settings" element={<Settings/>}/>
        </Routes>
        </>
    )
}

export default Left