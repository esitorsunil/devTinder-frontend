import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 ">
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by DevTinder❤️
        <Link to="/privacy-policy"><span className='hover:underline ms-7'>Privacy Policy</span></Link></p>
    </aside>
  </footer>
  )
}

export default Footer