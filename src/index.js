import React, {} from 'react'
import LancelotEllipsisButton from './components/AnimatedEllipsisButton/LancelotEllipsisButton'
import LancelotHamburguerButton from './components/AnimatedHamburguerButton/LancelotHamburguerButton'

export const ExampleComponent = ({ text }) => {
  return (
    <div style={{background:'#e1232a'}}>
      <LancelotHamburguerButton 
        rotationIntensity={3}
        animationTime={.4}
        buttonSize={3} 
        background='#e1232a'
        crossColor='white'
        hamburguerColor='white'
         />
    </div>
  )
}
