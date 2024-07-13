import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {

  const [mailbox, setMailbox] = useState('')

  const { mailboxId } = useParams();

  useEffect(() => {
    let selectedBox = props.mailboxes.find((mailbox)=> mailbox.id === Number(mailboxId))
    setMailbox(selectedBox)
  }, [props.mailboxes, mailboxId])

  return mailbox ? (
    <div className="detail">
      <div className="detail-header">
          <h1>Mailbox Number: {mailbox.id}</h1>
          <h2>Boxholder: {mailbox.boxholder}</h2>
          <h3>Size: {mailbox.boxSize}</h3>
      </div>
    </div>
  ) : null;
}

export default MailboxDetails