import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import './columndata.css'

const Columndata = () => {
  return (
    <div className='column'>

      {/* first column */}
      <div className='first_column'>
        <div className='col_Heading'>
          <p>Top products</p>
          <div style={{ display: 'flex', fontSize: "10px", fontWeight: 'normal', marginRight: '30px' }}>
            <p style={{ marginTop: '20px', color: '#858585' }}>May - June 2021</p>
            <AiOutlineDown style={{ marginTop: '22px', color: '#858585', marginLeft: '5px' }} size={10} />
          </div>
        </div>

        {/*  */}

        <div className='product_detail' >
          <div className='circle_insidecolumn'></div>
          <div className='detail'>

            <div >
              <div className='circle_of_product1'></div>
              <div className='listing'>
                <p>Basic Trees</p>
                <p style={{ marginTop: '-10px', fontSize: '8px', color: '#858585' }}>55%</p>
              </div>
            </div>


            <div>
              <div className='circle_of_product2'></div>
              <div className='listing'>
                <p>Custom Short Pants</p>
                <p style={{ marginTop: '-10px', fontSize: '8px', color: '#858585' }}>31%</p>
              </div>
            </div>

            <div>
              <div className='circle_of_product3'></div>
              <div className='listing'>
                <p>Super Hoodies</p>
                <p style={{ marginTop: '-10px', fontSize: '8px', color: '#858585' }}>14%</p>
              </div>
            </div>



          </div>
        </div>
      </div>


      {/* second column */}
      <div className='second_column'>
        <div className='col_Heading'>
          <p>Today’s schedule</p>
          <div style={{ display: 'flex', fontSize: "10px", fontWeight: 'normal', marginRight: '30px' }}>
            <p style={{ marginTop: '20px', color: '#858585' }}>See All</p>
            <AiOutlineRight style={{ marginTop: '22px', color: '#858585', marginLeft: '5px' }} size={10} />
          </div>
        </div>


        {/*  */}

        <div className='info_in_secondcol'>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <div className='line_in_col2' style={{backgroundColor:'#9BDD7C'}}></div>
          <div className='detail_in_col2'>
          <h6 style={{fontFamily:'sans-serif',fontSize:'12px',color:'#666666'}}>Meeting with suppliers from Kuta Bali</h6>
            <p style={{fontFamily:'sans-serif',fontSize:'10px',marginTop:'-27px',color:'#999999'}}>14.00-15.00</p>
            <p style={{fontFamily:'sans-serif',fontSize:'9px',marginTop:'-8px',color:'#999999'}}>at Sunset Road, Kuta, Bali </p>
          </div>
          </div>
          
           <div style={{display:'flex',justifyContent:'space-between'}}>
           <div className='line_in_col2' style={{backgroundColor:'#6972C3'}}></div>
          <div className='detail_in_col2'>
            <h6 style={{fontFamily:'sans-serif',fontSize:'12px',color:'#666666'}}>Meeting with suppliers from Kuta Bali</h6>
            <p style={{fontFamily:'sans-serif',fontSize:'10px',marginTop:'-27px',color:'#999999'}}>14.00-15.00</p>
            <p style={{fontFamily:'sans-serif',fontSize:'9px',marginTop:'-8px',color:'#999999'}}>at Sunset Road, Kuta, Bali </p>
          </div>
        </div>
           </div>
         


      </div>

    </div>




  )
}

export default Columndata