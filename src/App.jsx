import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to the chat!', from: 'system', time: new Date().toLocaleTimeString() },
  ])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const newMsg = {
      id: messages.length + 1,
      text: input.trim(),
      from: 'user',
      time: new Date().toLocaleTimeString(),
    }
    setMessages((prev) => [...prev, newMsg])
    setInput('')
  }

  return (
    <div className="app">
      <header className="header">
        <h1>2-17 React Chat</h1>
      </header>
      <div className="chat">
        <ul className="messages">
          {messages.map((m) => (
            <li key={m.id} className={`message ${m.from}`}>
              <span className="bubble">{m.text}</span>
              <span className="time">{m.time}</span>
            </li>
          ))}
        </ul>
        <form className="input-row" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            aria-label="Message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default App
