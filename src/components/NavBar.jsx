import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
  
    return (
      <nav className="navbar">
        <h4>MailboxNav</h4>
        <div>
          <Link to ='/'> Home </Link>
          <Link to ='/mailboxes'>Mailboxes</Link>
          <Link to= '/new-mailbox'>New Mailbox </Link>
        </div>
      </nav>
    )
  }
  
  export default NavBar