import { useNavigate } from 'react-router-dom'
import React from 'react'

const MailboxList = (props) => {

  let navigate = useNavigate()

  const showMailbox = (mailbox) => {
    navigate(`${mailbox.id}`)
  }

  return (
    <div className="mail-box">
      {
      props.mailboxes.map((mailbox) => (
        <div className="mailbox-card" onClick={() => showMailbox(mailbox)} key={mailbox.id}>
          <h3>{mailbox.boxholder}</h3>
          <h4>{mailbox.id}</h4>
          <h4>{mailbox.boxSize}</h4>
        </div>
      ))}
    </div>
    
  )
}

export default MailboxList