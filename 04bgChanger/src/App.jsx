import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white');

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{backgroundColor: color}}
        >
          <div className='w-full fixed flex flex-wrap justify-center align-middle bg-transparent bottom-7'>
              <div className='w-auto flex justify-center gap-3 p-2 bg-gray-200 rounded-2xl'>
                  <button className='rounded-lg'
                    onClick={() => {setColor('red')}}
                    style={{backgroundColor : 'red', padding: '5px 15px', cursor: 'pointer'}}
                  >Red</button>
                  <button className='rounded-lg'
                  onClick={() => {setColor('green')}}
                    style={{backgroundColor : 'green', padding: '5px 15px', cursor: 'pointer'}}
                  >Green</button>
                  <button className='rounded-lg'
                  onClick={() => {setColor('blue')}}
                    style={{backgroundColor : 'blue', padding: '5px 15px', cursor: 'pointer'}}
                  >Blue</button>
                  <button className='rounded-lg'
                  onClick={() => {setColor('olive')}}
                    style={{backgroundColor : 'olive', padding: '5px 15px', cursor: 'pointer'}}
                  >Olive</button>
                  <button className='rounded-lg'
                  onClick={() => {setColor('cyan')}}
                    style={{backgroundColor : 'cyan', padding: '5px 15px', cursor: 'pointer'}}
                  >Cyan</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
