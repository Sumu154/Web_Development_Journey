// App.jsx
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3000', {
  withCredentials: true,
})

function App() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to socket server:', socket.id)
    })

    socket.on('message', (msg) => {
      setResponse(msg)
    })

    // Optional: cleanup
    return () => {
      socket.disconnect()
    }
  }, [])

  const sendMessage = () => {
    socket.emit('message', message)
    setMessage('')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Socket.IO Test</h2>
      <input type="text" value={message} placeholder="Type a message"
      
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage} className='px-4 py-[2px] bg-blue-800 text-white rounded-2xl  '> Send </button>

      {response && <p>Server says: {response}</p>}
    </div>
  )
}

export default App
