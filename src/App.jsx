import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import mailboxesArray from './data/mailboxes'
// import LetterForm from './components/LetterForm'

const App = () => {
const [mailboxes, setMailboxes] = useState (mailboxesArray)
const [newMailbox, setNewMailbox] = useState ({
  id:'',
  boxholder:'',
  boxSize: '',
})
// const [letters, setLetters] = useState([])

const addBox = (e) => {
  e.preventDefault()
  const currentMailboxes = mailboxes
  const createdNewMailbox = {
    ...newMailbox,
    id: Number(mailboxes.length + 1),
  }
  currentMailboxes.push(createdNewMailbox)
  setMailboxes(currentMailboxes)
  setNewMailbox({id: '', boxholder: '', size: ''})
}
// const addLetter = (e) => {
//   e.preventDefault()
// }

const handleChange = (e) => {
  setNewMailbox({ ...newMailbox, [e.target.name]: e.target.value })
}

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<main><h1>Post Office</h1></main>}/>
          <Route path='/mailboxes' element={ <MailboxList mailboxes={mailboxes} />} />
          <Route path="/mailboxes/:mailboxID" element={ <MailboxDetails mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={ <MailboxForm addBox={addBox} newMailbox={newMailbox} handleChange={handleChange} />} />
        </Routes>
      </main>
    </div>
  )
};

export default App;

