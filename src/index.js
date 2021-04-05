import React, {Fragment} from 'react'
import styles from './styles.module.css'
import LancelotEllipsisButton from './components/AnimatedEllipsisButton/LancelotEllipsisButton'

export const ExampleComponent = ({ text }) => {
  return (
    <>
      <LancelotEllipsisButton 
        background="#012105" 
        ellipsisColor="white" 
        hoverEffectTime={.3}
        rotationIntensity='7x'
        animationTime={2.5}
        buttonSize='4x'
        checked={false}
        crossColor="#a12389"/>
      
      <div className={styles.test}>Example Component: {text}</div>
    </>
  )
}
