import React from 'react'
import './card.css'
import { AiOutlineDown } from 'react-icons/ai'

const Card = () => {
  return (
    <div className='card'>
      <div className='navbar_in_card'>
        <div className='Heading'>
          <p>Activities</p>
          <div style={{ display: 'flex', fontSize: "10px", fontWeight: 'normal' }}>
            <p style={{ marginTop: '-6px', color: '#858585' }}>May - June 2021</p>
            <AiOutlineDown style={{ marginTop: '-5px', color: '#858585', marginLeft: '5px' }} size={10} />
          </div>
        </div>
        <div className='sub_heading'>
          <div style={{ display: 'flex', width: '45px', justifyContent: 'space-between' }}>
            <div className='circle' style={{ backgroundColor: '#E9A0A0' }}></div>
            <p>Guest</p>
          </div>
          <div style={{ display: 'flex', width: '45px', justifyContent: 'space-between' }}>
            <div className='circle' style={{ backgroundColor: '#9BDD7C' }}></div>
            <p>User</p>
          </div>
        </div>
      </div>


      {/* chart */}

      <div className='chart' style={{ marginTop: '-20px' }}>

        <div className='chart_data'>
          <p style={{ fontSize: '12px', color: '#858585' }}>500</p>
          <hr style={{ width: "95%", opacity: '.5', marginLeft: '30px', marginTop: '-20px', color: '#858585' }} />
        </div>
        <div className='chart_data'>
          <p style={{ fontSize: '12px', color: '#858585' }}>400</p>
          <hr style={{ width: "95%", opacity: '.5', marginLeft: '30px', marginTop: '-20px', color: '#858585' }} />
        </div>
        <div className='chart_data'>
          <p style={{ fontSize: '12px', color: '#858585' }}>300</p>
          <hr style={{ width: "95%", opacity: '.5', marginLeft: '30px', marginTop: '-20px', color: '#858585' }} />
        </div>
        <div className='chart_data'>
          <p style={{ fontSize: '12px', color: '#858585' }}>200</p>
          <hr style={{ width: "95%", opacity: '.5', marginLeft: '30px', marginTop: '-20px', color: '#858585' }} />
        </div>
        <div className='chart_data'>
          <p style={{ fontSize: '12px', color: '#858585' }}>100</p>
          <hr style={{ width: "95%", opacity: '.5', marginLeft: '30px', marginTop: '-20px', color: '#858585' }} />
        </div>
        <div class="week">
          <p>Week1</p>
          <p>Week2</p>
          <p>Week3</p>
          <p>Week4</p>
        </div>
      </div>

     
    </div>
  )
}

export default Card