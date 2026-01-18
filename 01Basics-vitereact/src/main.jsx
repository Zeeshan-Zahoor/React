import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MoreChai from './MoreChai.jsx'
import React from 'react'

function MyApp() {
  const anotherEl = " also click me"
  return (
    <>
      <a href="https://google.com" target="_blank" ><br /> Click here to visit google website. {anotherEl}</a>
    </>
  )
}

const domElement = React.createElement(
  'a', 
  {href: 'https://google.com', target: '_blank'}, 
  `click here to visit google website`
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {domElement}
    <MyApp/>
    <MoreChai/>
  </StrictMode>,
)
