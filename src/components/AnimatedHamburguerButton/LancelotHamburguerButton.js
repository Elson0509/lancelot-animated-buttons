import React, {useState} from 'react';
import classes from './LancelotHamburguerButton.module.css'
import {StyleSheet, css} from 'aphrodite/no-important'
import PropTypes from 'prop-types';

const LancelotHamburguerButton = (props) => {
    const [checked, setChecked] = useState(props.checked || false)
    const standardBackground = '#fff'
    const standardPointer = 'pointer'
    const hamburguerStandardColor = 'black'
    const hoverEffectStandardTime = '.5'
    const crossStandardColor = 'red'
    const animationStandardTime = '.5'

    const rotationStandardIntensity = 0

    const buttonSize = {
        '2x':{
            size: '40px',
            hamburguerSize: '5px',
            hamburguerWidth: '22px',
            hamburguerHeight: '3px',
            hamburguerTop: '18px',
            hamburguerLeft: '9.5px',
            hamburguerBeforeAfterPosition: '-8px',
            crossHeight: '25px',
            crossTop: '8px',
            crossLeft: '18px',
        }
    }

    const standardButtonSize = buttonSize['2x']

    const styles = StyleSheet.create({
        background:{
            background: props.background || standardBackground,
            boxShadow: `0 0 0 0 ${props.background || standardBackground}`,
            cursor: props.cursor || standardPointer,
            transition: `box-shadow ${props.hoverEffectTime || hoverEffectStandardTime}s cubic-bezier(.58,3.16,.31,-0.09)`
        },
        size:{
            height: buttonSize[props.buttonSize]?.size || standardButtonSize.size,
            width: buttonSize[props.buttonSize]?.size || standardButtonSize.size,
        },
        hoverEffect:{
            ':hover':{
                boxShadow: `0 0 0 6px ${props.background || standardBackground}`
            }
        },
        hamburguer:{
            background: checked ? props.crossColor || crossStandardColor : props.hamburguerColor || hamburguerStandardColor ,
            width: checked ? '3px' : buttonSize[props.buttonSize]?.hamburguerWidth || standardButtonSize.hamburguerWidth,
            height: checked ? buttonSize[props.buttonSize]?.crossHeight || standardButtonSize.crossHeight : buttonSize[props.buttonSize]?.hamburguerHeight || standardButtonSize.hamburguerHeight,
            top: checked ? buttonSize[props.buttonSize]?.crossTop || standardButtonSize.crossTop : buttonSize[props.buttonSize]?.hamburguerTop || standardButtonSize.hamburguerTop,
            left: checked ? buttonSize[props.buttonSize]?.crossLeft || standardButtonSize.crossLeft : buttonSize[props.buttonSize]?.hamburguerLeft || standardButtonSize.hamburguerLeft,
            transform: checked ? `rotate(${45 + 180 * (props.rotationIntensity || rotationStandardIntensity)}deg)` : '',
            transition: `${props.animationTime || animationStandardTime}s ease-in-out`,
            ':after':{
                background: checked ? props.crossColor || crossStandardColor : props.hamburguerColor || hamburguerStandardColor,
                bottom: checked ? 0 : buttonSize[props.buttonSize]?.hamburguerBeforeAfterPosition || standardButtonSize.hamburguerBeforeAfterPosition,
            },
            ':before':{
                background: checked ? props.crossColor || crossStandardColor : props.hamburguerColor || hamburguerStandardColor,
                top: checked ? 0 : buttonSize[props.buttonSize]?.hamburguerBeforeAfterPosition || standardButtonSize.hamburguerBeforeAfterPosition,
                transform: checked ? `rotate(${-90 - 180 * (props.rotationIntensity || rotationStandardIntensity)}deg)` : '',
            },
        }
    })

    const clickHandler = () => {
        setChecked(prev => !prev)
        props.clicked && props.clicked()
        return true;
    }

    return (
        <div onClick={clickHandler} className={[classes.Menu, css(styles.background), css(styles.size), css(!props.disableHover && styles.hoverEffect)].join(' ')}>
            <span className={[classes.Hamburguer, css(styles.hamburguer)].join(' ')}></span>
        </div>
    )
}

LancelotHamburguerButton.propTypes = {
    animationTime: PropTypes.number,
    background: PropTypes.string,
    buttonSize: PropTypes.oneOf(['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
    checked: PropTypes.bool,
    crossColor: PropTypes.string,
    cursor: PropTypes.string,
    hoverEffectTime: PropTypes.number,
    rotationIntensity: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
}

export default LancelotHamburguerButton;