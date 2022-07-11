import React from 'react'
import "./random.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    
    <div className='footer'>
    <FacebookIcon style={{
        color: "white",
        marginLeft:"15px",
        marginRight:"15px",
    }} />
     <InstagramIcon style={{
        color: "white",
        marginLeft:"15px",
        marginRight:"15px",
    }} />  <TwitterIcon style={{
        color: "white",
        marginLeft:"15px",
        marginRight:"15px",
    }} />
    <br />
    <h6 className='footerHead'>@ Copyright 2022 | Sonu</h6>
    </div>
  )
}

export default Footer