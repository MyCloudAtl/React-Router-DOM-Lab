import { useNavigate } from 'react-router-dom'

const MailboxForm = (props) => {

  let navigate= useNavigate()
  
  const handleSubmit = (e) => {
    props.addBox(e)
    navigate('/mailboxes')
  }

  const newMailbox = props.newMailbox
console.log(props)

  return (
    <div>
    <h1>Add A New Mailbox</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newMailbox.boxholder} onChange={props.handleChange} name='boxholder' placeholder= 'boxholder' />
      <select value={newMailbox.boxSize} onChange={ props.handleChange} name={'boxSize'} placeholder={'boxSize'}>
                    <option value="select">select</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
      </select>
      <button type="Submit">Add Mailbox</button>
    </form>
    </div>
  );
}

export default MailboxForm