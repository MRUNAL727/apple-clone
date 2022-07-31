import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    
  return (
    <div style={{background: 'rgba(0,0,0,0.8)'}}>
        <div style={{color:'#f5f5f7'}}>
            <Link to='/store' className='link' style={{color:'inherit', textDecoration:'none'}}>Store</Link>
            <Link to='/mac' className='link' style={{color:'inherit', textDecoration:'none'}}>Mac</Link>
            <Link to='/ipad' className='link' style={{color:'inherit', textDecoration:'none'}}>iPad</Link>
            <Link to='/iphone' className='link' style={{color:'inherit', textDecoration:'none'}}>iPhone</Link>
            <Link to='/watch' className='link' style={{color:'inherit', textDecoration:'none'}}>Watch</Link>
            <Link to='/air-pods' className='link' style={{color:'inherit', textDecoration:'none'}}>AirPods</Link>
            <Link to='/tv-home' className='link' style={{color:'inherit', textDecoration:'none'}}>TV & Home</Link>
            <Link to='/only-on-apple' className='link' style={{color:'inherit', textDecoration:'none'}}>Only on apple</Link>
            <Link to='/accessories' className='link' style={{color:'inherit', textDecoration:'none'}}>Accessories</Link>
            <Link to='/support' className='link' style={{color:'inherit', textDecoration:'none'}}>Support</Link>
            <Link to='/s' className='link' style={{color:'inherit', textDecoration:'none'}}>s</Link>
            <Link to='/b' className='link' style={{color:'inherit', textDecoration:'none'}}>b</Link>

    
        </div>
    </div>
  )
}

export default NavBar