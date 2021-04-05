import React, {Fragment} from 'react'
import styles from './styles.module.css'
import LancelotEllipsisButton from './components/AnimatedEllipsisButton/LancelotEllipsisButton'

export const ExampleComponent = ({ text }) => {
  return (
    <>
      <LancelotEllipsisButton 
        background="#012105" 
        ellipsisColor="white" 
        hoverEffectTime="1"
        rotationIntensity='5x'
        animationTime={.5}
        
        crossColor="#a12389"/>
      
      <div className={styles.test}>Example Component: {text}</div>
    </>
  )
}
