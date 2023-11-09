import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div id='main_container'>
        <div id='top_text'>
          <p style={{
            color: 'hsl(227, 35%, 25%)',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}>Simple, traffic-based pricing</p>
          <p style={{
            color: 'hsl(225, 20%, 60%)',
            fontSize: '15px',
            paddingTop: '10px'
          }}>Sign-up for our 30 day trial.</p>
          <p style={{
            color: 'hsl(225, 20%, 60%)',

            paddingTop: '5px'
          }}>No credit card required.</p>
        </div>

        <div id='card'>
          <p style={{
            letterSpacing: ".1rem",
            color: 'hsl(225, 20%, 60%)',
            fontSize: '15px',
            textTransform: 'uppercase'
          }}>100k pageviews</p>
        </div>
      </div>
    </>
  )
}

export default App
