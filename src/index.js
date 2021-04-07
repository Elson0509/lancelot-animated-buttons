import React, {} from 'react'
import LancelotEllipsisButton from './components/AnimatedEllipsisButton/LancelotEllipsisButton'
import LancelotHamburguerButton from './components/AnimatedHamburguerButton/LancelotHamburguerButton'

export const ExampleComponent = ({ text }) => {
  return (
    <div style={{background:'black', padding:'80px'}}>
      <LancelotHamburguerButton
        animationTime={2}
        background="#ccc"
        buttonSize={8}
        clicked={()=>console.log("Lancelot!")}
        crossColor="#238a0e"
        disableHoverEffect
        hamburguerColor="purple"
        rotationIntensity={10}
      />
    </div>
  )
}
