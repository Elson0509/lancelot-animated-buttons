import React, {} from 'react'
import LancelotEllipsisButton from './components/AnimatedEllipsisButton/LancelotEllipsisButton'
import LancelotHamburguerButton from './components/AnimatedHamburguerButton/LancelotHamburguerButton'

export const ExampleComponent = ({ text }) => {
  return (
    <div style={{background:'#e1232a'}}>
      <LancelotHamburguerButton 
        rotationIntensity={1}
        buttonSize={5} 
        background='#e1232a'
        crossColor='white'
        disableHoverEffect
        hamburguerColor='white'
        animationTime={1}
         />
    </div>
  )
}
