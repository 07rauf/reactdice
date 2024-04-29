import { useState } from 'react'
import './dice.css'
import dice1 from '../img/dice1.png'
import dice2 from '../img/dice2.png'
import dice3 from '../img/dice3.png'
import dice4 from '../img/dice4.png'
import dice5 from '../img/dice5.png'
import dice6 from '../img/dice6.png'
function Dice() {
let array = [dice1 , dice2 , dice3 , dice4 , dice5 ,dice6]
const [state , setState] = useState(dice1)
const [state1 , setState1] = useState(dice2)
  function firstdice(){
  setState(array[Math.floor(Math.random() * array.length)])
  }
  function seconddice(){
   setState1( array[Math.floor(Math.random() * array.length)])
  }
  return (
      <div className='Dice'>
          <img onClick={firstdice} src={state} alt='dice1'/>
            <img onClick={seconddice} src={state1} alt='dice1'/>
      </div>
    )
  }
  export default Dice